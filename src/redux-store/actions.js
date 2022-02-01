export const logIn = (loginData) => {
  return {
    type: "LOG_IN",
    payload: loginData
  }
}

export const logOut = () => {

  const logOutData = {
    login: null,
    password: null,
  }


  return {
    type: "LOG_OUT",
    payload: logOutData
  }
}

