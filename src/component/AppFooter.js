import React from 'react';
import '../css/footer.css'

import { FaBlogger, FaFacebook } from 'react-icons/fa'
import { TiSocialSkype } from 'react-icons/ti'
import {AiOutlineArrowUp} from 'react-icons/ai'

const AppFooter = () => {
  return (
    <footer className="App-footer">
      <div className='App-footer-center'>
        <div className='App-footer-center__item'>
          <div className='App-footer-center__item-title'>
            <h3 className='App-footer-center__item-title__item'>이용약관</h3>
            <h3 className='App-footer-center__item-title__item'>개인정보처리방침</h3>          
            <h3 className='App-footer-center__item-title__item'>고객센터</h3>
          </div>
          <div className='App-footer-center__item-info'>
            (주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000<br/>
            이메일 : test0101@guardsignature.co.kr｜ FAX : 070-0000-0000<br/>
            서울특별시 강남구 도산대로 8길 17 3층 <br/>
            <br/>
            Copyright© GUARDSIGNATURE All rights reserved.
          </div>
        </div>
        <div className='App-footer-center__item footer-center--text-right'>
          <div className='App-footer-center__item-title'>
            <a href="/blog.com"><FaBlogger/></a>
            <a href="/facebook.com"><FaFacebook/></a>
            <a href="/skype.com"><TiSocialSkype/></a>
          </div>
        </div>  
        <a href='/#' className='btn-gotop'><i><AiOutlineArrowUp/></i></a>
      </div>
    </footer>
  );
};


export default AppFooter;