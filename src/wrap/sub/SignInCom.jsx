import React from 'react';
import './scss/SignInCom.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { moreViewModal } from '../../reducer/moreViewModal';
import { messageModal } from '../../reducer/messageModal';
import axios from 'axios';
import { signIn } from '../../reducer/signIn';


export default function SignInCom () {    

    const navigate = useNavigate();
    const dispatch =  useDispatch();
    const selector = useSelector((state)=>state);

    // 메세지모달 메소드
    const messageModalMethod=(msg)=>{
        const obj = {
            isMessageModal: true,
            isMsg: msg
        }
        dispatch(messageModal(obj));
    }

    const [state, setState] = React.useState({
        isKeyboardBtn: false,
        onClickIdSave: true,
        loginGuideText: '',
        onClickMoreViewModalOpen: false,
        onClickMoreViewModalClose: false,
        id_del_btn: false,
        pw_del_btn: false,

        id: '',
        pw: '',
        submitBtn: true,
        signInData: {}   // 로그인 정보유지를 위한 상태변수
        
    });


    // 더보기 모달 이벤트
    const onClickAuthenBtn=(e)=>{
        e.preventDefault();
        dispatch(moreViewModal(true));
    }

    // 키보드 열기 버튼 클릭 이벤트
    const onClickKeyboardBtn=(e)=>{
        e.preventDefault();
        if( state.isKeyboardBtn===true ){
            setState({
                ...state,
                isKeyboardBtn: false
            });
        }
        else {
            setState({
                ...state,
                isKeyboardBtn: true
            });
        }
    }
    
    const onClickIdSave=(e)=>{
        e.preventDefault();
        if( state.onClickIdSave===true ){
            setState({
                ...state,
                onClickIdSave: true
            })
        }
        else {
            setState({
                ...state,
                onClickIdSave: false
            })
        }
    }

    // 네비게이트 = 로그인
    const onClickLoginBtn=(e)=>{
        e.preventDefault();
        navigate('/index');
    }
    // 네비게이트 = 아이디 찾기
    const onClickIdSearchBtn=(e)=>{
        e.preventDefault();
        navigate('/idSearch');
    }
    // 네비게이트 = 비밀번호 찾기
    const onClickPwSearchBtn=(e)=>{
        e.preventDefault();
        navigate('/pwSearch');
    }
    // 네비게이트 = 비회원 주문/조회
    const onClickNonMemberSearchBtn=(e)=>{
        e.preventDefault();
        navigate('/nonMember');
    }
    // 네비게이트 = 휴대폰 로그인
    const onClickHpLogin=(e)=>{
        e.preventDefault();
        navigate('/hplogin');
    }
    // 네비게이트 = 카카오 로그인
    const onClickKakaoLogin=(e)=>{
        e.preventDefault();
        navigate('/kakaologin');
    }
    // 네비게이트 = 네이버 로그인
    const onClickNaver=(e)=>{
        e.preventDefault();
        navigate('/naver');
    }
    // 회원가입
    const onClickSignUpBtn=(e)=>{
        e.preventDefault();
        navigate('/signUp');
    }

    // 아이디 입력 받기
    const onChangeId=(e)=>{
        setState({
            ...state,
            id: e.target.value
        })
    }
    // 비밀번호 입력 받기
    const onChangePw=(e)=>{
        setState({
            ...state,
            pw: e.target.value
        })
    }

    // 로그인 버튼 활성화하기
    React.useEffect(()=>{
        if( state.id!=='' && state.pw!=='' ){
            setState({
                ...state,
                submitBtn: false
            })
        }
        else {
            setState({
                ...state,
                submitBtn: true
            })
        }
    },[ state.id, state.pw])

    // 로그인 폼 전송하기
    const onSubmitSignIn=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('userId', state.id);
        formData.append('userPw', state.pw);

        axios({
            url: 'http://sieun.co.kr/innisfree/innisfree_signIn.php',
            method: 'POST',
            data: formData
        })
        .then(( res )=>{
            // console.log(res.data);
            // console.log(res.data.아이디);
            // console.log(res.data);
            // console.log(res);
            if( res.status===200 ){
                if( res.data!=='' ){
                    let toDay = new Date();
                    toDay.setDate( toDay.getDate() +3 );

                    const signInData = {
                        name: res.data.이름,
                        hp: res.data.휴대폰,
                        birth: res.data.생년월일,
                        id : res.data.아이디,
                        pw: res.data.비밀번호,
                        address: res.data.주소,
                        email: res.data.이메일,
                        expires: toDay.getTime()
                    }
                    localStorage.setItem('INNISFREE_SIGNIN_DATA', JSON.stringify(signInData));

                    dispatch(signIn(signInData));

                    dispatch(signIn(res.data.address));
                    navigate('/index');
                }
                else {
                    messageModalMethod('아이디와 비밀번호를 다시 확인해주세요.');
                }
            }
        })
        .catch(( err )=>{
            console.log( err );
        })
    }

    const onClickSignIn=(e)=>{
        e.preventDefault();
        navigate('/index');
    }

    return (
        <section id='signin'>
            <div className="container">
                <div className="header_box">
                    <h2 onClick={onClickLoginBtn}>로그인</h2>
                    <button onClick={onClickSignIn}>
                        <img src="./images/sub/signIn/icon_bigClose.png" alt="" />
                    </button>
                </div> 
                <div className="content">
                    <div className="title">
                        <h1>아모레퍼시픽 뷰티포인트 통합회원 <br />아이디로 로그인해주세요.</h1>
                    </div>
                    <div className="keyboard_box">
                        <a href="!#" onClick={onClickKeyboardBtn} className={`keyboard_btn ${state.isKeyboardBtn ? ' on' :'' }`} >PC키보드열기<img src="./images/ico_top.png" alt="" /></a>
                        <div className="img_box">
                            <img src="./images/sub/signIn/icon_keyboard.png" alt="" />
                        </div>
                    </div>
                    <form autoComplete='off' onSubmit={onSubmitSignIn}>
                        <ul className="form_box">
                            <li className="login_box">
                                <label htmlFor="userId">아이디</label>
                                <input 
                                    type="text" 
                                    name='userId' 
                                    id='userId' 
                                    placeholder='아이디 입력'
                                    value={state.id}
                                    onChange={onChangeId}
                                />
                            </li>
                            <li className="login_box">
                                <label htmlFor="userPw">비밀번호</label>
                                <input 
                                    type="password" 
                                    name='userPw' 
                                    id='userPw' 
                                    placeholder='비밀번호 입력 (영문, 숫자, 특수문자 조합)'
                                    value={state.pw}
                                    onChange={onChangePw}
                                />
                            </li>
                            <li className="idSave_box">
                                <a href="!#" onClick={onClickIdSave}>
                                    {
                                        state.onClickIdSave && (
                                            <>
                                                <img src="./images/sub/signIn/icon_check_ok.png" alt="" /><span>아이디저장</span>
                                            </>
                                        )
                                    }
                                    {
                                        !state.onClickIdSave && (
                                        <>
                                            <img src="./images/sub/signIn/icon_check_none.png" alt="" /><span>아이디저장</span>
                                        </>
                                        )
                                    }
                                </a>
                            </li>
                            <li className="login_btn">
                                <button 
                                    type='submit'
                                    disabled={state.submitBtn}
                                    className={state.submitBtn===true ? '' : 'on'}
                                ><span>로그인</span></button>
                            </li>
                        </ul>
                    </form>
                    <ul className="authen_box">
                        <li onClick={onClickHpLogin}>
                            <img src="./images/sub/signIn/icon_mobile.png" alt="" />
                            <span>휴대폰<br />로그인</span>
                        </li>
                        <li onClick={onClickKakaoLogin}>
                            <img src="./images/sub/signIn/icon_kakao.png" alt="" />
                            <span>카카오<br />로그인</span>
                        </li>
                        <li onClick={onClickNaver}>
                            <img src="./images/sub/signIn/icon_naver.png" alt="" />
                            <span>네이버<br />로그인</span>
                        </li>
                        <li>
                            <button onClick={onClickAuthenBtn} className='moreView_box'>
                                <img src="./images/sub/signIn/icon_moreView.png" alt="" />
                            </button>
                                <span>더보기</span>
                        </li>
                    </ul>
                    <ul className="search_box">
                        <li><a href="/idSearch" onClick={onClickIdSearchBtn}>아이디 찾기</a></li>
                        <li><i></i><a  href="/pwSearch" onClick={onClickPwSearchBtn}>비밀번호 찾기</a><i></i></li>
                        <li><a  href="/nonMember" onClick={onClickNonMemberSearchBtn}> 비회원 주문/조회</a></li>
                    </ul>
                    <button onClick={onClickSignUpBtn} className="signUp_btn">
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
