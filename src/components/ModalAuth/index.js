import React, {useState} from 'react';
import Portal from "../Portal";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {connect} from "react-redux";
import {logIn} from "../../redux-store/actions";

const ModalAuth = ({onClose, dispatch}) => {



  const [state, setState] = useState({
    login: '',
    password: ''
  })

  const handleChange = (e) => {
    const {value, name} = e.target;
    setState({
      ...state,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(state));
    onClose();
  }

  return (
    <Portal>
      <div className="modal-auth" onClick={onClose}></div>
      <div className="modal-dialog modal-dialog-auth">
        <button onClick={onClose} className="close-auth">&times;</button>
        <form onSubmit={handleSubmit}>
          <fieldset className="modal-body">
            <legend className="modal-title">Авторизация</legend>
            <label className="label-auth">
              <span>Логин</span>
              <input type="text" name='login' value={state.login} onChange={handleChange}/>
            </label>

            <label className="label-auth">
              <span>Пароль</span>
              <input type="password" name='password' value={state.password} onChange={handleChange}/>
            </label>


          </fieldset>
          <div className="modal-footer">
            <div className="footer-buttons">
              <button className="button button-primary button-login" type="submit">
                Войти
              </button>
            </div>
          </div>
        </form>
      </div>
    </Portal>
  )
}

const  mapStateToProps =(state)=>{
  return{
    userData:state
  }
}

export default connect(mapStateToProps)(ModalAuth);