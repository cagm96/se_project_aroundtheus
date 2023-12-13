export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._autorization = options.headers.authorization;

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
      headers: {
        authorization: this._autorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._autorization,
      },
      body: JSON.stringify(data),
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
      headers: {
        authorization: this._autorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}
