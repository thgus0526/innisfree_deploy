import React from "react";
import './scss/mainModal.scss';
import { useDispatch } from "react-redux";
import { mainModal } from "../reducer/mainModal";

export default function MainModalCom () {

    const dispatch = useDispatch();

    const onClickCloseBtn=(e)=>{
        e.preventDefault();

        dispatch(mainModal(false));
    }

    const onClickCloseBtnExpires=(e)=>{
        e.preventDefault();        
        let toDay = new Date();
        toDay.setDate( toDay.getDate() + 1  );

        const obj = {
            id: 'MAIN20231129',
            expires: toDay.getTime()
        }
        localStorage.setItem('INNISFREE_MAIN_MODAL_KEY', JSON.stringify(obj));
        dispatch(mainModal(false));
    }
    return (
        <div id="mainModal">
            <div className="container">
                <div className="modal">
                    <div className="event">
                        <div className="slide-view">
                            <ul className="slide-wrap">
                                <li className="slide">
                                    <a href="!#">
                                        <img src="./images/index/BM01_822_left_pc.jpg" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="btn-wrap">
                        <button type="button" className="toDay" onClick={onClickCloseBtnExpires}>오늘 그만 보기</button>
                        <button type="button" className="close" onClick={onClickCloseBtn}>닫기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}