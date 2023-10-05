import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const galleryCards = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) => {
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
});

galleryCards.insertAdjacentHTML("beforeend", markup.join(""));
galleryCards.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const currentCard = event.target.closest(".gallery__item");
  const card = galleryItems.find(
    (item) =>
      item.original ===
      currentCard.querySelector("img").getAttribute("data-source")
  );
  const instance = basicLightbox.create(
    `
    <div class="modal">
    <img src="${card.original}" width="800" height="600"
    </div>
`,
    {
      onShow: () => {
        window.addEventListener("keydown", onKey);
      },
      onClose: () => {
        window.removeEventListener("keydown", onKey);
      },
    }
  );
  function onKey(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
  instance.show();
}
