import React from 'react';
import './scss/SignInCom.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { moreViewModal } from '../../reducer/moreViewModal';
import { confirmModal } from '../../reducer/confirmModal';
import { messageModal } from '../../reducer/messageModal';
import { signIn } from '../../reducer/signIn';
import axios from 'axios';

export default function HpLoginCom () {

    const navigate = useNavigate();
    const dispatch = useDispatch();

     // 컨펌모달 메소드
     const confirmModalMethod=(msg)=>{
        const obj = {
            isConfirmModal: true,
            confirmMsg: msg,
            isSignInOk: false
        }
        dispatch(confirmModal(obj));
    }
    // 메세지모달 메소드
    const messageModalMethod=(msg)=>{
        const obj = {
            isMessageModal: true,
            isMsg: msg
        }
        dispatch(messageModal(obj));
    }

    const [state, setState] = React.useState({
        name: '',
        nameGuideText: '',
        hp: '',
        hpGuideText:'',
        isAuthenNumberBtn: false,
        isAuthenbox: false,
        isHpAuthenNumber: null,   // 발급된 인증번호
        isHpAuthenNumberCheck: '', // 입력한 인증번호
        submitBtn: true,

    });

    const onChangeName=(e)=>{
        let nameGuideText = '';
        let name = '';  
        const {value} = e.target;
        const regexp = /[`~!@#$%^&*()\-_=+[{\]}\\/|;:'",<.>?]/g;
        const regExp1 = /([가-힣ㄱ-ㅎㅏ-ㅣ])/g;
        const regExp2 = /([0-9])([a-zA-Z])/g;
        
        name = value.replace(regexp,'');    // value값이 이름에 들어감
        name = value.replace(regExp2,'');
        
        if( name===''  ){    // 따라서 value===''도 가능하나 이름===''으로 해도 된다.
            nameGuideText ='이름을 입력해 주세요.';
        }
        else if( regexp.test(value)===true || regExp1.test(value)===false || regExp2.test(value)===true ){
            nameGuideText = '한글을 입력해 주세요.'
        }
        else {
            nameGuideText = '';
        }
        setState({
            ...state,
            name: name,
            nameGuideText: nameGuideText
        })
    }
    const onChangeHp=(e)=>{
        let isAuthenNumberBtn = false;

        if( e.target.value.length > 0){
            isAuthenNumberBtn = true;
        }
        else {
            isAuthenNumberBtn = false;
        }

        setState({
            ...state,
            hp: e.target.value,
            isAuthenNumberBtn: isAuthenNumberBtn
        })
    }

    // 휴대폰 인증번호 발송
    const onClickAuthenModal=(e)=>{
        e.preventDefault();

        const regexp =  /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/g;
        const num = Math.floor(Math.random() * 900000 + 100000);
        let isAuthenNumberBtn = false;
        let isAuthenbox = false;

        if( regexp.test(state.hp)===false ) {
            messageModalMethod('잘못된 휴대폰 번호입니다.');
        }
        else {
            confirmModalMethod(` ${num}` );
            isAuthenNumberBtn = false;
            isAuthenbox = true;
        }
        
        setState({
            ...state,
            isAuthenNumberBtn: isAuthenNumberBtn,
            isAuthenbox: isAuthenbox,
            isHpAuthenNumber: num
        })
    }
    const onChangeHpAuthen=(e)=>{
        setState({
            ...state,
            isHpAuthenNumberCheck: e.target.value
        })
    }

    const onClickHpAuthenOk=(e)=>{
        e.preventDefault();
        let isAuthenNumberBtn = false;
        let isAuthenbox = false;
        let submitBtn = true;
        if( state.isHpAuthenNumber === Number(state.isHpAuthenNumberCheck) ){
            messageModalMethod('인증에 성공하였습니다.');
            isAuthenNumberBtn = true;
            isAuthenbox = false;
            submitBtn = false;
        }
        else {
            messageModalMethod('올바른 번호를 입력해 주세요.');
            isAuthenNumberBtn = true;
            isAuthenbox = true;
            submitBtn = true;
        }
        setState({
            ...state,
            isAuthenNumberBtn: isAuthenNumberBtn,
            isAuthenbox: isAuthenbox,
            submitBtn: submitBtn
        })
    }



    // 네비게이트 = 버튼클릭 시 로그인 폼으로 이동
    const onClickIndexBtn=(e)=>{
        e.preventDefault();
        navigate('/signIn');
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
    // 네비게이트 = 카카오 로그인
    const onClickKakaoLogin=(e)=>{
        e.preventDefault();
        navigate('/kakaologin');
    }

    // 더보기 모달 이벤트
    const onClickMoreViewBtn=(e)=>{
        e.preventDefault();
        dispatch(moreViewModal(true));
    }
    const onClickSignUp=(e)=>{
        e.preventDefault();
        navigate('/signUp');
    }

    const onSubmitSignIn=(e)=>{
        e.preventDefault();
        const regExp = /^(\d{3})(\d{3,4})(\d{4})$/g;

        const formData = new FormData();
        formData.append('userName', state.name);
        formData.append('userHp', state.hp.replace(regExp, '$1-$2-$3'));


        axios({
            url: 'http://sieun.co.kr/innisfree/innisfree_signIn_hpAuthen.php',
            method: 'POST',
            data: formData
        })
        .then(( res )=>{
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
                    messageModalMethod('이름과 휴대폰 번호를 다시 확인해주세요.');
                }
            }
        })
        .catch(( err )=>{
            console.log( err );
        })
    }

    return (
        <div id='signin'>
            <div className="container">
                <div className="gap">
                    <div className="header_box">
                        <button onClick={onClickIndexBtn} className='left_box'>
                            <img src="./images/search/icon_left_arrow.png" alt="" />
                        </button>
                        <h2>휴대폰 로그인</h2>
                    </div>
                </div>                    
                <div className="content">
                    <form autoComplete='off' onSubmit={onSubmitSignIn}>
                        <ul className="form_box">
                            <li className="login_box">
                                <label htmlFor="userName">이름</label>
                                <input 
                                    type="text" name='userName' id='userName' placeholder='이름을 입력해주세요'
                                    value={state.name}
                                    onChange={onChangeName}
                                />
                                <p className={`hide_text ${state.nameGuideText !== '' ? ' on' : ''}`}>{state.nameGuideText}</p>
                            </li>
                            <li className="login_box">
                                <label htmlFor="userHp">휴대폰 번호</label>
                                <input 
                                    type="text" name='userHp' id='userHp' placeholder='휴대폰 번호를 입력해주세요'
                                    value={state.hp}
                                    onChange={onChangeHp}
                                />
                                <div className="duplicationButton_box">
                                    <button 
                                        disabled={!state.isAuthenNumberBtn}
                                        className={`duplication_btn${state.isAuthenNumberBtn ? '' : ' off'}`}
                                        onClick={onClickAuthenModal} 
                                    >인증번호<br /> 발급</button>
                                </div>
                            </li>
                            {
                                state.isAuthenbox && (
                                <li className='login_box'>
                                    <input 
                                        type="text" name='userHpAuthen' id='userHpAuthen' placeholder='휴대폰 인증번호를 입력해주세요'
                                        value={state.isHpAuthenNumberCheck}
                                        onChange={onChangeHpAuthen}
                                    />
                                    <div className="duplicationButton_box">
                                        <button 
                                            className='duplication_btn'
                                            onClick={onClickHpAuthenOk}
                                        >인증번호 <br />확인</button>
                                    </div>
                                </li>
                                )
                            }
                        </ul>
                        <div className="button_box">
                            <button type='submit' className={`signUp_btn ${state.submitBtn ? '' : ' on'}`} disabled={state.submitBtn} >본인인증 완료</button>
                        </div>
                    </form>
                    <ul className="authen_box hp_login">
                        <li onClick={onClickKakaoLogin}>
                            <img src="./images/signIn/icon_kakao.png" alt="" />
                            <span>카카오<br />로그인</span>
                        </li>
                        <li>
                            <img src="./images/signIn/icon_naver.png" alt="" />
                            <span>네이버<br />로그인</span>
                        </li>
                        <li>
                            <button onClick={onClickMoreViewBtn} className='moreView_box'>
                                <img src="./images/signIn/icon_moreView.png" alt="" />
                            </button>
                                <span>더보기</span>
                        </li>
                    </ul>
                    <ul className="search_box">
                        <li><a href="/idSearch" onClick={onClickIdSearchBtn}>아이디 찾기</a></li>
                        <li><i></i><a  href="/pwSearch" onClick={onClickPwSearchBtn}>비밀번호 찾기</a></li>
                    </ul>
                    <button className="signUp_btn">
                        <a href="!#" onClick={onClickSignUp}>
                            <span>아직 회원이 아니세요?</span>
                            <strong>회원가입</strong>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};
