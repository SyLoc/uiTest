import React from 'react';
import '../css/banner.css'
import banner from '../img/banner-img-2.png'
import buttonArrow from '../img/arrow-button.png'

const Banner = () => {
  return (
    <div className='banner__wrap'>
      <div className='banner__main'>
        <img src={banner} className='banner__main__img' alt="" />
      </div>
      <div className='banner__content'>
        <h2 className='banner__content-title'>모든 계약을 쉽고<br/>
          간단하게, 빠르게 처리하세요.</h2>
        <p className='banner__content-description'>가드 시그니처를 이용하면 어떤 계약이든<br/>
          복잡한 과정없이 간편하고 손쉽게 처리할 수 있고,<br/>
          문서 처리 및 관리까지 편리하게 이용할 수 있습니다.</p>
        <div className='banner__content-button'>
          <p className='banner__content-button-title'>지금 확인하기</p>
          <button className='banner__content-btn'>
            <img className='banner__content-btn-img' src={buttonArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;