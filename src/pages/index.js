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
  })
  .catch((err) => {
    console.error(err);
  });

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

let cardElement;

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

// Functions //

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
    })
    .finally(() => addCardPopup.setLoading(false, "addCard"));
}

function handleProfileEditSubmit(data) {
  api.updateUserInfo(data.name, data.about).then((res) => {
    newUserInfo.setUserInfo(res);
  });
  editProfilePopup.close();
}

function handleLikeClick(card) {
  if (cardElement.isLiked) {
    api
      .unlikeCard(card)
      .then((res) => {
        cardElement.updateLikeStatus(res.isLiked);
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    api
      .likeCard(card)
      .then((res) => {
        cardElement.updateLikeStatus(res.isLiked);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

// function handleDeleteClick() {}

// const updateAvatarForm = new PopupWithForm("#avatar-image-modal", (avatar) => {
//   api
//     .updateAvatar(avatar)
//     .then((avatar) => {
//       userData.updateAvatar(avatar.link, avatar.name);
//       updateAvatarForm.close();
//     })
//     .catch((err) => {
//       console.error(err);
//     });

//   const editAvatarButton = document.querySelector("#avatar-edit-button");
//   editAvatarButton.addEventListener("click", () => {});

//   updateAvatarForm.setEventListeners();
// });

// Event Listeners //

profileEditOpenButton.addEventListener("click", () => {
  const data = newUserInfo.getUserInfo();
  profileTitleInput.value = data.name;
  profileDescriptionInput.value = data.about;
  editProfilePopup.open();
});

addCardOpenButton.addEventListener("click", () => {
  formValidators["edit-profile-form"].resetValidation();
  addCardPopup.open();
});

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
