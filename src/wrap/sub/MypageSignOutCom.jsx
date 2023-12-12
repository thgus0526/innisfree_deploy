import React from 'react';
import './scss/myPageSignOut.scss';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../reducer/signIn';
import { useNavigate } from 'react-router-dom';
import { messageModal } from '../../reducer/messageModal';
import axios from 'axios';

export default function MypageSignOutCom () {

    const location = useLocation();
    const navigate = useNavigate();
    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();

    const [ state, setState ] = React.useState({
        radio: '',
        text: '',
        pw: '',
        id: '',
        name:'',
        hp:'',
        email:'',
        birth:'',
        address:'',

        newPw1:'',
        newPw2:''
    });

    const messageModalMethod=(msg)=>{
        const obj = {
            isMessageModal: true,
            isMsg: msg
        }
        dispatch(messageModal(obj));
    }
        
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
            });
        }
    },[selector.signIn.signInData]);

    // console.log(state.id);
    // console.log(state.pw);
    // console.log(location)
    console.log(location.state.id);
    // console.log(location.state.pw);
    console.log(state.pw);
    // console.log(state.id);
    // console.log(selector.signIn.signInData);
    
    // console.log(selector.signIn.signInData.id);
    // console.log(selector.signIn.signInData.pw);


    const onChangeRadio=(e)=>{
        setState({
            ...state,
            radio: e.target.value
        })
    }

    const onChangeText=(e)=>{
        setState({
            ...state,
            text: e.target.value
        })
    }



    const onSubmitForm=(e)=>{
        e.preventDefault();

        
        const formData = new FormData();
        formData.append('userPw', state.pw);
        formData.append('userId', location.state.id);

        axios({
            url: 'http://sieun.co.kr/innisfree/innisfree_delete.php',
            method: 'POST',
            data: formData
        })
        .then(( res )=>{

            if( res.status === 200 ){
                console.log(res);
                console.log(res.data);


                messageModalMethod('회원탈퇴가 완료되었습니다.');
                localStorage.removeItem('INNISFREE_SIGNIN_DATA');
                dispatch(signIn(null));
                navigate('/index');
                
            }
            else {
                messageModalMethod('회원정보를 확인하고 다시 시도해 주세요.');
            }
        })
        .catch(( err )=>{
            console.log( err );
        })
    }


    return (
        <div id='sign_out'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>회원탈퇴</h1>
                    </div>
                    <div className="service_box">
                        <div className="sub_title"></div>
                        <div className="content">
                            <form onSubmit={onSubmitForm}>
                                <div className="alert_box">
                                    <ul>
                                        <li><img src="./images/ico_nodate.png" alt="" /></li>
                                        <li><span>이니스프리 공식 온라인몰을 이용하는데 불편한 사항이 있으셨나요?</span></li>
                                        <li><p>의견을 남겨주시면, 보다 나은 서비스 제공을 위해 참고하겠습니다. <br />회원 탈퇴 전 아래의 사항들을 확인해주세요.</p></li>
                                    </ul>
                                    <div className="info_box">
                                        <ul>
                                            <li className='info_li'>
                                                <h4>1.이니스프리 공식 온라인몰에서 탈퇴시 다음의 정보는 삭제될 수 있습니다. - 이니스프리 공식 온라인몰에서 발행한 쿠폰</h4>
                                                <span>- 리뷰 프로필, 리뷰 작성 내역, 리뷰관 활동 내역</span>
                                                <span>- 1:1 문의 내역 등</span>
                                            </li>
                                            <li className='info_li'>
                                                <h4>2. 이니스프리 공식 온라인몰에서 탈퇴하더라도, 즉시 재이용 하실 수 있습니다. </h4>
                                                <span>- 뷰티포인트 통합 아이디로 로그인 및 이니스프리 서비스 이용약관 동의</span>
                                                <span>- 뷰티포인트 통합 아이디로 공식 온라인몰을 이용하셨던 경우, 재가입 시점에 따라 1에서 언급한 정보가 유지될 수 있습니다.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="title">
                                    <h1>이니스프리 온라인 회원탈퇴</h1>
                                </div>
                                <div className="sub_title pw"></div>
                                <ul className='input_box'>
                                    <li>
                                        <h2>비밀번호</h2>
                                        <input 
                                            type="text" 
                                            name='userPw'
                                            id='userPw'
                                            value={state.pw}
                                            className='input_obj'
                                            disabled
                                        />
                                    </li>
                                    <li>
                                        <h2>탈퇴사유</h2>
                                        <ul className="radio_box">
                                            <li>
                                                <label htmlFor="radio1">
                                                    <input 
                                                        type="radio" 
                                                        name='radio1'
                                                        id='radio1'
                                                        value={'재가입을위해서'}
                                                        onChange={onChangeRadio}
                                                        checked={state.radio.includes('재가입을위해서')}
                                                    />
                                                    <span>재가입을위해서</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="radio3">
                                                    <input 
                                                        type="radio" 
                                                        name='radio2'
                                                        id='radio3'
                                                        value={'사이트 이용이 불편해서'}
                                                        onChange={onChangeRadio}
                                                        checked={state.radio.includes('사이트 이용이 불편해서')}
                                                    />
                                                    <span>사이트 이용이 불편해서</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="radio3">
                                                    <input 
                                                        type="radio" 
                                                        name='radio3'
                                                        id='radio3'
                                                        value={'정보가 별로 없어서'}
                                                        onChange={onChangeRadio}
                                                        checked={state.radio.includes('정보가 별로 없어서')}
                                                    />
                                                    <span>정보가 별로 없어서</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="radio4">
                                                    <input 
                                                        type="radio" 
                                                        name='radio4'
                                                        id='radio4'
                                                        value={'서비스 장애 및 지연이 자주 발생되서'}
                                                        onChange={onChangeRadio}
                                                        checked={state.radio.includes('서비스 장애 및 지연이 자주 발생되서')}
                                                    />
                                                    <span>서비스 장애 및 지연이 자주 발생되서</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="radio5">
                                                    <input 
                                                        type="radio" 
                                                        name='radio5'
                                                        id='radio5'
                                                        value={'개인정보 유출이 우려되어서'}
                                                        onChange={onChangeRadio}
                                                        checked={state.radio.includes('개인정보 유출이 우려되어서')}
                                                    />
                                                    <span>개인정보 유출이 우려되어서</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label htmlFor="radio6">
                                                    <input 
                                                        type="radio" 
                                                        name='radio6'
                                                        id='radio6'
                                                        value={'기타'}
                                                        onChange={onChangeRadio}
                                                        checked={state.radio.includes('기타')}
                                                    />
                                                    <span>기타</span>
                                                </label>
                                            </li>
                                            <li>
                                                <textarea name="textarea" id="textarea" cols="30" rows="10" value={state.text} onChange={onChangeText}></textarea>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="update_button_box">
                                    <button type='submit'>회원탈퇴</button>
                                    <Link to="/index">취소</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};