// import all of the classes
import Card from "../src/components/Card.js";
import FormValidator from "../src/components/FormValidator.js";
import Popup from "../src/components/Popup.js";
import PopupWithForm from "../src/components/PopupWithForm.js";
import PopupWithImage from "../src/components/PopupWithImage.js";
import Section from "../src/components/Section.js";
import UserInfo from "../src/components/UserInfo.js";

import {
  initialCards,
  cardsWrap,
  profileEditModal,
  profileEditForm,
  profileEditOpenButton,
  profileEditCloseButton,
  addCardModal,
  addCardForm,
  addCardOpenButton,
  addCardCloseButton,
  imageModal,
  imageModalPreview,
  previewModalCloseButton,
  modalCaption,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
  newCardTitleInput,
  newCardLinkInput,
  config,
} from "../src/utils/constants.js";

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

// initialCards.forEach((cardData) => {
//   const cardElement = renderCard(cardData);
//   cardsWrap.append(cardElement);
// });

// Functions
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

// Current Functions
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

// NEW functions
// function handleImageClick(card) {
//   const data = {
//     link: card.src,
//     name: card.src,
//   };
//   imagePreview.open(cardData);
// }

// function handleAddCardSubmit(cardData) {
//   renderCard(cardData);
//   addCardPopup.close();
// }

// function handleProfileEditSubmit(cardData) {
//   userInfo.setUserInfo(cardData);
//   editProfilePopup.close();
// }

// FUNCTIONS
function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  const element = card.getView();
  cardSection.addItem(element);
}

// Form Validator class
const profileEditFormValidator = new FormValidator(config, profileEditForm);
profileEditFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(config, addCardForm);
addCardFormValidator.enableValidation();

// Popup class

// PopupWithForm class
const addCardPopup = new PopupWithForm("#add-card-modal", handleAddCardSubmit);
// addCardPopup.setEventListeners();

const userInfo = new UserInfo(".profile__title", ".profile__description");
const editProfilePopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
// editProfilePopup.setEventListeners();

const imagePreview = new PopupWithImage("#modal__preview-image");
// imagePreview.setEventListeners();

// Section class
const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
  ".cards__list"
);
cardSection.renderItems();

// addCardOpenButton.addEventListener("click", () => {
//   addCardPopup.open();
// });
