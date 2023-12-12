import React from 'react';
import './scss/myPageDataUpdate.scss';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { messageModal } from '../../reducer/messageModal';
import { addressSearch } from '../../reducer/addressSearch';
import { hpUpdateModal } from '../../reducer/hpUpdateModal';
import { hpUpdateNumber } from '../../reducer/hpUpdateNumber';
import { signIn } from '../../reducer/signIn';
import axios from 'axios';

export default function MypageDataUpdateCom () {


    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selector = useSelector((state)=>state);
    
    const [state, setState] = React.useState({
        newEmail: '',
        newHp: '',
        newAddress: location.state.address,
        newRemainingAddress:'',

        email: location.state.email,
        emailGuideText: '',
        isDuplicationEmailBtn: false,
        isDuplicationEmailCheck: false,

        hp: location.state.hp,
        isAuthenNumberBtn: false,
        isAuthenbox: false,
        isHpAuthenNumber: null,   // 발급된 인증번호
        isHpAuthenNumberCheck: '', // 입력한 인증번호

        // API
        isAddress:'',
        isRemainingAddress:'',
        showAddress: false,

        pw: '',
        id:'',
        name: '',
        birth: '',
        address: ''
    });    
    React.useEffect(()=>{
        if( selector.signIn.signInData!==null && state.id==='' ){
            setState({
                ...state,
                id:       selector.signIn.signInData.id,
                pw:       selector.signIn.signInData.pw,
                name:     selector.signIn.signInData.name,
                hp:       selector.signIn.signInData.hp,
                email:    selector.signIn.signInData.email,
                birth:    selector.signIn.signInData.birth,
                address:  selector.signIn.signInData.address,
            })
        }
    },[selector.signIn.signInData]);
    
    // 메세지모달 메소드
    const messageModalMethod=(msg)=>{
        const obj = {
            isMessageModal: true,
            isMsg: msg
        }
        dispatch(messageModal(obj));
    }

    React.useEffect(()=>{
        if( selector.hpUpdateNumber.isHpUpdateNumber!== ''){
            setState({
                ...state,
                hp: selector.hpUpdateNumber.isHpUpdateNumber
            })
        }
    },[selector.hpUpdateNumber.isHpUpdateNumber]);


    // 이메일 입력상자
    const onChangeEmail=(e)=>{
        const {value} = e.target;
        let isDuplicationEmailBtn = false;
        const regexp = /^[A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'?]+((\.)?[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?]+)*@[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?.]+((\.)?[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?.]+)*\.[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?]+$/g;
        if( regexp.test(value)===false ){
            isDuplicationEmailBtn = false;
        }
        else {
            isDuplicationEmailBtn = true;
        }
        setState({
            ...state,
            email: value,
            isDuplicationEmailBtn: isDuplicationEmailBtn
        })
    }

    // 이메일 중복확인
    const onClickDuplicationEmail=(e)=>{
        e.preventDefault();
        const value = state.email;
        let isDuplicationEmailCheck = false;
        const regexp = /^[A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'?]+((\.)?[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?]+)*@[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?.]+((\.)?[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?.]+)*\.[A-Za-z가-힣ㄱ-ㅎㅏ-ㅣ0-9`~!#$%^&*\-_=+{}|'?]+$/g;
        if( regexp.test(value)===false ){
            messageModalMethod('이메일 형식으로 입력해 주세요.'); 
            isDuplicationEmailCheck = false;
            setState({
                ...state,
                isDuplicationEmailCheck: isDuplicationEmailCheck
            })
        }
        else if( value==='' ){ 
            messageModalMethod('이메일을 입력해 주세요.'); 
        }
        else {
            let formData = new FormData();
            formData.append('userEmail', state.email);

            axios({
                url: 'http://sieun.co.kr/innisfree/innisfree_email_duplication.php',
                method: 'POST',
                data: formData
            })
            .then(( res )=>{
                if(res.status===200 ){
                    if( res.data===-1 ){
                        messageModalMethod('사용 할 수 있는 이메일 입니다.');
                        isDuplicationEmailCheck = true;
                    }
                    else if( res.data===2 ){
                        messageModalMethod('이미 사용중인 이메일 입니다.');
                        isDuplicationEmailCheck = false;
                    }
                    setState({
                        ...state,
                        isDuplicationEmailCheck: isDuplicationEmailCheck
                    })
                }
            })
            .catch(( err )=>{
                console.log( err );
            })
        }
    }

    // 주소검색 API 열기
    const onClickPostcode=(e)=>{
        e.preventDefault();
        dispatch(addressSearch(true));
    }
    // 주소 바인딩하기
    React.useEffect(()=>{
        setTimeout(()=>{
            if(selector.address.isAddress!=='' && selector.address.isRemainingAddress!=='' ){
                return (
                    setState({
                        ...state,
                        newAddress: selector.address.isAddress,
                        newRemainingAddress: selector.address.isRemainingAddress,
                        showAddress: true
                    })    
                )
            }
        }, 10);
    },[selector.address.isAddress, selector.address.isRemainingAddress]);

    const onChangeRemainingAddress=(e)=>{
        setState({
            ...state,
            newRemainingAddress: e.target.value
        });
    }
    const onClickHpBtn=(e)=>{
        e.preventDefault();
        dispatch(hpUpdateModal(true));
    }
    const onClickPwUpDate=(e)=>{
        e.preventDefault();
        navigate('/mypagePwUpdate', {
            state: {
                pw: location.state.비밀번호,
                id: location.state.id
            }
        });
    }

    
    const onSubmitForm=(e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('userId', location.state.id);
        formData.append('userEmail', state.email);
        formData.append('userHp', state.hp);
        formData.append('userAddress', `${state.newAddress} ${state.newRemainingAddress}`);
        // console.log(state.id);
        // console.log(location.state.id);
        // console.log(state.email);
        // console.log(state.newHp);
        // console.log(state.newAddress);
        // console.log(state.newRemainingAddress);
        axios({
            url: 'http://sieun.co.kr/innisfree/innisfree_data_reset.php',
            method: 'POST',
            data: formData
        })
        .then(( res )=>{
            console.log( res );
            console.log( res.data );
            if( res.status===200 ){
                if( res.data!=='' ){
                    console.log( res);
                    console.log( res.data);
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
    
                    setState({
                        ...state,
                        name: res.data.이름,
                        hp: res.data.휴대폰,
                        birth: res.data.생년월일,
                        id : res.data.아이디,
                        pw: res.data.비밀번호,
                        address: res.data.주소,
                        email: res.data.이메일,
                    });
                    
                    navigate('/index');
                }
                messageModalMethod('개인정보 수정이 완료되었습니다.');
            }
            else {
                messageModalMethod('개인정보를 확인하고 다시 시도해 주세요.');
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const onClickSignOut=(e)=>{
        e.preventDefault();
        navigate('/mypageSignOut', {
            state: {
                pw: location.state.비밀번호,
                id: selector.signIn.signInData.id
            }
        });
    }

    return (
        <div id='data_update'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>뷰티포인트 통합 회원 정보 수정</h1>
                        <p>* 이 페이지에서 회원정보 수정, 비밀번호 수정시 뷰티포인트 통합 아이디로 로그인하는 아모레퍼시픽 사이트의 정보가 함께 변경됩니다.</p>
                    </div>
                    <ul className="tab_box">
                        <li className='left'><a href="!#" >회원정보 수정</a></li>
                        <li onClick={onClickPwUpDate} className='right'><a href="!#" >비밀번호 수정</a></li>
                    </ul>
                    <div className="sns_box">
                        <div className="sub_title">
                            <h2>SNS/Apple ID 계정 연동 관리</h2>
                        </div>
                        <div className="sns_list">
                            <ul>
                                <li><img src="./images/icon_sns_facebook.png" alt="" /><span>페이스북</span><strong>연결 정보 없음</strong></li>
                                <li><img src="./images/icon_sns_kakao.png" alt="" /><span>카카오톡</span><strong>연결 정보 없음</strong></li>
                                <li><img src="./images/icon_sns_naver.png" alt="" /><span>네이버&nbsp;&nbsp;&nbsp;&nbsp; </span><strong>연결 정보 없음</strong></li>
                                <li><img src="./images/icon_sns_apple.png" alt="" /><span>Apple&nbsp;&nbsp;&nbsp;&nbsp; </span><strong>연결 정보 없음</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div className="service_box">
                        <div className="sub_title">
                            <p>이름 변경(개명)의 경우 이니스프리 고객상담실(080-380-0114)로 문의 부탁드립니다.</p>
                        </div>
                        <div className="content">
                            <form onSubmit={onSubmitForm}>
                                <ul>
                                    <li><h2>이름</h2><h3>{location.state.name}</h3></li> 
                                    <li><h2>아이디</h2><h3>{location.state.id}</h3></li>
                                    <li><h2>생년월일</h2><h3>{location.state.birth}</h3></li>
                                    <li>
                                        <h2>이메일</h2>
                                        <input 
                                            type="text" 
                                            name='userEmail'
                                            id='userEmail'
                                            placeholder='이메일을 입력해주세요'
                                            value={state.email}
                                            onChange={onChangeEmail}
                                            className='input_obj'
                                        />
                                        <div className="email_update_box">
                                            <button 
                                                    disabled={!state.isDuplicationEmailBtn}
                                                    className={`duplication_btn${state.isDuplicationEmailBtn ? '' : ' off'}`}
                                                    onClick={onClickDuplicationEmail} 
                                                >중복확인</button>
                                        </div>
                                    </li>
                                    {
                                        selector.hpUpdateNumber.isHpUpdateNumber==='' && (
                                        <li>
                                            <h2>휴대폰 번호</h2>
                                            <h3>{location.state.hp}</h3>
                                            <div className="dutton_box">
                                                <button onClick={onClickHpBtn}>변경</button>
                                            </div>
                                        </li>
                                        )
                                    }
                                    {
                                        selector.hpUpdateNumber.isHpUpdateNumber!=='' && (
                                        <li>
                                            <h2> 변경된 휴대폰 번호</h2>
                                            <h3>{selector.hpUpdateNumber.isHpUpdateNumber}</h3>
                                            <div className="dutton_box">
                                                <button onClick={onClickHpBtn}>변경</button>
                                            </div>
                                        </li>
                                        )
                                    }
                                    {
                                        state.newAddress==='' && (
                                        <li>
                                            <h2>주소</h2>
                                            <div className="input_box">
                                                <input 
                                                    type="text" name='userAddress' id='userAddress' placeholder='검색주소'
                                                    value={location.state.address}
                                                    disabled={true}
                                                    className='input_obj'
                                                />
                                                <div className="duplicationButton_box">
                                                        <button onClick={onClickPostcode} className='duplication_btn fix' >주소검색</button>
                                                </div>
                                            </div>
                                        </li>
                                        )
                                    }

                                    {
                                        state.newAddress!=='' && (
                                            <>
                                            <li>
                                                <h2>변경된 주소</h2>
                                                <div className="input_box">
                                                    <input 
                                                        type="text" name='userAddress' id='userAddress' placeholder='검색주소'
                                                        value={state.newAddress}
                                                        disabled={true}
                                                        className='input_obj'
                                                    />
                                                    <div className="duplicationButton_box">
                                                            <button onClick={onClickPostcode} className='duplication_btn fix' >주소검색</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <h2></h2>
                                                <div className="input_box">
                                                    <input 
                                                        type="text" name='userAddressSearch' id='userAddressSearch' placeholder='나머지 주소를 입력해주세요' className='other'
                                                        value={state.newRemainingAddress}
                                                        onChange={onChangeRemainingAddress}
                                                    />
                                                </div>
                                            </li>
                                            </>
                                        )
                                    }
                                </ul>
                                <div className="update_button_box">
                                    <button type='submit'>확인</button>
                                    <Link to="/index">취소</Link>
                                </div>
                            </form>
                            <div className="signOut">
                                <div className="container">
                                    <span>이니스프리 회원 또는 이니스프리 밀리터리 회원에서 탈퇴가 가능합니다.</span>
                                    <button onClick={onClickSignOut}>회원탈퇴</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};