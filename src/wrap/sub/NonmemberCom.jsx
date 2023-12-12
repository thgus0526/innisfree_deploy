import React from 'react';
import './scss/SignInCom.scss';
import { useNavigate } from 'react-router-dom';

export default function NonmemberCom () {

    const navigate = useNavigate();

    const [state, setState] = React.useState({
        loginGuideText: ''
    });

    // 네비게이트 = 버튼클릭 시 로그인 폼으로 이동
    const onClickIndexBtn=(e)=>{
        e.preventDefault();
        navigate('/');
    }

    // 주문번호 & 주문비밀번호 찾기 버튼 이벤트
    const onClickIdOrderBtn=(e)=>{
        e.preventDefault();
        navigate();
    }
    return (
        <section id='signin' className='nonMember'>
            <div className="container">     
                <div className="content">
                    <div className="title">
                        <h1>비회원 주문조회</h1>
                        <button onClick={onClickIndexBtn} className='index_btn nonMember'>
                            <img src="./images/search/icon_left_arrow.png" alt="" />
                        </button>
                    </div>
                    <form autoComplete='off'>
                        <ul className="form_box">
                            <li className="login_box">
                                <input 
                                    type="text" 
                                    name='orderNumber' 
                                    id='orderNumber' 
                                    placeholder='주문번호'
                                    // value={state.loginId}
                                    // onChange={onChangeId}
                                />
                                <button className='del_btn' type='button'><img src="./images/signIn/icon_smallClose.png" alt="" /></button>
                            </li>
                            <li className="login_box">
                                <input 
                                    type="text" 
                                    name='orderNumber' 
                                    id='orderPw' 
                                    placeholder='주문비밀번호'
                                />
                                <button className='del_btn' type='button'><img src="./images/signIn/icon_smallClose.png" alt="" /></button>
                                <p className={`hide_text${state.loginGuideText!=='' ? ' on' : ''}`}>주문번호를 올바르게 입력해 주세요.</p>
                            </li>
                            <li className="login_btn">
                                <button className='non_member'>비회원 주문조회</button>
                            </li>
                        </ul>
                    </form>
                    <ul className="search_box non_member">
                        <li><a href="/idSearch" onClick={onClickIdOrderBtn}>주문번호 찾기</a></li>
                        <li><i></i><a  href="/pwSearch" onClick={onClickIdOrderBtn}>주문비밀번호 찾기</a></li>
                    </ul>
                    <button className="signUp_btn">
                        <a href="!#">
                            <span>아직 회원이 아니세요?</span>
                            <strong>회원가입</strong>
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
};
