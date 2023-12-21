export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;

    // other methods for working with the API
    // const api = new Api({
    //   baseUrl: "https://around-api.en.tripleten-services.com/v1",
    //   headers: {
    //     authorization: "52e4667b-b585-4efb-a0e4-c431401ee07a",
    //     "Content-Type": "application/json",
    //   },
    // });
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  setUserInfo(values) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(values),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((error) => {
        return Promise.reject(`Error: ${error}`);
      });
  }

  setUserAvatar(value) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(value),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((error) => {
        return Promise.reject(`Error: ${error}`);
      });
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Error: ${res.status}`);
      })

      .catch((error) => {
        return Promise.reject(`Error: ${error}`);
      });
  }

  addCard(input) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(input),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((error) => {
        return Promise.reject(`Error: ${error}`);
      });
  }

  // const api = new Api({
  //   baseUrl: "https://around-api.en.tripleten-services.com/v1",
  //   headers: {
  //     authorization: "52e4667b-b585-4efb-a0e4-c431401ee07a",
  //     "Content-Type": "application/json",
  //   },
  // });
  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
      // body: JSON.stringify(cardId),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((error) => {
        return Promise.reject(`Error: ${error}`);
      });
  }

  likeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((error) => {
        return Promise.reject(`Error: ${error}`);
      });
  }

  unlikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((error) => {
        return Promise.reject(`Error: ${error}`);
      });
  }
}
