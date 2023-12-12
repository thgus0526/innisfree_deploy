import React from "react";
import './scss/quickMenu.scss';
import { useDispatch } from "react-redux";
import { shoppingModal } from "../reducer/shoppingModal";

export default function QuickMenuCom () {

    const dispatch = useDispatch();

    const onClickGoTop=(e)=>{
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const onClickHistory=(e)=>{
        e.preventDefault();
        dispatch(shoppingModal(true));
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }

    return (
        <div id="quickMenu">
            <div className="sch-slide">
                <button type="button" className="btn-history" onClick={onClickHistory}></button>
            </div>
            <button type="button" className="go-top" onClick={onClickGoTop}></button>
        </div>
    )
}