import React from "react";
import './scss/section5.scss';

export default function Section5Com () {
    return (
        <div id="section5">
            <div className="container">
                <div className="animation">
                    <span>THE NEW ISLE</span>
                    <span>THE NEW ISLE</span>
                    <span>THE NEW ISLE</span>
                </div>
                <div className="content">
                    <div className="h-group">
                        <h2>놓치면 안될 쇼핑 혜택</h2>
                        <button type="button" className="btn-arr">더보기</button>
                    </div>
                    <div className="slide-view">
                        <ul className="slide-wrap">
                            <li className="slide">
                                <div className="item">
                                    <a href="!#">
                                        <span className="sticker">제휴혜택</span>
                                        <div className="event-img">
                                            <img src="./images/index/3257_0.jpg" alt="" />
                                        </div>
                                        <div className="cnt-area">
                                            <div className="date">23.11.13(월)  ~ 23.11.30(목) </div>
                                            <div className="name">KB페이 ~8천원 혜택 누구나 5천원 캐시백 첫구매 3천원 혜택</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="!#">
                                        <span className="sticker">제휴혜택</span>
                                        <div className="event-img">
                                            <img src="./images/index/3210_0.jpg" alt="" />
                                        </div>
                                        <div className="cnt-area">
                                            <div className="date">23.11.20(월)  ~ 23.11.30(목) </div>
                                            <div className="name">잡티와 필링을 한 번에 비타C 잡티 토닝 세럼 짝꿍템 증정 + 25%</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="!#">
                                        <span className="sticker">제휴혜택</span>
                                        <div className="event-img">
                                            <img src="./images/index/3217_0.jpg" alt="" />
                                        </div>
                                        <div className="cnt-area">
                                            <div className="date">23.11.20(월)  ~ 23.11.30(목) </div>
                                            <div className="name">블랙티 앰플 최대 30% 할인 + 증정 혜택까지</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="!#">
                                        <span className="sticker">제휴혜택</span>
                                        <div className="event-img">
                                            <img src="./images/index/3209_0.jpg" alt="" />
                                        </div>
                                        <div className="cnt-area">
                                            <div className="date">23.11.20(월)  ~ 23.11.30(목) </div>
                                            <div className="name">수분 급속 충전! 그린티 씨드 세럼 특가+증정 혜택</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="!#">
                                        <span className="sticker">제휴혜택</span>
                                        <div className="event-img">
                                            <img src="./images/index/3266_0.jpg" alt="" />
                                        </div>
                                        <div className="cnt-area">
                                            <div className="date">23.11.20(월)  ~ 23.11.24(금) </div>
                                            <div className="name">아니!? 올리브 라인이 돌아왔다고!!?? 지금 바로 보러가기</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="!#">
                                        <span className="sticker">제휴혜택</span>
                                        <div className="event-img">
                                            <img src="./images/index/3186_0.jpg" alt="" />
                                        </div>
                                        <div className="cnt-area">
                                            <div className="date">23.11.20(월)  ~ 23.11.30(목) </div>
                                            <div className="name">나이스웨더 백 세트 +앰플+크림+폼 증정 +2,000P 추가적립</div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li className="slide">
                                <div className="item">
                                    <a href="!#">
                                        <span className="sticker">제휴혜택</span>
                                        <div className="event-img">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="cnt-area">
                                            <div className="date">23.11.20(월)  ~ 23.11.24(금) </div>
                                            <div className="name">현대카드로 결제하고 M포인트 50% 사용하세요!</div>
                                        </div>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="page-nation">
                        <span><em className="current">1</em>/<em>2</em></span>
                    </div>
                    <div className="slide-control">
                        <button type="button" className="btn-prev" disabled></button>
                        <button type="button" className="btn-next"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}