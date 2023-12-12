import React from "react";
import './scss/searchModal.scss';
import { useDispatch } from "react-redux";
import { searchModal } from "../reducer/searchModal";

export default function SearchModalCom () {

    const dispatch = useDispatch();

    const onClickClose=(e)=>{
        e.preventDefault();
        dispatch(searchModal(false));
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');
    }

    return (
        <div id="searchModal">
            <div className="container">
                <h1 className="title">검색</h1>
                <div className="search-slide-wrap">
                    <div className="header-search">
                        <fieldset className="keyword-input">
                            <legend>검색어 입력</legend>
                            <input type="text" className="input-txt" id="query" name="query" placeholder />
                            <button type="button" className="btn-search"></button>
                        </fieldset>
                    </div>
                    <div className="keyword-recome">
                        <div className="title-wrap">
                            <h3 className="title">추천키워드</h3>
                        </div>
                        <div className="hash-tag">
                            <a href="!#">#홀리데이</a>
                            <a href="!#">#납작아이브로우</a>
                            <a href="!#">#레티놀</a>
                            <a href="!#">#NEW탄력장벽크림</a>
                            <a href="!#">#NEW콜라겐크림</a>
                            <a href="!#">#노세범</a>
                            <a href="!#">#블루베리</a>
                        </div>
                    </div>
                    <div className="keyword-top10">
                        <div className="title-wrap">
                            <h3 className="title">인기검색어</h3>
                            <span className="date">2023-11-29 13:20:09 업데이트</span>
                        </div>
                        <div className="list-wrap">
                            <ol className="list" id="ol1">
                                <li>
                                    <a href="!#"><span className="num">1</span><em className="icon-new"></em><span className="txt">제주핸드크림</span></a>
                                </li>
                                <li>
                                    <a href="!#"><span className="num">2</span><em className="icon-up"></em><span className="txt">그린티</span></a>
                                </li>
                                <li>
                                    <a href="!#"><span className="num">3</span><em className="icon-new"></em><span className="txt">new탄력장벽크림</span></a>
                                </li>
                                <li>
                                    <a href="!#"><span className="num">4</span><em className="icon-up"></em><span className="txt">마스카라</span></a>
                                </li>
                                <li>
                                    <a href="!#"><span className="num">5</span><em className="icon-new"></em><span className="txt">헤어에센스</span></a>
                                </li>
                            </ol>
                            <ol className="list" id="ol2">
                                <li>
                                    <a href="!#"><span className="num">6</span><em className="icon-new"></em><span className="txt">화장솜</span></a>
                                </li>
                                <li>
                                    <a href="!#"><span className="num">7</span><em className="icon-up"></em><span className="txt">선크림</span></a>
                                </li>
                                <li>
                                    <a href="!#"><span className="num">8</span><em className="icon-down"></em><span className="txt">#노세범</span></a>
                                </li>
                                <li>
                                    <a href="!#"><span className="num">9</span><em className="icon-new"></em><span className="txt">retinol</span></a>
                                </li>
                                <li>
                                    <a href="!#"><span className="num">10</span><em className="icon-new"></em><span className="txt">로션</span></a>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="keyword-quick">
                        <div className="swiper-container">
                            <ul className="swiper-wrap">
                                <li className="swiper-slide">
                                    <a href="!#">
                                        <img src="./images/index/104.jpg" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn-close" onClick={onClickClose}></button>
            </div>
        </div>
    )
}