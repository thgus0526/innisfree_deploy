import React from 'react';
import './scss/authen.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { confirmModal } from '../../reducer/confirmModal';
import { messageModal } from '../../reducer/messageModal';
import axios from 'axios';

export default function SearchResultCom () {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();



    const onClickLogin=(e)=>{
        e.preventDefault();
        navigate('/signIn');
    }


    return (
        <div id='search'>
            <div className="container">
                <div className="header_box">
                    <h2>아이디찾기 결과</h2>
                    <button className='big_close'>
                        <img src="./images/signIn/icon_bigClose.png" alt="" />
                    </button>
                </div>                 
                <div className="content">
                    <div className="binding_box">
                        <div className="title">
                            <h1>기본정보(필수)</h1>
                            <ul>
                                <li><em>아이디</em><h2>{location.state.id}</h2></li>
                            </ul>
                        </div>
                    </div>
                    <div className="button_box">
                        <button className="signUp_btn" onClick={onClickLogin}>로그인</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
