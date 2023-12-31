// The UserInfo class is responsible for rendering information about the user on the page.
export default class UserInfo {
  // Take an object with the selectors of two elements into the constructor:
  //one for the profile’s name element and one for its job element.
  constructor(profileName, job, avatar) {
    this._profileName = document.querySelector(profileName); //".profile__title"  the current info
    this._job = document.querySelector(job); // ".profile__description"
    this._avatar = document.querySelector(avatar);
  }
  //Returns an object containing information about the user.
  //This method will be handy for cases when it's necessary to display the user data in the open form.
  getUserInfo() {
    const userInfo = {
      profileName: this._profileName.textContent,
      profileJob: this._job.textContent,
      profileAvatar: this._avatar.textContent,
    };

    return userInfo;
  }

  //which takes new user data and adds it to the page.
  //This method should be used after successful submission of the profile form.
  setUserInfo(values) {
    this._profileName.textContent = values.name;
    this._job.textContent = values.about;
  }

  setUserAvatar(values) {
    this._avatar.src = values.avatar;
  }
}
