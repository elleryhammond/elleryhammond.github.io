import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

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
  editAvatarModal,
  editAvatarForm,
  editAvatarOpenButton,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
  newCardTitleInput,
  newCardLinkInput,
  config,
  cardData,
} from "../utils/constants.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "67f9ee29-81ba-42c1-865a-539d34535736",
    "Content-Type": "application/json",
  },
});

let cardSection;

api
  .getInitialCards()
  .then((res) => {
    cardSection = new Section(
      {
        items: res,
        renderer: renderCard,
      },
      ".cards__list"
    );

    cardSection.renderItems();
  })
  .catch((err) => {
    console.error(err);
  });

api
  .getUserInfo()
  .then((userData) => {
    newUserInfo.setUserInfo(userData);
    // newUserInfo.setUserAvatar(userData.avatar);
  })
  .catch((err) => {
    console.error(err);
  });

const newUserInfo = new UserInfo(
  ".profile__title",
  ".profile__description",
  ".profile__image"
);

// ADD CARD //

function handleAddCardSubmit(data) {
  addCardPopup.setLoading(true);
  api
    .addCard(data)
    .then((res) => {
      renderCard(res);
      addCardPopup.close();
    })
    .catch((err) => {
      console.error(err);
    });
  // .finally(() => addCardPopup.setLoading(false, "addCard"));
}
const addCardPopup = new PopupWithForm("#add-card-modal", handleAddCardSubmit);
addCardPopup.setEventListeners();

addCardOpenButton.addEventListener("click", () => {
  formValidators["edit-profile-form"].resetValidation();
  addCardPopup.open();
});

// EDIT PROFILE //

function handleProfileEditSubmit(data) {
  api.updateUserInfo(data.name, data.about).then((res) => {
    newUserInfo.setUserInfo(res);
  });
  editProfilePopup.close();
}
const editProfilePopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
editProfilePopup.setEventListeners();

profileEditOpenButton.addEventListener("click", () => {
  const data = newUserInfo.getUserInfo();
  profileTitleInput.value = data.name;
  profileDescriptionInput.value = data.about;
  editProfilePopup.open();
});

// CHANGE AVATAR //

function handleAvatarFormSubmit(data) {
  api
    .updateAvatar(data.link)
    .then((data) => {
      newUserInfo.setUserAvatar(data);
      updateAvatarForm.close();
    })
    .catch((err) => {
      console.error(err);
    });
}
const updateAvatarForm = new PopupWithForm(
  "#avatar-image-modal",
  handleAvatarFormSubmit
);
updateAvatarForm.setEventListeners();

editAvatarOpenButton.addEventListener("click", () => {
  formValidators["edit-avatar-form"].resetValidation();
  updateAvatarForm.open();
});

// IMAGE PREVIEW //

const imagePreview = new PopupWithImage("#image-modal");
imagePreview.setEventListeners();

// CREATE AND RENDER CARD FUNCTIONS

function createCard(cardData) {
  const cardElement = new Card(
    cardData,
    "#card-template",
    handleLikeClick,
    (link, name) => {
      imagePreview.open(link, name);
    }
  );
  return cardElement.getView();
}

function renderCard(cardData) {
  const element = createCard(cardData);
  cardSection.addItem(element);
}

// LIKE CLICK HANDLER //

function handleLikeClick(item) {
  if (!item.isLiked) {
    api
      .likeCard(item.getId())
      .then((res) => {
        item.updateLikeStatus(res.isLiked);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    api
      .unlikeCard(item.getId())
      .then((res) => {
        item.updateLikeStatus(res.isLiked);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

// function handleDeleteClick() {}

// FORM VALIDATION //
const formValidators = {};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(config);
