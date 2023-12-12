import React from 'react';

export default function Sub9Foundation(){

    const [state,setState]=React.useState({
        tab:true,
    })



    const onClickTab1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            tab:true
        })
    }
    const onClickTab2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            tab:false
        })
    }

    return (
        <div id='sub9FD'>
                <div className="tab-box">
                    <button className={state.tab===true?'on':''} onClick={onClickTab1}>가맹점 개점절차 및 조건</button>           
                    <button className={!state.tab===true?'on':''} onClick={onClickTab2}>투자비용 및 수익구조 </button>           
                </div>
                {
                    state.tab&&
                <>
                    <div className="join-step-box">
                    <ul>
                        <li>
                            <em>1</em>
                            <div className="img-box">
                                <img src="./images/sub/sub9/icon_join_step1.png" alt="" />
                                <p>홈페이지 가맹점 개설문의</p>
                            </div>
                        </li>
                        <li>
                            <em>2</em>
                            <div className="img-box">
                                <img src="./images/sub/sub9/icon_join_step2.png" alt="" />
                                <p>지역별 담당자 메일 회신</p>
                            </div>
                        </li>
                        <li>
                            <em>3</em>
                            <div className="img-box">
                                <img src="./images/sub/sub9/icon_join_step3.png" alt="" />
                                <p>상권분석</p>
                            </div>
                        </li>
                        <li>
                            <em>4</em>
                            <div className="img-box">
                                <img src="./images/sub/sub9/icon_join_step4.png" alt="" />
                                <p>예비 경영주 면담</p>
                            </div>
                        </li>
                        <li>
                            <em>5</em>
                            <div className="img-box">
                                <img src="./images/sub/sub9/icon_join_step5.png" alt="" />
                                <p>매장 확보 및 실측</p>
                            </div>
                        </li>
                        <li>
                            <em>6</em>
                            <div className="img-box">
                                <img src="./images/sub/sub9/icon_join_step6.png" alt="" />
                                <p>정보공개서 발송 및 <br />가맹계약서 제공</p>
                            </div>
                        </li>
                        <li>
                            <em>7</em>
                            <div className="img-box">
                                <img src="./images/sub/sub9/icon_join_step7.png" alt="" />
                                <p>가맹비 입금 <br />및 신규점주 교육</p>
                            </div>
                        </li>
                        <li>
                            <em>8</em>
                            <div className="img-box">
                                <img src="./images/sub/sub9/icon_join_step8.png" alt="" />
                                <p>인테리어 공사</p>
                            </div>
                        </li>
                        <li>
                            <em>9</em>
                            <div className="img-box">
                                <img src="./images/sub/sub9/icon_join_step9.png" alt="" />
                                <p>개점 준비</p>
                            </div>
                        </li>
                        <li>
                            <em>10</em>
                            <div className="img-box">
                                <img src="./images/sub/sub9/icon_join_step10.png" alt="" />
                                <p>오픈</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="join-condition-box">
                    <h3>개점조건</h3>
                    <div className="content-box">
                        <div className="left">
                            <img src="./images/sub/sub9/img_shop.png" alt="" />
                        </div>
                        <div className="right">
                            <p>이니스프리 점포는 권장평수 <br />
                            <strong>49.6m²(15평), 전면4m</strong>이상 매장을 갖추어야 합니다.
							</p>
                            <span>매장 조건에 대한 자세한 상담은 본사와의 상담을 필요로 합니다.</span>
                            <span>역세권, 버스 정류장 및 횡단보도 인근 유통 인구 多발생지역 <br />대단위 APT의 주거 배후 두터운 지역</span>
                        </div>
                    </div>
                </div>
                </>
                }
                {
                    !state.tab&&
                    <>
                <div className="invest-box">
                    <h3>투자비용</h3>
                    <p>점포는 권장평수 49.6m²(15평), 전면 4m 이상 매장을 갖추어야 합니다. (매장 조건에 대한 자세한 상담은 본사와의 상담을 필요로 함)</p>
                    <table>
                        <thead>
                            <tr>
                                <th>구분</th>
                                <th>금액(부가세 별도)</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                                    <tr>
										<td>가맹비</td>
										<td>1,000 만원</td>
										<td>계약 종료 후 소멸</td>
									</tr>
                                    <tr>
										<td>인테리어</td>
										<td>평당 530 만원 내외</td>
										<td>일부 본사 분담, 냉/난방 및 경영주 선택에 따른 옵션 비용 별도</td>
									</tr>
                                    <tr>
										<td>초도물품</td>
										<td>3,500~4,000 만원</td>
										<td>-</td>
									</tr>
                                    <tr>
										<td>운영기기</td>
										<td>430 만원 내외</td>
										<td>POS, 카드단말, 뷰티톡, 재고스캐너, 태블릿</td>
									</tr>
                        </tbody>
                        <tfoot>
                                    <tr>
										<td>계</td>
										<td>약 11,430만원</td>
										<td>-</td>
									</tr>
                        </tfoot>
                    </table>
                    <div className="text-box">
                        <p>* 인테리어는 실측 후 정확한 금액 산출 가능</p>
                        <p>* 초도물품의 경우 현금 선수금 방식으로 별도 보증금 없음</p>
                    </div>
                </div>
                <div className="profit-box">
                    <h3>수익구조</h3>
                    <p>이니스프리 가맹점 운영에 따른 수익구조는 아래와 같습니다.</p>
                    <div className="content-box">
                        <div className="text-box">
                            <p> 매출이익 <br />(매출 - 매입원가)</p>
                            <p>임대료/인건비/<br />운영비</p>
                            <p>영업이익</p>
                        </div>
                    </div>
                </div>
                </>}
        </div>
    );
};
