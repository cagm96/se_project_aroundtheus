// The UserInfo class is responsible for rendering information about the user on the page.
export default class UserInfo {
  // Take an object with the selectors of two elements into the constructor:
  //one for the profile’s name element and one for its job element.
  constructor(profileName, job) {
    this._profileName = document.querySelector(profileName); //".profile__title"  the current info
    this._job = document.querySelector(job); // ".profile__description"
    this._profileTitleInput = document.querySelector("#profile-title-input");
    this._profileDescriptionInput = document.querySelector(
      "#profile-description-Input"
    );
  }
  //Returns an object containing information about the user.
  //This method will be handy for cases when it's necessary to display the user data in the open form.
  getUserInfo() {
    const userInfo = {
      profileName: this._profileName.textContent,
      profileJob: this._job.textContent,
    };

    return userInfo;
  }

  //which takes new user data and adds it to the page.
  //This method should be used after successful submission of the profile form.
  setUserInfo() {
    this._profileName.textContent = this._profileTitleInput.value;
    this._job.textContent = this._profileDescriptionInput.value;
  }
}
