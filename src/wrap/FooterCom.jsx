import React from "react";
import './scss/footer.scss';

export default function FooterCom () {
    return (
        <div id="footer">
            <div className="container">
                <div className="menu-wrap">
                    <div className="menu">
                        <nav role="navigation">
                            <a href="!#">서비스 이용약관</a>
                            <a href="!#">
                                <strong>개인정보처리방침</strong>
                            </a>
                            <a href="!#">영상정보처리기기 운영/관리 방침</a>
                            <a href="!#">위치기반서비스 이용약관</a>
                            <a href="!#">공지사항</a>
                            <a href="!#">임직원서비스</a>
                        </nav>
                        <div className="footer-sns">
                            <span className="youtube">
                                <a href="!#"></a>
                            </span>
                            <span className="insta">
                                <a href="!#"></a>
                            </span>
                            <span className="facebook">
                                <a href="!#"></a>
                            </span>
                            <span className="twitter">
                                <a href="!#"></a>
                            </span>
                            <span className="btn-app">
                                <a href="!#"></a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="footer-info">
                    <div className="left">
                        <p className="inner"></p>
                        <p>
                            <span>(주)이니스프리 서울특별시 용산구 한강대로 100(한강로2가) 7층 이니스프리</span>
                            <span className="non">대표이사 최민정</span>
                        </p>
                        <p>
                            <span>사업자 등록번호 106-86-68127</span>
                            <span>통신판매신고번호 2018-서울용산-0014</span>
                            <span>제품 문의 : 080-380-0114</span>
                            <span className="non">FAX 02-6040-7108</span>
                        </p>
                        <p>
                            <span>이메일 주소 innisfree@innisfree.com</span>
                            <span>비즈니스제휴/입점문의 partner.biz@innisfree.com</span>
                        </p>
                        <p>
                            <span>이메일 주소 무단 수집 거부</span>
                            <span>개인정보 보호책임자 정구화</span>
                            <span>호스팅 서비스 제공자 ㈜이니스프리</span>
                        </p>
                        <div className="lg-escrow">
                            <strong className="tit">㈜토스페이먼츠의 에스크로 서비스 가입</strong>
				            저희 쇼핑몰은 고객님의 안전한 거래를 위해 무통장입금 거래에 대해 구매안전서비스를 적용하고 있습니다. <br />
                            <button type="button">토스페이먼츠 구매안전 서비스 가입확인</button>
                        </div>
                        <p className="copy-right">Copyright © 2023 Innisfree. All Rights Reserved.</p>
                        <p className="awards">
                            스마트앱어워드 2022 <br />
                            브랜드부문 통합대상
                        </p>
                    </div>
                    <div className="right">
                        <dl>
                            <dt>고객 서비스 센터 이용안내</dt>
                            <dd><strong>080-380-0114</strong> (수신자 요금 부담)</dd>
                            <dd>
                                운영시간 AM 09:00 ~ PM 18:00 (주말 및 공휴일 휴무) <br />
                                점심시간 PM 12:00 ~ PM 13:00
                            </dd>
                            <dd>
                                <a href="!#">1:1상담작성 </a>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}