export default class UserInfo {
  constructor(nameSelector, descriptionSelector) {
    this._title = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._title.textContent,
      description: this._description.textContent,
    };
    return userInfo;
  }

  setUserInfo(formData) {
    this._title.textContent = formData.title;
    this._description.textContent = formData.description;
  }
}
