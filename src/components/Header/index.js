import React, {useState} from 'react';
import {Link} from "react-router-dom";
import ModalAuth from "../ModalAuth";
import ModalCart from "../ModalCart";
import {connect} from "react-redux";
import {logOut} from "../../redux-store/actions";

const Header = ({userData, dispatch}) => {

  const logo = require('./../../assets/img/icon/logo.svg').default;

  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isBasketModal, setIsBasketModal] = useState(false);

  const {login} = userData;

  const handleLoginModal =()=>{
    setIsLoginModal(!isLoginModal);
  }

  const handleBasketModal =()=>{
    setIsBasketModal(!isBasketModal);
  }

  const handleLogOut= () => {
    dispatch(logOut());
  }

  return (
    <div className="container">
      <header className='header'>

        <Link to="/" className="logo">
          <img src={logo} alt="logo"/>
        </Link>

        <label className='address'>
          <input type="text" className='input input-address' placeholder='Адрес доставки'/>
        </label>

        <div className="buttons">
          {login && <span className='user-name'>{login}</span>}


          {!login && <button className='button button-primary button-auth' onClick={handleLoginModal}>
            <span className='button-auth-svg'></span>
            <span className='button-text'>Войти</span>
          </button>          }

          {login && <>
            <button className='button button-primary button-auth' onClick={handleBasketModal}>
              <span className='button-cart-svg'></span>
              <span className='button-text'>Корзина</span>
            </button>

            <button className='button button-primary button-auth' onClick={handleLogOut}>
              <span className='button-out-svg'></span>
              <span className='button-text'>Выйти</span>
            </button>
          </>}
        </div>
      </header>
      {isLoginModal && <ModalAuth onClose={handleLoginModal} />}
      {isBasketModal && <ModalCart onClose={handleBasketModal} login={login} />}
    </div>


  )
}

const mapStateToProps = (state) =>{
  return {
    userData: state
  }
}

export default connect(mapStateToProps)(Header);
