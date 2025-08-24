// console.log("Hello world!");

// 1. Images data array (for now only 3 images)
const images = [
  {
    url: "./assets/images/img1.jpeg",
    altText: "Image 1 description",
  },
  {
    url: "./assets/images/img2.jpeg",
    altText: "Image 2 description",
  },
  {
    url: "./assets/images/img3.jpeg",
    altText: "Image 3 description",
  },
];
/* 
We create an array ([]) of objects ({}), each representing one image.
url → the path to the image file (local or online).
altText → alternative text for the image, useful for accessibility and displayed if the image cannot load.
Using an array allows us to manage multiple images easily and use a loop instead of creating each thumbnail manually. 
*/

// 2. Function that makes thumbnails
function createThumbnails() {
  const thumbnailContainer = document.getElementById("thumbnail-container");

  for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");
    img.src = images[i].url;
    img.alt = images[i].altText;
    img.className = "thumbnail";
    img.addEventListener("click", () => createLargeImageHandler(images[i]));
    thumbnailContainer.appendChild(img);
  }
}
/* 
1. document.getElementById("thumbnail-container")
We select the HTML element with id thumbnail-container to hold the thumbnails.

2. for (let i = 0; i < images.length; i++)
A for loop goes through all the elements in the images array.
i is the index of the current image.

3. document.createElement("img")
We create a new <img> element for the thumbnail.

4. img.src = images[i].url
Set the image source – where the file is loaded from.

5. img.alt = images[i].altText
Set the alternative text for accessibility.

6. img.className = "thumbnail"
Assign a CSS class for styling (e.g., size 100px).
img.addEventListener("click", () => createLargeImageHandler(images[i]))

7. Add an event listener: clicking the thumbnail calls createLargeImageHandler to show the large image.

8. thumbnailContainer.appendChild(img)
Append the image element to the thumbnail container in HTML. 
*/
