import React from 'react';
import './scss/mypage.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { messageModal} from '../../reducer/messageModal.js';
import { useSelector } from 'react-redux';
import { signIn } from '../../reducer/signIn.js';


export default function MypageCom () {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    const messageModalMethod=(msg)=>{
        const obj = {
            isMessageModal: true,
            isMsg: msg
        }
        dispatch(messageModal(obj));
    }

    const [state, setState] = React.useState({
        pw: '',
        name: '',
        hp: '',
        id: '',
        birth: '',
        birthYear: '',
        birthMonth: '',
        birthDate: '',
        email: '',
        address: ''
    })

    const onChangePw=(e)=>{
        setState({
            ...state,
            pw: e.target.value
        })
    }

    const onSubmitPw=(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('userPw', state.pw);

        axios({
            url:'http://sieun.co.kr/innisfree/innisfree_mypage.php',
            method:'POST',
            data: formData
        })
        .then(( res )=>{
            // console.log( res );
            // console.log( res.data );
            if( res.status===200 ){
                const result = JSON.parse(localStorage.getItem('INNISFREE_SIGNIN_DATA'));
                if( result.pw !== res.data.비밀번호 ){
                    messageModalMethod('로그인 된 비밀번호를 입력해 주세요.');
                }
                else {
                    const obj = {
                        name: res.data.이름,
                        hp: res.data.휴대폰,
                        id: res.data.아이디,
                        birth: res.data.생년월일,
                        email: res.data.이메일,
                        address: res.data.주소,
                        pw: res.data.비밀번호 
                    }
                    navigate('/mypageDataUpdate', {
                        state: {
                            name: res.data.이름,
                            hp: res.data.휴대폰,
                            id: res.data.아이디,
                            birth: res.data.생년월일,
                            email: res.data.이메일,
                            address: res.data.주소,
                            pw: res.data.비밀번호
                        }
                    });
                    dispatch(signIn(obj));
                    // console.log(obj);
                }
            }
            else {
                messageModalMethod('비밀번호를 확인해주세요.');
            }
        })
        .catch(( err )=>{
            console.log( err );
        })
    }


    return (
        <div id='mypage'>
            <div className="container">
                <div className="title">
                    <h1>비밀번호 재확인</h1>
                </div>
                <div className="sub_title">
                    <h2>회원님의 개인정보 보호를 위해 비밀번호를 입력해주세요.</h2>
                    <h2>이니스프리는 회원님의 개인정보를 신중히 취급하며, 회원님의 동의 없이는 회원정보가 공개되지 않습니다.</h2>
                    <h2>보다 다양한 혜택/서비스를 받으시려면 회원 정보를 최신으로 유지해주세요.</h2>
                </div>
                <form onSubmit={onSubmitPw}>
                    <div className="input_box">
                        <label htmlFor="userPw">비밀번호</label>
                        <input 
                            type="password" 
                            name='userPw'
                            id='userPw'
                            value={state.pw}
                            onChange={onChangePw}
                        />
                    </div>
                    <div className="button_box">
                        <button type='submit'>확인</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
