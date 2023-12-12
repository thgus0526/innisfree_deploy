import React from 'react';
import './scss/authen.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { confirmModal } from '../../reducer/confirmModal';
import { messageModal } from '../../reducer/messageModal';
import axios from 'axios';

export default function SignUpCom () {

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

        birthYear: '',
        birthMonth: '',
        birthDate: '',
        birthGuidText: '',

        hp: '',
        hpGuideText:'',
        isAuthenNumberBtn: false,
        isAuthenbox: false,
        isHpAuthenNumber: null,   // 발급된 인증번호
        isHpAuthenNumberCheck: '' // 입력한 인증번호


    });

    // 입력상자 = 이름
    const onChangeName=(e)=>{
        let nameGuideText = '';
        let name = '';  
        const {value} = e.target;
        const regexp = /[`~!@#$%^&*()\-_=+[{\]}\\/|;:'",<.>?]/g;
        
        name = value.replace(regexp,'');    // value값이 이름에 들어감
        
        if( name==='' ){    // 따라서 value===''도 가능하나 이름===''으로 해도 된다.
            nameGuideText ='이름을 입력해 주세요.';
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
    // 입력상자 = 휴대폰
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

    

    // 입력상자 = 생년
    const onChangeYear=(e)=>{
        const regExp = /[^0-9]/g;
        let birthYear = e.target.value.replace(regExp, '');
        setState({
            ...state,
            birthYear: birthYear
        })
    }
    // 입력상자 = 생월
    const onChangeMonth=(e)=>{
        const regExp = /[^0-9]/g;
        let birthMonth = e.target.value.replace(regExp, '');
        setState({
            ...state,
            birthMonth: birthMonth
        })
    }
    // 입력상자 = 생일
    const onChangeDate=(e)=>{
        const regExp = /[^0-9]/g;
        let birthDate = e.target.value.replace(regExp, '');
        setState({
            ...state,
            birthDate: birthDate
        })
    }
    // 생년월일 유효성 검사
    React.useEffect(()=>{
       
        let birthGuidText = '';

        if( state.birthYear==='' && state.birthMonth==='' &&  state.birthDate==='' ){
            birthGuidText = '';
        }
        else{  

            if(state.birthYear.length<4){  
                birthGuidText = '태어난 년도 4자리를 정확하게 입력해주세요.';
            }
            else if( Number(state.birthYear) < (new Date().getFullYear()-130) ){ 
                birthGuidText = '생년월일을 다시 확인해주세요.';
            }            
            else if(  Number(state.birthYear) > new Date().getFullYear()  ){
                birthGuidText = '생년월일이 미래로 입력 되었습니다. ';
            }            
            else{  
                
                if( state.birthMonth < 1 || state.birthMonth > 12 ){
                    birthGuidText = '태어난 월을 정확하게 입력해주세요.';
                }
                else {
                    if(state.birthDate < 1 || state.birthDate > 31 ){
                        birthGuidText = '태어난 일을 정확하게 입력해주세요.';
                    }
                    else {
                        if(  Number(state.birthYear) === (new Date().getFullYear()-14)  ){
                            if( Number(state.birthMonth) === (new Date().getMonth()+1) ){
                                if( Number(state.birthDate) === new Date().getDate() ){
                                    birthGuidText = ''; 
                                }
                                else if( Number(state.birthDate) > new Date().getDate() ){
                                    birthGuidText = '만 14세 미만은 가입이 불가합니다.';
                                }
                            }
                            else if(Number(state.birthMonth) > (new Date().getMonth()+1)){
                                birthGuidText = '만 14세 미만은 가입이 불가합니다.';
                            }                            
                        }
                        else if(  Number(state.birthYear) > (new Date().getFullYear()-14)  ){
                            birthGuidText = '만 14세 미만은 가입이 불가합니다.';
                        }          

                    }
                }

            }
        }

        setState({
            ...state,
            birthGuidText: birthGuidText
        }) 

    },[state.birthYear,state.birthMonth,state.birthDate]);


    // 네비게이트 = 버튼클릭 시 로그인 폼으로 이동
    const onClickIndexBtn=(e)=>{
        e.preventDefault();
        navigate('/');
    }
    // 네비게이트 = 회원가입 폼
    // 이름, 휴대폰, 생년월일 데이터 세션스토레이지에 저장
    const onClickAuthenBtn=(e)=>{
        e.preventDefault();

        if( state.name!=='' && state.hp!=='' && state.birthYear!=='' && state.birthMonth!=='' && state.birthDate!=='' && state.isHpAuthenNumber === Number(state.isHpAuthenNumberCheck)){
            const regExp = /^(\d{3})(\d{3,4})(\d{4})$/g; 
            navigate('/signupForm', {
                state: {
                    name: state.name,
                    hp: state.hp.replace(regExp, '$1-$2-$3'),
                    birthYear: state.birthYear,
                    birthMonth: state.birthMonth,
                    birthDate: state.birthDate
                }
            });
        }
        else {
            messageModalMethod('모든 항목을 올바르게 입력해 주세요.');
        }
    }


    return (
        <div id='search'>
            <div className="container">
                <div className="header_box">
                    <button onClick={onClickIndexBtn}>
                        <img src="./images/search/icon_left_arrow.png" alt="" />
                    </button>
                    <h2>본인인증</h2>
                    <button className='big_close'>
                        <img src="./images/signIn/icon_bigClose.png" alt="" />
                    </button>
                </div>                 
                <div className="content">
                    <div className="title">
                        <h1>뷰티포인트 본인인증</h1>
                        <h2 className='signup_text'>본인인증 절차를 완료해주세요.</h2>
                    </div>
                    <form autoComplete='off' >
                        <ul className="form_box">
                            <li>
                                <label htmlFor="userName">이름</label>
                                <input 
                                    type="text" name='userName' id='userName' placeholder='이름을 입력해주세요'
                                    value={state.name}
                                    onChange={onChangeName}
                                />
                                <p className={`hide_text ${state.nameGuideText !== '' ? ' on' : ''}`}>{state.nameGuideText}</p>
                            </li>
                            <li>
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
                            <div>
                                <h3>생년월일</h3>
                            </div>
                            <div className="birth_box">
                                <ul>
                                    <li>
                                        <input 
                                            type="text" name='userYear' id='userYear' placeholder='YYYY'
                                            value={state.birthYear}
                                            onChange={onChangeYear}
                                            maxLength={4}
                                        />
                                    </li>
                                    <li><i>/</i></li>
                                    <li>
                                        <input 
                                            type="text" name='userMonth' id='userMonth' placeholder='MM'
                                            value={state.birthMonth}
                                            onChange={onChangeMonth}
                                            maxLength={2}
                                        />
                                    </li>
                                    <li><i>/</i></li>
                                    <li>
                                        <input 
                                            type="text" name='userDate' id='userDate' placeholder='DD'
                                            value={state.birthDate}
                                            onChange={onChangeDate}
                                            maxLength={2}
                                        />
                                    </li>
                                </ul>
                                <p className={`guid_text${state.birthGuidText!==''?' on':''}`}>{state.birthGuidText}</p>
                            </div>
                        </ul>
                    </form>
                    <div className="button_box">
                        <button className="signUp_btn" onClick={onClickAuthenBtn}>본인인증 완료</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
