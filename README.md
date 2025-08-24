# Reflection

## Achieved Requirements

- Successfully implemented a **local image gallery** with thumbnails and full-screen display.
- Added **side navigation arrows** to cycle through images using both clicks and keyboard arrows.
- Implemented a **toggle button** to minimize/maximize the thumbnail bar, allowing better focus on full-screen images.
- Applied **responsive CSS**, so the gallery adapts to mobile and tablet screens.
- Ensured **image preloading** to prevent flickering or black frames on load.
- Used **semantic and clean HTML structure**, keeping JS logic separated in `app.js`.

## Unachieved Requirements / Difficulties

- At first, the **thumbnail toggle button** positioning and z-index caused it to be hidden behind images.
- Large image files (~5 MB each) initially caused slow loading in some tests, requiring preloading for smooth display.
- The requirement to dynamically generate thumbnails while keeping performance optimal was challenging at first.

## Reflection

- Learning how **JavaScript DOM manipulation** works in practice was very valuable. Preloading images and handling errors (`onerror`) was an important lesson.
- I realized the importance of **case sensitivity** in filenames, especially on macOS, as `.JPG` vs `.jpg` made images not load.
- External resources like **YouTube tutorials on JS galleries and MDN documentation** were extremely helpful.
- Next time, I could improve **performance by using smaller thumbnail versions** instead of full-size images.
- I also ran **Lighthouse report** using the browser's Inspect tool, and the gallery received a medium performance score. This is likely because the image files are still large (~5 MB each), so compressing them to smaller sizes would improve performance.
- Overall, the project went well; the gallery is now fully functional, interactive, and visually responsive.
