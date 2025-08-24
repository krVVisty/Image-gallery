document.addEventListener("DOMContentLoaded", () => {
  const selectedImage = document.getElementById("displayImage");
  const btnPrev = document.getElementById("prev");
  const btnNext = document.getElementById("next");
  const thumbsWrap = document.getElementById("thumbnails");

  const thumbnails = [];
  let current = 0;

  // EXACT file names (case-sensitive). If your files are IMG_001.JPG, use that exact name.
  const images = [
    { src: "assets/images/img1.JPG", alt: "Image 1" },
    { src: "assets/images/img2.JPG", alt: "Image 2" },
    { src: "assets/images/img3.JPG", alt: "Image 3" },
  ];

  // Robustly set the large image (preload first to avoid flicker/black frames)
  function setLarge(index) {
    current = (index + images.length) % images.length;
    const { src, alt } = images[current];

    const loader = new Image();
    loader.decoding = "async";
    loader.onload = () => {
      selectedImage.src = src;
      selectedImage.alt = alt || "";
      highlightCurrent();
    };
    loader.onerror = () => {
      console.error("404 or load error:", src);
      // Optional: provide a placeholder if desired
      // selectedImage.src = "assets/images/placeholder.jpg";
      highlightCurrent();
    };
    loader.src = src;
  }

  // Build thumbnails dynamically
  images.forEach((img, i) => {
    const t = document.createElement("img");
    t.src = img.src; // If you create lighter thumb files, point here instead
    t.alt = img.alt || "";
    t.className = "thumbnail";
    t.loading = "lazy";
    t.decoding = "async";
    t.addEventListener("click", () => setLarge(i));

    thumbsWrap.appendChild(t);
    thumbnails.push(t);
  });

  // Visual highlight of the active thumbnail
  function highlightCurrent() {
    thumbnails.forEach((el) => el.classList.remove("selectedThumbnail"));
    if (thumbnails[current])
      thumbnails[current].classList.add("selectedThumbnail");
  }

  // Navigation handlers
  function next() {
    setLarge(current + 1);
  }
  function prev() {
    setLarge(current - 1);
  }

  btnNext.addEventListener("click", next);
  btnPrev.addEventListener("click", prev);

  window.addEventListener("keydown", (e) => {
    if (e.code === "ArrowRight") next();
    if (e.code === "ArrowLeft") prev();
  });

  // Initialise
  setLarge(0);
});
