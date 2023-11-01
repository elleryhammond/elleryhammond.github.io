import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import "./index.css";

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
  cardData,
} from "../utils/constants.js";

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

function createCard(cardData) {
  const cardElement = new Card(cardData, "#card-template", (link, title) => {
    imagePreview.open(link, title);
  });
  return cardElement.getView();
}

function renderCard(cardData) {
  const element = createCard(cardData);
  cardSection.addItem(element);
}

const cardSection = new Section(
  { items: initialCards, renderer: renderCard },
  ".cards__list"
);
cardSection.renderItems();

// Create universal instances of validators

// const formValidators = {};
// const enableValidation = (config) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach((formElement) => {
//     const validator = new FormValidator(config, formElement);
//     const profileEditForm = formElement.getAttribute("edit-profile-form");
//     const addCardForm = formElement.getAttribute("add-card-form");
//     formValidators[profileEditForm] = validator;
//     formValidators[addCardForm] = validator;
//     validator.enableValidation();
//   });
// };
// enableValidation(config);

const profileEditFormValidator = new FormValidator(config, profileEditForm);
profileEditFormValidator.enableValidation();

const addCardFormValidator = new FormValidator(config, addCardForm);
addCardFormValidator.enableValidation();

function handleAddCardSubmit(data) {
  renderCard(data);
  addCardPopup.close();
}

function handleProfileEditSubmit(data) {
  newUserInfo.setUserInfo(data);
  console.log(data);
  editProfilePopup.close();
}

// Event Listeners //

profileEditOpenButton.addEventListener("click", () => {
  const data = newUserInfo.getUserInfo();
  profileTitleInput.value = data.name;
  profileDescriptionInput.value = data.description;
  editProfilePopup.open();
});

addCardOpenButton.addEventListener("click", () => {
  addCardFormValidator.resetValidation();
  addCardPopup.open();
});
