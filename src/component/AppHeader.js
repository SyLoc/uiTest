import React, {useState} from 'react';
import '../css/header.css'
import Logo from '../img/logo-icon-1.png'
import { TiThMenu } from 'react-icons/ti'
import {CgClose} from 'react-icons/cg'

const AppHeader = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <header className="App-header">
      <div className='content-center'>
        <div className='App-header__left'>
          <a href="/abc" className='App-header__left-link'>
            <img className='App-header__logo-img' src={Logo} alt="" />
          </a>
        </div>
        <button onClick={e => setOpenModal(true)} className='App-header__icon'>
          <i><TiThMenu /></i>
        </button>
        <div className='App-header__center'>
          <ul className='App-header__menu-list'>
            <li className='App-header__menu-item App-header__menu-item--active'>
              <a className='App-header__menu-item__link' href="/abc">서비스 소개</a>
            </li>
            <li className='App-header__menu-item'>
              <a className='App-header__menu-item__link' href="/abc">법적효력·보안</a>
            </li>
            <li className='App-header__menu-item'>
              <a className='App-header__menu-item__link' href="/abc">활용 분야</a>
            </li>
            <li className='App-header__menu-item'>
              <a className='App-header__menu-item__link' href="/abc">이용 혜택</a>
            </li>
            <li className='App-header__menu-item'>
              <a className='App-header__menu-item__link' href="/abc">요금 안내</a>
            </li>
            <li className='App-header__menu-item'>
              <a className='App-header__menu-item__link' href="/abc">고객센터</a>
            </li>
          </ul>
        </div>
        <div className='App-header__right'>
          <ul className='App-header__right-list'>
            <li className='App-header__right-list__item'>
              <a className='App-header__right-list__item-link' href="/abc">로그인</a>
            </li>
            <li className='App-header__right-list__item'>
              <a className='App-header__right-list__item-link' href="/abc">회원가입</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`modal ${ openModal && 'modal--show'}`}>
        <div onClick={e => setOpenModal(false)} className="overlay"></div>
        <div className="modal-content">
          <button onClick={e => setOpenModal(false)} className='modal-content__close-btn'><CgClose/></button>
          <ul className='modal-content-list'>
            <li className='modal-content-item modal-content-item--active'>
              <a className='modal-content-item__link' href="/abc">서비스 소개</a>
            </li>
            <li className='modal-content-item'>
              <a className='modal-content-item__link' href="/abc">법적효력·보안</a>
            </li>
            <li className='modal-content-item'>
              <a className='modal-content-item__link' href="/abc">활용 분야</a>
            </li>
            <li className='modal-content-item'>
              <a className='modal-content-item__link' href="/abc">이용 혜택</a>
            </li>
            <li className='modal-content-item'>
              <a className='modal-content-item__link' href="/abc">요금 안내</a>
            </li>
            <li className='modal-content-item'>
              <a className='modal-content-item__link' href="/abc">고객센터</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;