export class Api {
    constructor({ baseUrl, headers }) {
      this.baseUrl = baseUrl;
      this.headers = headers;
    }
    getInitialCards() {
      return fetch(`${this.baseUrl}/cards`, {
        method: 'GET',
        headers: this.headers
      })
        .then(res => {
          if (res.ok) {
            
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
    getUserInfoFromServer() {
        return fetch(`${this.baseUrl}/users/me`, {
          method: 'GET',
          headers: this.headers
        })
          .then(res => {
            if (res.ok) {
    
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    }
    updateUserInfoApi(name, about) {
        return fetch(`${this.baseUrl}/users/me`, {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify({
            name: name,
            about: about,
            
          }),
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
          })
    }
}