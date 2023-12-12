import React from 'react';
import './scss/search.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { confirmModal } from '../../reducer/confirmModal';
import { messageModal} from '../../reducer/messageModal';
import axios from 'axios';

export default function PwSearchCom () {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [state, setState] = React.useState({
        name: '',
        nameGuideText: '',

        hp: '',
        hpGuideText:'',
        isAuthenNumberBtn: false,
        isAuthenbox: false,
        isHpAuthenNumber: null,   // 발급된 인증번호
        isHpAuthenNumberCheck: '',

        submitBtn: true,
        id: '',
        pw: ''
    });

    // 네비게이트 = 버튼클릭 시 로그인 폼으로 이동
    const onClickIndexBtn=(e)=>{
        e.preventDefault();
        navigate('/signIn');
    }

    // 메세지모달 메소드
    const messageModalMethod=(msg)=>{
        const obj = {
            isMessageModal: true,
            isMsg: msg
        }
        dispatch(messageModal(obj));
    }
    // 컨펌모달 메소드
    const confirmModalMethod=(msg)=>{
        const obj = {
            isConfirmModal: true,
            confirmMsg: msg,
            isSignInOk: false
        }
        dispatch(confirmModal(obj));
    }

    // 아이디 입력상자 = 정규표현식
    // 제한조건
    // 제한조건1 : 특수문자 사용불가
    // 제한조건2 : 한글사용불가
    // 제한조건3 : 4자 이상 12자 이하
    // 제한조건4 : 공백허용안함
    const onChangeId=(e)=>{
        const {value} = e.target;
        let id = '';
        let idGuideText = '';
        let isDuplicationIdBtn = false;
        const regexp1 = /([`~!@#$%^&*()\-_=+[{\]}\\/|;:'",<.>?])|([가-힣ㄱ-ㅎㅏ-ㅣ])/g; 
        const regexp2 = /^(.){4,12}$/g;
        const regexp3 = /\s/g;
        id = value.replace(regexp1, '' );
        if( value.length > 12 || regexp2.test(value)===false || regexp3.test(value)===true ){
            idGuideText = true; // '4자이상 12자 이하의 영문과 숫자(공백제외)만 입력해 주세요.'
            isDuplicationIdBtn = false;
        }
        else {
            idGuideText = false;
            isDuplicationIdBtn = true;
        }
        setState({
            ...state,
            id: id,
            idGuideText: idGuideText,
            isDuplicationIdBtn: isDuplicationIdBtn
        })
    }
    // 입력상자 = 휴대폰
    const onChangeHp=(e)=>{
        const regExp1 = /^[0-9]{3}[0-9]{3,4}[0-9]{4}$/g;
        const regExp2 = /[^\d]/g;
        const {value} = e.target;
        let isAuthenNumberBtn = false;
        let hp = '';
        hp = e.target.value.replace(regExp2, '');

        if( e.target.value.length > 0 || regExp1.test(value)===false || regExp2.test(value)===true){
            isAuthenNumberBtn = true;
        }
        else {
            isAuthenNumberBtn = false;
        }

        setState({
            ...state,
            hp: hp,
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

    // 입력상자 = 휴대폰 인증번호
    const onChangeHpAuthen=(e)=>{
        setState({
            ...state,
            isHpAuthenNumberCheck: e.target.value
        })
    }
    // 휴대폰 인증번호 확인
    const onClickHpAuthenOk=(e)=>{
        e.preventDefault();
        let isAuthenNumberBtn = false;
        let isAuthenbox = false;
        if( state.isHpAuthenNumber === Number(state.isHpAuthenNumberCheck) ){
            messageModalMethod('인증에 성공하였습니다.');
            isAuthenNumberBtn = true;
            isAuthenbox = false;
        }
        else {
            messageModalMethod('올바른 번호를 입력해 주세요.');
            isAuthenNumberBtn = true;
            isAuthenbox = true;
        }
        setState({
            ...state,
            isAuthenNumberBtn: isAuthenNumberBtn,
            isAuthenbox: isAuthenbox
        })
    }

    // 비밀번호 찾기 버튼 활성화 하기
    React.useEffect(()=>{
        if( state.id!=='' && state.hp!=='' ){
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
    },[state.id, state.hp]);

    // 폼 데이터 보내기
    const onSubmitSearch=(e)=>{
        e.preventDefault();

        const regExp = /^(\d{3})(\d{3,4})(\d{4})$/g;

        let formData = new FormData();
        formData.append('userId', state.id);
        formData.append('userHp', state.hp.replace(regExp, '$1-$2-$3'));
        
        axios({
            url: 'http://sieun.co.kr/innisfree/innisfree_pw_search.php',
            method: 'POST',
            data: formData
        })
        .then (( res )=>{
            if( res.status===200 ){
                navigate('/pwSearchResult', {
                    state: {
                        pw: res.data.비밀번호
                    }
                });
            }
            else {
                messageModalMethod('가입 시 입력한 정보를 다시 확인해주세요');
            }
        })
        .catch((err)=>{
            console.log(err);

        })
    }


    return (
        <div id='search'>
            <div className="container">
                <div className="gap">
                    <div className="header_box">
                        <button onClick={onClickIndexBtn}>
                            <img src="./images/search/icon_left_arrow.png" alt="" />
                        </button>
                        <h2>비밀번호 찾기</h2>
                    </div>
                </div>                    
                <div className="content">
                    <div className="title">
                        <h1 className='title_text'>가입 시 입력한 정보로 비밀번호를 찾아보세요.</h1>
                    </div>
                    <form autoComplete='off' onSubmit={onSubmitSearch}>
                        <ul className="form_box">
                            <li>
                                <label htmlFor="userId">아이디</label>
                                <input 
                                    type="text" name='userId' id='userId' placeholder='아이디를 입력해주세요'
                                    value={state.id}
                                    onChange={onChangeId}
                                />
                                <button className="delete_btn"><img src="./images/signIn/icon_smallClose.png" alt="" /></button>
                                <p className={`hide_text ${state.nameGuideText !== '' ? ' on' : ''}`}>{state.nameGuideText}</p>
                            </li>
                            <li>
                                <label htmlFor="userHp">가입 시 입력한 휴대폰 번호</label>
                                <input 
                                    type="text" name='userHp' id='userHp' placeholder='가입 시 입력한 휴대폰 번호를 입력해주세요'
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
                                <li>
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
                            <div className='button_box'>
                                <button 
                                    type='submit' 
                                    disabled={state.submitBtn}
                                    className={state.submitBtn===true ? '' : 'on'}
                                    >
                                    <span>비밀번호 찾기</span>
                                </button>
                            </div>
                        </ul>
                    </form>
                    <button className="signUp_btn">
                        <a href="!#">
                            <span>아직 회원이 아니세요?</span>
                            <strong>회원가입</strong>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};
