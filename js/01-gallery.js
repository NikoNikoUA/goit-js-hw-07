import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";
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
  event.preventDefault();
  window.addEventListener("keydown", onEscClick);
  const imgOriginalEl = event.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${imgOriginalEl}">`);
  instance.show();
}

function onModalClose() {
  window.removeEventListener("keydown", onEscClick);
  instance.close();
}

function onEscClick(event) {
  if (event.code === "Escape") {
    onModalClose();
  }
}
