import React from "react";
import './scss/topModal.scss'
import { useDispatch } from "react-redux";
import { topModal } from "../reducer/topModal";

export default function TopModalCom () {

    const dispatch = useDispatch();

    const onClickClose=(e)=>{
        e.preventDefault();
        let expires = 3;
        let toDay = new Date();
        toDay.setDate( toDay.getDate() + expires );

        const obj = {
            id: `TOP20231129`,
            expires: toDay.getTime()
        }
        localStorage.setItem('INNISFREE_TOP_MODAL_KEY', JSON.stringify(obj) );

        dispatch(topModal(false));
    }

    return (
        <div id="topModal">
            <a href="!#" className="txt">현대카드 15,000 포인트 혜택</a>
            <button className="btnClose" onClick={onClickClose}><span className="ir">닫기</span></button>
        </div>
    )
}