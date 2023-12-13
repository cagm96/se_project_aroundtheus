export default class Api {
  constructor(options, returnData) {
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
  test() {
    console.log(this._url + `${"/users/me"}`);
  }
  getUserInfo() {
    return fetch(this._url + `${"/users/me"}`, {
      headers: {
        authorization: this._autorization,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((res) => {
        // console.log(res.name);
        return res.name;
      })
      .catch((err) => {
        console.error(err); // log the error to the console
      });
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards ", {
      headers: {
        authorization: "f1dab6ed-e5ba-44ef-bef1-7369d7e9bf0d",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err); // log the error to the console
      });
  }
}
