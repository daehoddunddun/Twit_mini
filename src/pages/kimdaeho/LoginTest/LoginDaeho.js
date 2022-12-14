import React, { useState } from 'react';
import LoginInfo from './LoginInfo';
import './LoginDaeho.scss';
import LoginModal from './LoginModal';
import JoinModal from './JoinModal';

function LoginDaeho() {
  const [loginModal, setLoginModal] = useState(false);
  const [joinModal, setJoinModal] = useState(false);

  const JoinModalClose = () => {
    setJoinModal(false);
  };

  const JoinModalOnen = () => {
    setJoinModal(true);
  };

  const ModalOpen = () => {
    setLoginModal(!loginModal);
  };

  return (
    <div>
      <div className="LoginBody">
        <div className="LoginVisual">
          <img
            className="LoginMainImg"
            src="./images/LoginMain.png"
            alt="Login-Main-Img"
            onClick={JoinModalClose}
          />
        </div>
        <div className="LoginText">
          <img className="Logo" src="./images/logo.png" alt="파랑새 이미지" />
          <h1>지금 일어나고 있는 일.</h1>
          <h2>오늘 트위터에 가입하세요.</h2>
          {joinModal && <JoinModal JoinModalClose={JoinModalClose} />}
          <LoginInfo LoginModalOpen={ModalOpen} JoinModalOnen={JoinModalOnen} />
          {loginModal && <LoginModal />}
        </div>
      </div>
    </div>
  );
}

export default LoginDaeho;
