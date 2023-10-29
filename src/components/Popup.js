export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", () => this._handleEscClose());
    this.setEventListeners();
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose());
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
      // event.preventDefault();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        this.close(event.target);
      }
    });
    this._handleEscClose.addEventListener("click", () => {
      this.close();
    });
  }
}
