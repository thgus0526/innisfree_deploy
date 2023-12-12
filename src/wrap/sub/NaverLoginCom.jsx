import React from 'react';
import './scss/naverLogin.scss';

export default function NaverLoginCom () {
    return (
        <div id='naver_login'>
            <div className="container">
                <div className="title">
                    <img src="./images/Naver-logo.png" alt="" />
                </div>
                <div className="content">
                    <div className="header">
                        <ul>
                            <li>
                                <a href="!#">ID 로그인</a>
                            </li>
                            <li>
                                <a href="!#">일회용 번호</a>
                            </li>
                            <li>
                                <a href="!#">QR코드</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text_box">
                        <span>네이버에 로그인하여 아모레퍼시픽 서비스를 이용하실 수 있습니다.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
