import React from 'react';
import './scss/searchResult.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { confirmModal } from '../../reducer/confirmModal';
import { messageModal } from '../../reducer/messageModal';
import axios from 'axios';

export default function PwSearchResultCom () {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    console.log(location.state.pw);
    console.log(location.state.비밀번호);
    const dispatch = useDispatch();

    const onClickLogin=(e)=>{
        e.preventDefault();
        navigate('/signIn');
    }



    return (
        <div id='search'>
            <div className="container">
                <div className="header_box">
                    <h2>비밀번호찾기 결과</h2>
                    <button className='big_close'>
                        <img src="./images/signIn/icon_bigClose.png" alt="" />
                    </button>
                </div>                 
                <div className="content">
                    <div className="binding_box">
                        <div className="title search">
                            <h1>검색된 비밀번호</h1>
                            <ul>
                                <li><em>비밀번호</em><h2>{location.state.pw}</h2></li>
                            </ul>
                        </div>
                    </div>
                    <div className="button_box">
                        <button className="login" onClick={onClickLogin}>로그인</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
