import React from 'react';
import './scss/SignInCom.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { moreViewModal } from '../../reducer/moreViewModal';
import axios from 'axios';
import { adminsignIn } from '../../reducer/adminsignIn';


export default function SignInCom () {    

    const navigate = useNavigate();
    const dispatch =  useDispatch();
    const selector = useSelector((state)=>state);


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
        navigate('/adminidSearch');
    }
    // 네비게이트 = 비밀번호 찾기
    const onClickPwSearchBtn=(e)=>{
        e.preventDefault();
        navigate('/adminpwSearch');
    }
    // 회원가입
    const onClickSignUpBtn=(e)=>{
        e.preventDefault();
        navigate('/adminsignUp');
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

   
    const onSubmitSignIn=(e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('adminId', state.id);
        formData.append('adminPw', state.pw);

        axios({
            url: 'http://sieun.co.kr/innisfree/innisfree_admin_signIn.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{
            if(res.status===200){
                if(res.data!==''){
                    let toDay = new Date();
                    toDay.setDate(toDay.getDate() + 1);
                    const adminsignInData = {
                        id : res.data.아이디,
                        name: res.data.이름,
                        hp: res.data.휴대폰,
                        address: res.data.주소,
                        expires: toDay.getTime()
                    }
                    
                    localStorage.setItem('INNISFREE_ADMINSIGNIN_DATA', JSON.stringify(adminsignInData));
                    
                    dispatch(adminsignIn(adminsignInData));
                    navigate('/index');
                }
            }
        
        })
        .catch((err)=>{
            console.log( "AXIOS 실패!" );
            console.log( err );
        });

    }

    const onClickSignIn=(e)=>{
        e.preventDefault();
        navigate('/index');
    }

    return (
        <section id='signin'>
            <div className="container">
                <div className="header_box">
                    <h2 onClick={onClickLoginBtn}>관리자 로그인</h2>
                    <button onClick={onClickSignIn}>
                        <img src="./images/sub/signIn/icon_bigClose.png" alt="" />
                    </button>
                </div> 
                <div className="content">
                    <div className="title">
                        <h1>관리자 <br />아이디로 로그인해주세요.</h1>
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
                                <input 
                                    type="text" 
                                    name='adminId' 
                                    id='adminId' 
                                    placeholder='아이디 입력'
                                    value={state.id}
                                    onChange={onChangeId}
                                />
                            </li>
                            <li className="login_box">
                                <input 
                                    type="password" 
                                    name='adminPw' 
                                    id='adminPw' 
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
                    
                    <ul className="search_box">
                        <li><a href="/idSearch" onClick={onClickIdSearchBtn}>아이디 찾기</a></li>
                        <li><i></i><a  href="/pwSearch" onClick={onClickPwSearchBtn}>비밀번호 찾기</a></li>
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
