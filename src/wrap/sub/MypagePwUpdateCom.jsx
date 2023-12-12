import React from 'react';
import './scss/myPageDataUpdate.scss';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../reducer/signIn';
import { useNavigate } from 'react-router-dom';
import { messageModal } from '../../reducer/messageModal';
import axios from 'axios';

export default function MypagePwUpdateCom () {

    const location = useLocation();
    const navigate = useNavigate();
    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();

    const [ state, setState ] = React.useState({
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
    console.log(selector.signIn.signInData.hp);
    console.log(state.hp);
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

    const onChangeNewPw1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            newPw1: e.target.value
        })
    }
    const onChangeNewPw2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            newPw2: e.target.value
        })
    }

    const onSubmitForm=(e)=>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('userPw', state.newPw1);
        formData.append('userId', state.id);

        axios({
            url: 'http://sieun.co.kr/innisfree/innisfree_pw_reset.php',
            method: 'POST',
            data: formData
        })
        .then(( res )=>{

            if( res.status === 200 ){
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

                    setState({
                        ...state,
                        name: res.data.이름,
                        hp: res.data.휴대폰,
                        birth: res.data.생년월일,
                        id : res.data.아이디,
                        pw: res.data.비밀번호,
                        address: res.data.주소,
                        email: res.data.이메일,
                    })
                   
                    navigate('/index');
                }
                messageModalMethod('비밀번호 변경이 완료되었습니다.');
            }
            else {
                messageModalMethod('비밀번호를 다시 확인해주세요.');
            }
        })
        .catch(( err )=>{
            console.log( err );
        })
    }


    return (
        <div id='data_update'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>뷰티포인트 통합 비밀번호 수정</h1>
                        <p>개인정보 보호를 위해 비밀번호는 90일마다 변경해주세요.</p>
                        <p>타인에게 비밀번호가 노출되지 않도록 주의해 주세요.</p>
                        <p>비밀번호 변경시, 뷰티포인트ID로 로그인 된 모든 서비스에서 로그아웃됩니다.(자동 로그인 포함)</p>
                    </div>
                    <div className="service_box">
                        <div className="sub_title pw"></div>
                        <div className="content">
                            <form onSubmit={onSubmitForm}>
                                <ul>
                                    <li>
                                        <h2>현재비밀번호</h2>
                                        <input 
                                            type="password" 
                                            name='userPw'
                                            id='userPw'
                                            value={state.pw}
                                            className='input_obj'
                                        />
                                    </li>
                                    <li>
                                        <h2>새 비밀번호</h2>
                                        <input 
                                            type="password" 
                                            name='newPw2'
                                            id='newPw1'
                                            value={state.newPw1}
                                            onChange={onChangeNewPw1}
                                            className='input_obj'
                                        />
                                    </li>
                                    <li>
                                        <h2>새 비밀번호 확인</h2>
                                        <input 
                                            type="password" 
                                            name='newPw2'
                                            id='newPw2'
                                            value={state.newPw2}
                                            onChange={onChangeNewPw2}
                                            className='input_obj'
                                        />
                                    </li>
                                </ul>
                                <div className="info_box">
                                    <h2>비밀번호 입력 시 유의사항</h2>
                                    <ul>
                                        <li className='info_li'><h4>* 영문 소문자, 숫자, 특수문자 중 최소 2가지 조합으로 8~16자</h4></li>
                                        <li className='info_li'><p>- 사용 가능한 특수문자: !”#$%&’()*+,-./:;&gt;=&lt;?@[ ]^_`{}|~ </p></li>
                                        <li className='info_li'><p>- 공백 사용 불가</p></li>
                                        <li className='info_li'><h4>* 아이디와 동일한 비밀번호 사용불가</h4></li>
                                        <li className='info_li'><h4>* 개인정보와 관련되거나 연속된 숫자, 반복된 문자는 사용하지 않도록 주의</h4></li>
                                    </ul>
                                </div>
                                <div className="update_button_box">
                                    <button type='submit'>확인</button>
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