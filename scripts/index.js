const initialCards = [
  {
    name: "Latourell Falls",
    link: "https://images.unsplash.com/photo-1614271642428-5fc1b214d5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
  },
  {
    name: "Mount Rainier",
    link: "https://images.unsplash.com/photo-1515310787031-25ac2d68610d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
  },
  {
    name: "Arches National Park",
    link: "https://plus.unsplash.com/premium_photo-1674664242929-f562b1069c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
  },
  {
    name: "Blue Ridge Parkway",
    link: "https://images.unsplash.com/photo-1541424729898-d4420afb9602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80",
  },
  {
    name: "Morris Island Lighthouse",
    link: "https://images.unsplash.com/photo-1658518449993-1030370f1de4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2112&q=80",
  },
  {
    name: "Portland, Oregon",
    link: "https://images.unsplash.com/photo-1635209896150-ef275dbd52a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2875&q=80",
  },
];

// Templates
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

// Wrappers
// const modalWindow = document.querySelectorAll(".modal");
const cardsWrap = document.querySelector(".cards__list");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const imageModal = document.querySelector("#image-modal");
const imageModalPreview = document.querySelector("#image-preview-modal");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardForm = addCardModal.querySelector(".modal__form");

// Buttons and other DOM Nodes
const profileEditOpenButton = document.querySelector(
  "#edit-profile-open-button"
);
const profileEditCloseButton = profileEditModal.querySelector(
  "#edit-profile-close-button"
);
const addCardOpenButton = document.querySelector("#add-card-open-button");
const addCardCloseButton = addCardModal.querySelector("#add-card-close-button");
const previewModalCloseButton = document.querySelector(
  "#image-preview-modal-close-button"
);

// Profile DOM Nodes
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// Form Data & Elements
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const newCardTitleInput = document.querySelector("#new-card-title-input");
const newCardLinkInput = document.querySelector("#new-card-link-input");
const modalImage = imageModal.querySelector(".modal-image");
const modalCaption = imageModal.querySelector(".modal__caption");

/*Functions*/
function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  cardElement.querySelector(".card__title").textContent = cardData.name;
  const imageElement = cardElement.querySelector(".card__image");
  imageElement.src = cardData.link;
  imageElement.alt = cardData.name;
  const modalCaption = imageModal.querySelector(".modal__caption");
  modalCaption.textContent = cardData.name;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  imageElement.addEventListener("click", function () {
    imageModalPreview.src = cardData.link;
    toggleModalWindow(imageModal);
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  return cardElement;
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));

/*Event Listeners & Handlers*/
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardForm.addEventListener("submit", handleAddCardSubmit);

function toggleModalWindow(modal) {
  modal.classList.toggle("modal_opened");
}

profileEditOpenButton.addEventListener("click", () =>
  toggleModalWindow(profileEditModal)
);
profileEditCloseButton.addEventListener("click", () =>
  toggleModalWindow(profileEditModal)
);

addCardOpenButton.addEventListener("click", () =>
  toggleModalWindow(addCardModal)
);
addCardCloseButton.addEventListener("click", () =>
  toggleModalWindow(addCardModal)
);

previewModalCloseButton.addEventListener("click", () =>
  toggleModalWindow(imageModal)
);

function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  toggleModalWindow(profileEditModal);
}

function handleAddCardSubmit(event) {
  event.preventDefault();
  const name = newCardTitleInput.value;
  const link = newCardLinkInput.value;
  renderCard({ name, link }, cardsWrap);
  toggleModalWindow(addCardModal);
}
