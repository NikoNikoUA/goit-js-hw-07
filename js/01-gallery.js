import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const imagesList = document.querySelector(".gallery");
const createdImagesMarkup = createImageListMarkup(galleryItems);

imagesList.insertAdjacentHTML("beforeend", createdImagesMarkup);

imagesList.addEventListener("click", onClickGetLargeImage);

function createImageListMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onClickGetLargeImage(event) {
  if (event.target.nodeName !== "IMG") {
    console.log(event.target.nodeName);
    return;
  }
  event.preventDefault();
  const imgOriginalEl = event.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${imgOriginalEl}">`);
  instance.show();

  imagesList.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      imagesList.removeEventListener("keydown", event);
      instance.close();
    }
  });
}
