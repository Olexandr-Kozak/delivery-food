const STORE_USER = "store_user";

const initialState = localStorage.getItem('store_user');

const initialStateToObj = JSON.parse(initialState);

const stateInObj = {
  login: initialStateToObj ? initialStateToObj.login : null,
  password: initialStateToObj ? initialStateToObj.password : null,
}

const reducer = (state = stateInObj, action) => {
  switch (action.type) {
    case 'LOG_IN':
      localStorage.setItem(STORE_USER, JSON.stringify(action.payload))
      return state = action.payload;
    case 'LOG_OUT':
      localStorage.removeItem(STORE_USER)
      return state = action.payload;
    default:
      return state;
  }
}

export default reducer;