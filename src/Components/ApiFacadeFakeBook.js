const URL = "http://localhost:8080/jpareststarter";

function handleHttpErrors(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
  }

function ApiFacadeFakeBook() {

    const getUserInfo = (token) => {
        const option = makeOptions("GET", undefined, token);
        return fetch(`${URL}/api/userinfo`, option).then(handleHttpErrors);
    }

    const getAllUserInfo = (token) => {
      const option = makeOptions("GET", undefined, token);
      return fetch(`${URL}/api/userinfo/all`, option).then(handleHttpErrors);
  }

    const addUserInfo = (body, token) => {
        const option = makeOptions("POST", body, token);
        return fetch(`${URL}/api/userinfo`, option).then(handleHttpErrors);
    }

    const editUserInfo = (body, token) => {
        const option = makeOptions("PUT", body, token);
        return fetch(`${URL}/api/userinfo`, option).then(handleHttpErrors);
    }

    const getPosts = (token) => {
      const option = makeOptions("GET", undefined, token);
      return fetch(`${URL}/api/post`, option).then(handleHttpErrors);
    }

    const addPost = (body, token) => {
      const option = makeOptions("POST", body, token);
      return fetch(`${URL}/api/post`, option).then(handleHttpErrors);
    }

    const makeOptions = (method, body, token) => {
        var opts = {
          method: method,
          headers: {
            "Content-type": "application/json",
            'Accept': 'application/json',
            "Authorization" : token
          }
        }
        if (body) {
          opts.body = JSON.stringify(body);
        }
        return opts;
      }

    return {
        getUserInfo,
        getAllUserInfo,
        addUserInfo,
        editUserInfo,
        getPosts,
        addPost
    }
}

const facade = ApiFacadeFakeBook()
export default facade
