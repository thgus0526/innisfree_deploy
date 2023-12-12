import React from 'react';
import './scss/messageModal.scss';
import { useDispatch,useSelector } from 'react-redux';
import { messageModal } from '../../reducer/messageModal';

export default function MessageModal () {
    

    const messageModalMethod=(msg)=>{
        const obj = {
            isMessageModal: false,
            isMsg: msg
        }
        dispatch(messageModal(obj));
    }

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);

    // 인증 모달창 닫기
    const onClickClose=(e)=>{
        e.preventDefault();
        messageModalMethod(false);
    }

    return (
        <div id='message_modal'>
            <div className="container">
                <div className="content">
                    <div className="title">
                        {/* {
                            selector.messageModal.isMsg.map((item)=>{
                                return (
                                    <h2 key={item}>{item}</h2>
                                )
                            })
                        } */}
                        <h2>{selector.messageModal.isMsg}</h2>
                    </div>
                    <button onClick={onClickClose}>닫기</button>
                </div>
            </div>
        </div>
    );
};
