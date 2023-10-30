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

// profileEditCloseButton.addEventListener("click", () =>
//   closeModal(profileEditModal)
// );

// addCardCloseButton.addEventListener("click", () => closeModal(addCardModal));

// previewModalCloseButton.addEventListener("click", () => closeModal(imageModal));

// // Functions

// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", closeModalByEsc);
//   document.removeEventListener("mousedown", closeModalOnRemoteClick);
// }

// function closeModalByEsc(event) {
//   if (event.key === "Escape") {
//     const openedModal = document.querySelector(".modal_opened");
//     closeModal(openedModal);
//   }
// }

// function closeModalOnRemoteClick(event) {
//   if (event.target.classList.contains("modal_opened")) {
//     const openedModal = document.querySelector(".modal_opened");
//     closeModal(openedModal);
//   }
// }

const newUserInfo = new UserInfo(".profile__title", ".profile__description");

const addCardPopup = new PopupWithForm("#add-card-modal", handleAddCardSubmit);
addCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
editProfilePopup.setEventListeners();

const imagePreview = new PopupWithImage("#image-modal");
imagePreview.setEventListeners();

const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
  ".cards__list"
);
cardSection.renderItems();

const profileEditFormValidator = new FormValidator(config, profileEditForm);
profileEditFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(config, addCardForm);
addCardFormValidator.enableValidation();

// Functions //

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleImageClick);
  const element = card.getView();
  cardSection.addItem(element);
}

function handleImageClick() {
  imageModalPreview.setAttribute("src", this._link);
  imageModalPreview.setAttribute("alt", this._name);
  modalCaption.textContent = this._name;
  imagePreview.open();
}

function handleAddCardSubmit(data) {
  renderCard(data);
  addCardPopup.close();
}

function handleProfileEditSubmit(formData) {
  newUserInfo.setUserInfo(formData);
  editProfilePopup.close();
}

// Event Listeners //

profileEditOpenButton.addEventListener("click", () => {
  const data = newUserInfo.getUserInfo();
  profileTitleInput.value = data.name;
  profileDescriptionInput.value = data.description;
  profileEditFormValidator.resetValidation();
  editProfilePopup.open();
});

addCardOpenButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardPopup.open();
});

// function handleAddCardSubmit(event) {
//   event.preventDefault();
//   const name = newCardTitleInput.value;
//   const link = newCardLinkInput.value;
//   const cardElement = renderCard({ name, link });
//   cardsWrap.prepend(cardElement);
//   addCardForm.reset();
//   closeModal(addCardModal);
//   addCardFormValidator.resetValidation();
// }

// initialCards.forEach((cardData) => {
//   const cardElement = renderCard(cardData);
//   cardsWrap.append(cardElement);
// });

// profileEditOpenButton.addEventListener("click", () => {
//   profileTitleInput.value = profileTitle.textContent;
//   profileDescriptionInput.value = profileDescription.textContent;
//   openModal(profileEditModal);
// });

// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", closeModalByEsc);
//   document.addEventListener("mousedown", closeModalOnRemoteClick);
// }
