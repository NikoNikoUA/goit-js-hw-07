import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imagesList = document.querySelector(".gallery");
const galleryImageEl = document.querySelector(".gallery__image");
const createdImagesMarkup = createImageListMarkup(galleryItems);

imagesList.insertAdjacentHTML("beforeend", createdImagesMarkup);

imagesList.addEventListener("click", onClickGetLargeImage);

function createImageListMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
    src="${preview}" 
    alt="${description}" />
  </a>
</li>`;
    })
    .join("");
}

function onClickGetLargeImage(event) {
  event.preventDefault();
  const lightbox = new SimpleLightbox(".gallery a", {
    sourceAttr: "href",
    captions: true,
    captionSelector: "img",
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionClass: "",
    captionDelay: 250,
  });
}
