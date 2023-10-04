import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryCards = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
});

galleryCards.insertAdjacentHTML("beforeend", markup.join(""));
galleryCards.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  var lightbox = new SimpleLightbox(".gallery a", {
    caption: true,
    captionsData: "alt",
    captionDelay: 250,
  });
  console.log("lightbox");
}
