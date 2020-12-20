import axios from "axios";

export function login(email, password) {
  return dispatch => {
    dispatch(request({ email }));
    axios
      .post("someurl", {
        email,
        password
      })
      .then(response => {
        const user = response.data;
        dispatch(success(user));
      })
      .catch(error => {
        dispatch(failure(error.response.data.message));
      });
  };
}

function request() {
  return { type: "LOGIN_REQUEST" };
}
function success(user) {
  return { type: "LOGIN_SUCCESS", user };
}
function failure(error) {
  return { type: "LOGIN_FAILURE", error };
}
