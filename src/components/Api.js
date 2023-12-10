class Api {
  constructor(options) {
   this._options = options;
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1",, {
      headers: {
        authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(res => {
        console.log(res);
      })
  }
   
  // other methods for working with the API


// const api = new Api({
//   baseUrl: "https://around-api.en.tripleten-services.com/v1",
//   headers: {
//     authorization: "52e4667b-b585-4efb-a0e4-c431401ee07a",
//     "Content-Type": "application/json",
//   },
// });
} 