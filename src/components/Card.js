export default class Card {
  constructor(
    { name, link, _id, isLiked },
    cardSelector,
    handleLikeClick,
    handleImageClick
  ) {
    this._name = name;
    this._link = link;
    this.id = _id;
    this._isLiked = isLiked;
    this._cardSelector = cardSelector;
    this._handleLikeClick = handleLikeClick;
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
    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteCardButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._setEventListeners();
    this._renderLikes();
    const cardTitle = this._cardElement.querySelector(".card__title");
    cardTitle.textContent = this._name;
    this._cardImage.setAttribute("src", this._link);
    this._cardImage.setAttribute("alt", this._name);
    return this._cardElement;
  }

  _setEventListeners() {
    this._cardElement.querySelector(".card__like-button");
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
    });

    this._cardElement.querySelector(".card__delete-button");
    this._deleteCardButton.addEventListener(
      "click",
      this._handleDeleteCardButton
    );

    this._cardImage = this._cardElement.querySelector(".card__image");
    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._name, this._link);
    });
  }

  _handleDeleteCardButton = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  updateLikeStatus(isLiked) {
    this._isLiked = isLiked;
    this._renderLikes();
  }

  _renderLikes() {
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }
}
