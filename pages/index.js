import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

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

const cardData = {
  name: "Latourell Falls",
  link: "https://images.unsplash.com/photo-1614271642428-5fc1b214d5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
};

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

// Selectors
const cardsWrap = document.querySelector(".cards__list");

const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditForm = document.forms["edit-profile-form"];
const profileEditOpenButton = document.querySelector(
  "#edit-profile-open-button"
);
const profileEditCloseButton = profileEditModal.querySelector(
  "#edit-profile-close-button"
);

const addCardModal = document.querySelector("#add-card-modal");
const addCardForm = document.forms["add-card-form"];
const addCardOpenButton = document.querySelector("#add-card-open-button");
const addCardCloseButton = addCardModal.querySelector("#add-card-close-button");

const imageModal = document.querySelector("#image-modal");
const imageModalPreview = document.querySelector("#image-preview-modal");
const previewModalCloseButton = document.querySelector(
  "#image-preview-modal-close-button"
);
const modalCaption = document.querySelector(".modal__caption");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

const newCardTitleInput = document.querySelector("#new-card-title-input");
const newCardLinkInput = document.querySelector("#new-card-link-input");

// Event Listeners
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

addCardForm.addEventListener("submit", handleAddCardSubmit);

profileEditOpenButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});
profileEditCloseButton.addEventListener("click", () =>
  closeModal(profileEditModal)
);

addCardOpenButton.addEventListener("click", () => openModal(addCardModal));
addCardCloseButton.addEventListener("click", () => closeModal(addCardModal));

previewModalCloseButton.addEventListener("click", () => closeModal(imageModal));

// Functions
function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  return card.getView();
}

initialCards.forEach((cardData) => {
  const cardElement = renderCard(cardData);
  cardsWrap.append(cardElement);
});

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalByEsc);
  document.addEventListener("mousedown", closeModalOnRemoteClick);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalByEsc);
  document.removeEventListener("mousedown", closeModalOnRemoteClick);
}

function closeModalByEsc(event) {
  if (event.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

function closeModalOnRemoteClick(event) {
  if (event.target.classList.contains("modal_opened")) {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  profileEditForm.reset();
  closeModal(profileEditModal);
}

function handleAddCardSubmit(event) {
  event.preventDefault();
  const name = newCardTitleInput.value;
  const link = newCardLinkInput.value;
  const cardElement = renderCard({ name, link });
  cardsWrap.prepend(cardElement);
  addCardForm.reset();
  closeModal(addCardModal);
  addCardFormValidator.resetValidation();
}

function handleImageClick() {
  openModal(imageModal);
  imageModalPreview.setAttribute("src", this._link);
  imageModalPreview.setAttribute("alt", this._name);
  modalCaption.textContent = this._name;
}

// Form Validation

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const profileEditFormValidator = new FormValidator(config, profileEditForm);
profileEditFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(config, addCardForm);
addCardFormValidator.enableValidation();
