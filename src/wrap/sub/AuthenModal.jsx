import React from 'react';
import './scss/authenModal.scss';
import { useDispatch } from 'react-redux';

export default function AuthenModal () {

    const dispatch = useDispatch();

    // 인증 모달창 닫기 이벤트
    const onClickCloseBtn=(e)=>{
        e.preventDefault();
        dispatch ({
            type: 'setIsAuthenModal',
            value: false
        })
    }

    return (
        <div id='authenModal'>
            <div className="container">
                <ul className="content">
                    <div className="title">
                        <h1>간편 로그인</h1>
                    </div>
                    <li>
                        <a href="!#">
                            <img src="./images/signIn/icon_mobile.png" alt="" />
                            <h2>휴대폰 로그인</h2>
                        </a>
                    </li>
                    <li>
                        <a href="!#">
                            <img src="./images/signIn/icon_kakao.png" alt="" />
                            <h2>카카오 로그인</h2>
                        </a>
                    </li>
                    <li>
                        <a href="!#">
                            <img src="./images/signIn/icon_naver.png" alt="" />
                            <h2>네이버 로그인</h2>
                        </a>
                    </li>
                    <li>
                        <a href="!#">
                            <img src="./images/signIn/icon_facebook.png" alt="" />
                            <h2>페이스북 로그인</h2>
                        </a>
                    </li>
                    <li>
                        <a href="!#">
                            <img src="./images/signIn/icon_apple.png" alt="" />
                            <h2>애플 로그인</h2>
                        </a>
                    </li>
                    <div  onClick={onClickCloseBtn} className='close_btn'>
                        <button>닫기</button>
                    </div>
                </ul>
            </div>
        </div>
    );
};
