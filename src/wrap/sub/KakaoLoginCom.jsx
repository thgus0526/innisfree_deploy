import React from 'react';
import './scss/search.scss';
import { useNavigate } from 'react-router-dom';

export default function KakaoLoginCom () {

    const navigate = useNavigate();

    const [state, setState] = React.useState({
        searchName: '',
        searchHp: ''

    });

    // 네비게이트 = 버튼클릭 시 로그인 폼으로 이동
    const onClickIndexBtn=(e)=>{
        e.preventDefault();
        navigate('/');
    }

    return (
        <div id='search'>
            <div className="container">
                <div className="gap">
                    <div className="header_box">
                        <button onClick={onClickIndexBtn}>
                            <img src="./images/search/icon_left_arrow.png" alt="" />
                        </button>
                        <h2>카카오 계정 연동</h2>
                    </div>
                </div>                    
                <div className="content">
                    <div className="title kakao_login">
                        <h1>카카오 계정 연동 안내</h1>
                        <h2>카카오 계정으로 간편하게 회원가입 하거나, <br />사용 중이던 뷰티포인트 통합회원 계정과 연동하여 <br />로그인 할 수 있습니다.</h2>
                    </div>
                    <form autoComplete='off'>
                        <ul className="form_box">
                            <div className="gap"></div>
                            <a href='!#' className="authen_btn kakao_btn">
                                <img src="./images/icon_kakao.png" alt="" />
                                <button>카카오 계정 확인</button>
                            </a>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
};
