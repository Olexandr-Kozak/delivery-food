import React from 'react';

const Footer = () => {

  const logo = require('./../../assets/img/icon/logo.svg').default;

  return(
    <footer className='footer'>
      <div className="container">
        <div className="footer-block">
          <img src={logo} alt="logo"/>
          <nav className="footer-nav">
            <a href="/" className='footer-link'>Ресторам</a>
            <a href="/" className='footer-link'>Курьерам</a>
            <a href="/" className='footer-link'>Прес-центры</a>
            <a href="/" className='footer-link'>Контакты</a>
          </nav>
          
          <div className="social-link">
            <a href="/" target="_blank" className="social-link">
              <img src={require('../../assets/img/social/instagram.svg').default} alt="instagram"/>
            </a>
            <a href="/" target="_blank" className="social-link">
              <img src={require('../../assets/img/social/fb.svg').default} alt="fb"/>
            </a>
            <a href="/" target="_blank" className="social-link">
              <img src={require('../../assets/img/social/vk.svg').default} alt="vk"/>
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer;