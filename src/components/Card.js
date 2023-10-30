export default class Card {
  constructor(cardData, cardSelector, handleImageClick) {
    this._title = cardData.title;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  getView() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    const cardTitle = this._cardElement.querySelector(".card__title");
    const cardImage = this._cardElement.querySelector(".card__image");
    cardTitle.textContent = this._title;
    cardImage.setAttribute("src", this._link);
    cardImage.setAttribute("alt", this._title);
    return this._cardElement;
  }

  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._likeButton.addEventListener("click", this._handleLikeButton);

    this._deleteCardButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._deleteCardButton.addEventListener(
      "click",
      this._handleDeleteCardButton
    );

    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._title, this._link);
    });
  }

  _handleLikeButton = () => {
    this._likeButton.classList.toggle("card__like-button_active");
  };

  _handleDeleteCardButton = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };
}