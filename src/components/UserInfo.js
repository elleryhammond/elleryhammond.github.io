export default class UserInfo {
  constructor(nameSelector, descriptionSelector) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(descriptionSelector);
    // this._avatarElement = document.querySelector(avatarElement);
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      about: this._about.textContent,
    };
    return userInfo;
  }

  setUserInfo(userData) {
    this._name.textContent = userData.name;
    this._about.textContent = userData.about;
  }

  // setAvatar(userData) {
  //   this._avatarElement.src = userData;
  // }
}
