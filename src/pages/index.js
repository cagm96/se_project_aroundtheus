import * as constants from "../utils/constants.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupQuestion from "../components/PopupQuestion.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import "../pages/index.css";

const cardSection = new Section(renderCard, constants.cardListEl);
const userInfo = new UserInfo(
  ".profile__title",
  ".profile__description",
  ".profile__image"
);

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "f1dab6ed-e5ba-44ef-bef1-7369d7e9bf0d",
    "Content-Type": "application/json",
  },
});

api
  .getUserInfo()
  .then((res) => {
    userInfo.setUserInfo(res);
    userInfo.setUserAvatar(res);
  })
  .catch((err) => {
    console.error(`Error ${err}`);
  });
api
  .getInitialCards()
  .then((res) => {
    cardSection.renderItems(res);
  })
  .catch((err) => {
    console.error(`Error ${err}`);
  });

const cardDeleteModal = new PopupQuestion("#delete-card-modal");

const editFormValidator = new FormValidator(
  constants.config,
  constants.profileEditForm
);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(
  constants.config,
  constants.addCardFormElement
);
addFormValidator.enableValidation();

const profileAvatarFormValidator = new FormValidator(
  constants.config,
  constants.profileAvatarModalForm
);
profileAvatarFormValidator.enableValidation();
const imagePopup = new PopupWithImage("#image-modal");
imagePopup.setEventListeners();

const cardPopup = new PopupWithForm(
  "#add-card-modal",
  // handleAddCardFormSubmit
  (link, button, close) => {
    api
      .addCard(link)
      .then((res) => {
        //  button.textContent = "Saving ...";
        cardPopup.renderLoading(true);
        cardSection.addItem(res);
      })

      .catch((err) => {
        console.error(`Error ${err}`);
      })
      .finally(() => {
        cardPopup.renderLoading(false);
        addFormValidator.toggleButtonState();
        close;
      });
  }
);
cardPopup.setEventListeners();

const profilePopup = new PopupWithForm("#profile-avatar-modal", (url) => {
  // handles the avatar picture submit
  api
    .setUserAvatar(url)
    .then((res) => {
      userInfo.setUserAvatar(res);
    })
    .catch((err) => {
      console.error(`Error ${err}`);
    });
  profileAvatarFormValidator.toggleButtonState();
  profilePopup.close();
});
profilePopup.setEventListeners();

const userInfoPopup = new PopupWithForm("#profile-edit-modal", (values) => {
  userInfo.setUserInfo(values);
  api
    .setUserInfo(values)
    .then(() => {
      userInfoPopup.renderLoading(true);
    })
    .catch((err) => {
      console.error(`Error ${err}`);
    })
    .finally(() => {
      userInfoPopup.renderLoading(false);
      userInfoPopup.close();
      editFormValidator.toggleButtonState();
    });
});
userInfoPopup.setEventListeners();

function renderCard(cardData) {
  const card = new Card(
    cardData,
    constants.cardTemplate,

    //handles the image click
    (name, link) => {
      imagePopup.open(name, link);
    },
    //handles the delete button click
    (id, cardElement) => {
      cardDeleteModal.open();
      cardDeleteModal.setEventListeners();
      cardDeleteModal.setSubmitAction((close) => {
        api.deleteCard(id).then(() => {
          close;
        });
        cardElement.remove();

        // cardElement = null;
      });
    },
    //handles Like Button Click
    (id, card) => {
      api
        .likeCard(id)
        .then((res) => {
          console.log(res);
          card
            .querySelector(".card__like-button")
            .classList.toggle("card__like-button_active");
        })
        .catch((err) => {
          console.error(`Error ${err}`);
        });
    },
    //removes Like Button
    (id, card) => {
      api
        .unlikeCard(id)
        .then((res) => {
          console.log(res);
          card
            .querySelector(".card__like-button")
            .classList.toggle("card__like-button_active");
        })
        .catch((err) => {
          console.error(`Error ${err}`);
        });
    }
  );

  return card.getView();
}

// EVENT LISTENERS

constants.addNewCardButton.addEventListener("click", () => {
  cardPopup.open();
});
constants.profileEditButton.addEventListener("click", () => {
  userInfoPopup.open();

  const { profileName, profileJob } = userInfo.getUserInfo();

  constants.profileNameInput.value = profileName;
  constants.profileJobInput.value = profileJob;
});

constants.profileButton.addEventListener("click", () => {
  profilePopup.open();
});

console.log(document.forms);
