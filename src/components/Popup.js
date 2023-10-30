export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
  }

  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    document.addEventListener("keydown", this._handleEscClose);
    this._popupElement.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal_opened")) {
        this._close();
      }
    });
    const closeButton = this._popupElement.querySelector(".modal__close");
    closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
