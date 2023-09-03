const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// Templates
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

// Wrappers
const cardsWrap = document.querySelector(".cards__list");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const imageModal = document.querySelector("#image-modal");

const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardForm = addCardModal.querySelector(".modal__form");

// Buttons and other DOM Nodes
const profileEditOpenButton = document.querySelector(
  "#edit-profile-open-button"
);
const profileEditCloseButton = profileEditModal.querySelector(
  "#edit-profile-close-button"
);
const addCardOpenButton = document.querySelector(".profile__add-button");
const addCardCloseButton = addCardModal.querySelector(
  "#add-modal-close-button"
);
// const imageModalOpenButton = document.querySelector(".modal__image");
// const imageModalCloseButton = document.querySelector;

// Profile DOM Nodes
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// Forrm Data & Elements
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

const newCardTitleInput = document.querySelector("#new-card-title-input");
const newCardLinkInput = document.querySelector("#new-card-link-input");

const modalImage = imageModal.querySelector(".modal__image");
const modalCaption = imageModal.querySelector(".modal__caption");

// const openModal = (modal) => {
//   modal.classList.add("modal_opened");
// };
// const closeModal = (modal) => {
//   modal.classList.remove("modal_opened");
// };

/*Functions*/
function closeEditModal() {
  profileEditModal.classList.remove("modal_opened");
}

function closeAddModal() {
  addCardModal.classList.remove("modal_opened");
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const likeButton = cardElement.querySelector(".card__like-button");
  // const deleteButton = cardElement.querySelector(".card__delete-button");
  const imageElement = cardElement.querySelector(".card__image");
  imageElement.src = cardData.link;
  imageElement.alt = cardData.name;
  const cardTitleEl = cardElement.querySelector(".card__title");
  cardTitleEl.textContent = cardData.name;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  // find delete button
  // add the event listener to the delete button
  // cardElement.remove();
  // add click listener to the cardImage element
  // openModal with previewImageModal

  // imageElement.addEventListener("click", () => {
  //   const imageModal = imageModal.querySelector("#image__modal");
  //   imageElement.src = cardData.link;
  //   openModal(imageModal);
  // });

  return cardElement;
}

/*Event Handlers*/
function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeEditModal;
}

function handleAddCardSubmit(event) {
  event.preventDefault();
  const name = newCardTitleInput.value;
  const link = newCardLinkInput.value;
  renderCard({ name, link }, cardsWrap);
  closeAddModal();
}

/*Event Listeners*/
profileEditOpenButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileEditCloseButton.addEventListener("click", closeEditModal);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardForm.addEventListener("submit", handleAddCardSubmit);

addCardOpenButton.addEventListener("click", () => {
  newCardTitleInput.value = newCardTitleInput.textContent;
  newCardLinkInput.value = newCardLinkInput.textContent;
  addCardModal.classList.add("modal_opened");
});

addCardCloseButton.addEventListener("click", closeAddModal);

initialCards.forEach((cardData) => renderCard(cardData, cardsWrap));
// initialCards.forEach((cardData) => {
//   const cardElement = getCardElement(cardData);
//   cardListEl.append(cardElement);
// });
