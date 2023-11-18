export const initialCards = [
  {
    title: "Latourell Falls",
    link: "https://images.unsplash.com/photo-1614271642428-5fc1b214d5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
  },
  {
    title: "Mount Rainier",
    link: "https://images.unsplash.com/photo-1515310787031-25ac2d68610d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
  },
  {
    title: "Arches National Park",
    link: "https://plus.unsplash.com/premium_photo-1674664242929-f562b1069c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
  },
  {
    title: "Blue Ridge Parkway",
    link: "https://images.unsplash.com/photo-1541424729898-d4420afb9602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2864&q=80",
  },
  {
    title: "Morris Island Lighthouse",
    link: "https://images.unsplash.com/photo-1658518449993-1030370f1de4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2112&q=80",
  },
  {
    title: "Portland, Oregon",
    link: "https://images.unsplash.com/photo-1635209896150-ef275dbd52a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2875&q=80",
  },
];

export const cardData = {
  title: "Latourell Falls",
  link: "https://images.unsplash.com/photo-1614271642428-5fc1b214d5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
};

// export const cardTemplate = document
//   .querySelector("#card-template")
//   .content.querySelector(".card");

export const cardsWrap = document.querySelector(".cards__list");

export const profileEditModal = document.querySelector("#profile-edit-modal");
export const profileEditForm = document.forms["edit-profile-form"];
export const profileEditOpenButton = document.querySelector(
  "#edit-profile-open-button"
);
export const profileEditCloseButton = profileEditModal.querySelector(
  "#edit-profile-close-button"
);

export const addCardModal = document.querySelector("#add-card-modal");
export const addCardForm = document.forms["add-card-form"];
export const addCardOpenButton = document.querySelector(
  "#add-card-open-button"
);
export const addCardCloseButton = addCardModal.querySelector(
  "#add-card-close-button"
);

export const deleteCardModal = document.querySelector("#delete-card-modal");
export const deleteCardCloseButton = document.querySelector(
  "#delete-card-close-button"
);

export const imageModal = document.querySelector("#image-modal");
export const imageModalPreview = document.querySelector("#image-preview-modal");
export const previewModalCloseButton = document.querySelector(
  "#image-preview-modal-close-button"
);
export const modalCaption = document.querySelector(".modal__caption");

export const editAvatarModal = document.querySelector("#avatar-image-modal");
export const editAvatarForm = document.forms["edit-avatar-form"];
export const editAvatarOpenButton = document.querySelector(
  "#avatar-edit-button"
);

export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);

export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

export const newCardTitleInput = document.querySelector(
  "#new-card-title-input"
);
export const newCardLinkInput = document.querySelector("#new-card-link-input");

export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
