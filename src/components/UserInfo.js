// The UserInfo class is responsible for rendering information about the user on the page.
export default class UserInfo {
  // Take an object with the selectors of two elements into the constructor:
  //one for the profile’s name element and one for its job element.
  constructor(profileName, job) {
    this._profileName = document.querySelector(profileName); //".profile__title"  the current info
    this._job = document.querySelector(job); // ".profile__description"
  }
  //Returns an object containing information about the user.
  //This method will be handy for cases when it's necessary to display the user data in the open form.
  getUserInfo() {
    const profileName = this._profileName.textContent;
    const profileJob = this._job.textContent;
  }

  //which takes new user data and adds it to the page.
  //This method should be used after successful submission of the profile form.
  setUserInfo() {
    const profileTitleInput = document.querySelector("#profile-title-input");
    const profileDescriptionInput = document.querySelector(
      "#profile-description-Input"
    );

    this._profileName.textContent = profileTitleInput.value;
    this._job.textContent = profileDescriptionInput.value;
  }
}
