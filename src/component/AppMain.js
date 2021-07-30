import React from 'react';
import '../css/main.css'
import upload_1 from '../img/upload-icon-1.png'
import upload_2 from '../img/upload-icon-2.png'
import upload_3 from '../img/upload-icon-3.png'
import upload_4 from '../img/upload-icon-4.png'
import arrowIcon from '../img/arrow-icon-1.png'
import main_img_1 from '../img/main-img-1.jpg'
import main_img_2 from '../img/main-img-2.jpg'
import main_img_3 from '../img/main-img-3.jpg'
import main_img_4 from '../img/main-img-4.jpg'
import main_img_5 from '../img/main-img-5.jpg'

import { FaHandshake } from 'react-icons/fa'
import { BsBook,BsPersonFill } from 'react-icons/bs'
import { RiFilePaperLine,RiBookOpenLine } from 'react-icons/ri'
import { AiOutlinePicture } from 'react-icons/ai'

const AppMain = () => {
  return (
    <main className="App-main">
      <div className="main-center">
        <div className='App-main__first'>
          <div className='App-main__first-title'>
            <h3 className='App-main__first-title__h3'>
              간단하게 끝내는 계약과정
            </h3>
            <p className='App-main__first-title__p'>
              계약서 파일을 업로드하여 서명을 요청해 보세요.<br />
              상대방은 회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수 있습니다.<br />
              언제 어디서든 5분만에 계약을 체결해 보세요.
            </p>
          </div>
          <div className='App-main__first-description'>
            <div className='App-main__first-description__item'>
              <div className='App-main__first-description__item-icon'>
                <img src={upload_1} alt="upload1" />
              </div>
              <div className='App-main__first-description__item-content'>
                {/* <h3 className='App-main__first-description__item-content-h3'>업로드하기</h3> */}
                <p className='App-main__first-description__item-content-p main__first__fix--item-1'>필요한 계약서 파일을업로드합니다.</p>
              </div>
            </div>
            <div className='App-main__first-description__item'>
              <div className='App-main__first-description__item-icon'>
                <img src={upload_2} alt="upload2" />
              </div>
              <div className='App-main__first-description__item-content'>
                <h3 className='App-main__first-description__item-content-h3'>서명 요청하기</h3>
                <p className='App-main__first-description__item-content-p'>업로드한 계약서 파일에
                  서명 요청을 하세요.</p>
              </div>
            </div>
            <div className='App-main__first-description__item'>
              <div className='App-main__first-description__item-icon'>
                <img src={upload_3} alt="upload3" />
              </div>
              <div className='App-main__first-description__item-content'>
                <h3 className='App-main__first-description__item-content-h3'>서명 입력하기</h3>
                <p className='App-main__first-description__item-content-p'>상대방이 간단한 절차를 통해
                  서명할 수 있습니다.</p>
              </div>
            </div>
            <div className='App-main__first-description__item'>
              <div className='App-main__first-description__item-icon'>
                <img src={upload_4} alt="upload4" />
              </div>
              <div className='App-main__first-description__item-content main__first__fix--item-4'>
                <h3 className='App-main__first-description__item-content-h3'>계약 완료</h3>
                <p className='App-main__first-description__item-content-p'>언제 어디서든
                  5분 만에 계약 완료!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='App-main__second'>
        <div className="main-center">
          <p className='App-main__second_p'>지금 바로 시작하세요!</p>
          <h2 className='App-main__second_h2'>설명이 필요 없는 간단한 계약 과정,<br />
            직접 경험해보세요!</h2>
          <button className='App-main__second-btn'>
            <span>더 살펴보기</span>
            <img className='App-main__second__btn-img' src={arrowIcon} alt="" />
          </button>
        </div>
      </div>
      <div className='App-main__third'>
        <div className='main__third-center'>
          <div className='main__third-wrap-img'>
            <img src={main_img_1} className='main__third-img' alt="" />
          </div>
          <div className='main__third-content'>
            <div className='main__third-content-wrap'>
              <p className='main__third-content__order'>First</p>
              <h3 className='main__third-content__title'>한 눈에 확인하는<br />계약 상태</h3>
              <p className='main__third-content__descriptions'>
                계약이 진행되는 모든 과정을 실시간으로 추적해보세요.
                진행 상태에 따라 내 서명 필요, 서명 대기중, 서명 완료,
                취소, 거절 등이 조회됩니다. 상태 필터 기능을 통해 상태별로
                문서를 나열하고 관리할 수도 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='App-main__third main__fourth--fix'>
        <div className='main__third-center main__fourth--fix'>
          <div className='main__third-content main__fourth--fix'>
            <div className='main__third-content-wrap main__fourth--fix'>
              <p className='main__third-content__order'>second</p>
              <h3 className='main__third-content__title'>사용하던 서명<br />그대로</h3>
              <p className='main__third-content__descriptions'>
                사용하던 사인과 도장을 PC와 모바일에서도 사용할 수 있습니다.
                사인을 직접 그리거나, 다양한 서체의 디지털 도장을 만들 수 있습니다.
                실제 도장을 카메라로 찍어서 업로드 하면 깔끔하게 보정되며,
                가드 시그니처에서 만든 사인과 도장을 계약서에 바로 사용할 수 있습니다
              </p>
            </div>
          </div>
          <div className='main__third-wrap-img main__fourth--fix'>
            <img src={main_img_2} className='main__third-img main__fourth--fix' alt="" />
          </div>
        </div>
      </div>
      <div className='App-main__third'>
        <div className='main__third-center'>
          <div className='main__third-wrap-img'>
            <img src={main_img_3} className='main__third-img' alt="" />
          </div>
          <div className='main__third-content'>
            <div className='main__third-content-wrap'>
              <p className='main__third-content__order'>third</p>
              <h3 className='main__third-content__title'>간편한<br />본인인증</h3>
              <p className='main__third-content__descriptions'>
                공인인증서와 OTP, Active X 등을 요구하지 않습니다.
                간단하고 빠른 휴대폰 인증과 접근 암호 설정으로 본인인증을
                요청할 수 있습니다. 본인인증 요청은 법적효력과 상관없이
                선택적으로 이용 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='App-main__third main__fourth--fix'>
        <div className='main__third-center main__fourth--fix'>
          <div className='main__third-content main__fourth--fix'>
            <div className='main__third-content-wrap main__fourth--fix'>
              <p className='main__third-content__order'>fourth</p>
              <h3 className='main__third-content__title'>텍스트 및<br />체크박스 입력</h3>
              <p className='main__third-content__descriptions'>
                문서에 텍스트 박스와 체크박스를 입력해 보세요.
                입력 위치, 크기, 글자체를 자유롭게 지정하고
                필수입력 여부를 설정할 수 있습니다.
                상대방에게 텍스트 입력을 요청할 수도 있습니다.
              </p>
            </div>
          </div>
          <div className='main__third-wrap-img main__fourth--fix'>
            <img src={main_img_4} className='main__third-img main__fourth--fix' alt="" />
          </div>
        </div>
      </div>
      <div className='App-main__fifth'>
        <div className='main__fifth-center'>
          <h1 className='main__fifth-center__title'>Easy and<br />quick</h1>
          <p className='main__fifth-center__description'>
            가드 시그니처에서는 복잡한 절차를 거치지 않고 수월하게 계약을 진행할 수 있습니다. 준비해둔 계약 문서를 곧바로 업로드하고,
            서명을 요청하세요. 상대방도 별도의 회원가입이나 복잡한 인증 과정없이 서명이 가능합니다.
            계약이 진행되는 모든 과정을 효과적으로 체크할 수 있고, 언제 어디서든 5분이면 계약이 완료됩니다.<br /><br />
            <br />
            가드 시그니처와 함께 빠르고 신속하게 상대방과의 계약을 체결하고 관리하세요.
          </p>
        </div>
      </div>
      <div className='App-main__sixth'>
        <div className='App-main__sixth-center'>
          <div className='App-main__sixth-center__header'>
            <h3>가드 시그니처를 선택하는 이유</h3>
            <p>많은 기업들이 가드 시그니처를 선택하는 이유,<br />
              아래 버튼을 눌러 상세한 정보를 알아보세요.</p>
          </div>
          <div className='App-main__sixth-center__body'>
            <div className='App-main__sixth-center__body-group body-group--text-left'>
              {/* width:25% */}
              <div className='App-main__sixth-center__body-item'>
                <i className='App-main__sixth-center__body-item__icon'><BsBook /></i>
                <h3 className='App-main__sixth-center__body-item__title'>쉽고 편리하게</h3>
                <p className='App-main__sixth-center__body-item__discription'>
                  번거로운 절차 없이 누구나 <br />
                  빠르게 계약을 체결할 수 있습니다.
                </p>
              </div>
              <div className='App-main__sixth-center__body-item'>
                <i className='App-main__sixth-center__body-item__icon'><FaHandshake /></i>
                <h3 className='App-main__sixth-center__body-item__title'>안전한 보안</h3>
                <p className='App-main__sixth-center__body-item__discription'>
                  데이터는 암호화되어 전송되고<br />
                  안전한 곳에 저장됩니다.
                </p>
              </div>
              <div className='App-main__sixth-center__body-item'>
                <i className='App-main__sixth-center__body-item__icon'><RiFilePaperLine /></i>
                <h3 className='App-main__sixth-center__body-item__title'>다양한 파일형식</h3>
                <p className='App-main__sixth-center__body-item__discription'>
                  한글, 오피스부터 PDF, JPG와<br />
                  같은 이미지 파일도 변환없이 지원
                </p>
              </div>
            </div>
            <div className='App-main__sixth-center__body-group__center'>
              {/* width:50% */}
              <img src={main_img_5} className='App-main__sixth-center__body-group__center-img' alt="" />
            </div>
            <div className='App-main__sixth-center__body-group body-group--text-Right'>
              {/* width:25% */}
              <div className='App-main__sixth-center__body-item'>
                <i className='App-main__sixth-center__body-item__icon'><BsPersonFill /></i>
                <h3 className='App-main__sixth-center__body-item__title'>간단한 본인인증</h3>
                <p className='App-main__sixth-center__body-item__discription'>
                  공인인증서와 ActiveX없이도<br />
                  본인인증을 할 수 있습니다.
                </p>
              </div>
              <div className='App-main__sixth-center__body-item'>
                <i className='App-main__sixth-center__body-item__icon'><AiOutlinePicture /></i>
                <h3 className='App-main__sixth-center__body-item__title'>효율적인 작업</h3>
                <p className='App-main__sixth-center__body-item__discription'>
                  자주 사용하는 문서들을 저장하고<br />
                  불러와 작업할 수 있습니다.
                </p>
              </div>
              <div className='App-main__sixth-center__body-item'>
                <i className='App-main__sixth-center__body-item__icon'><RiBookOpenLine /></i>
                <h3 className='App-main__sixth-center__body-item__title'>계약서 관리</h3>
                <p className='App-main__sixth-center__body-item__discription'>
                  관리가 필요한 문서를 한 눈에 보고<br />
                  체계적으로 관리할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
          <div className='App-main__sixth-center__footer'>
            <button className='main__sixth-center__footer-btn'>
              <span>가이드 다운로드</span>
              <img className='main__sixth-center__footer-btn-img' src={arrowIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};


export default AppMain;