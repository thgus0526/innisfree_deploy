import React from 'react';
import './scss/sub9.scss'
import Sub9FAQCom from './Sub9FAQCom';
import Sub9AnnouncementCom from './Sub9AnnouncementCom';
import Sub9NoticeCom from './Sub9NoticeCom';
import Sub9PersonalCounselCom from './Sub9PersonalCounselCom';
import Sub9FoundationCom from './Sub9FoundationCom';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Sub9Com(){

    const [state,setState]=React.useState({
        tab1:true,
        tab2:false,
        tab3:false,
        tab4:false,
        tab5:false,
        tab6:false,
        공지사항: []
    })

    //탭버튼 클릭이벤트
    const onClickCS=()=>{
        setState({
        tab1:true,
        tab2:false,
        tab3:false,
        tab4:false,
        tab5:false,
        tab6:false
        })
    }
    const onClickFAQ=(e)=>{
        e.preventDefault();
        setState({
        tab1:false,
        tab2:true,
        tab3:false,
        tab4:false,
        tab5:false,
        tab6:false
        })
    }
    const onClickNotice=(e)=>{
        e.preventDefault();
        setState({
        tab1:false,
        tab2:false,
        tab3:true,
        tab4:false,
        tab5:false,
        tab6:false
        })
    }
    const onClickPC=(e)=>{
        e.preventDefault();
        setState({
        tab1:false,
        tab2:false,
        tab3:false,
        tab4:true,
        tab5:false,
        tab6:false
        })
    }
    const onClickFD=(e)=>{
        e.preventDefault();
        setState({
        tab1:false,
        tab2:false,
        tab3:false,
        tab4:false,
        tab5:true,
        tab6:false
        })
    }
    const onClickAN=(e)=>{
        e.preventDefault();
        setState({
        tab1:false,
        tab2:false,
        tab3:false,
        tab4:false,
        tab5:false,
        tab6:true
        })
    }


    React.useEffect(()=>{
        axios({
            url:'https://sieun.co.kr/innisfree/innisfree_notice_table_select.php',
            method:'GET'
        })
        .then((res)=>{
            console.log( 'AXIOS 성공!' );
            console.log(res.data);
            if(res.status===200){
                setState({
                    ...state,
                    공지사항: res.data,                 
                })
            }
            
        })
        .catch((err)=>{
            console.log( 'AXIOS 실패!' );
            console.log( err );
        });
        return;
    },[]);



    return (
        <div id='sub9'>
             <div className="location">
                <div className="ineer-menu">
                    <div className="home"><a href="!#"></a></div>
                    <div className="navi">
                        <img src="./images/sub/sub1/arr_location_depth.png" alt="" />
                        <button>고객센터<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>
                        <ul>
                        <li><a href="!#">카테고리</a></li>
                            <li><Link to='/sub1'>특가</Link></li>
                            <li><Link to='/sub2'>이벤트</Link></li>
                            <li><Link to='/sub3'>베스트</Link></li>
                            <li><Link to='/sub5'>라이브</Link></li>
                            <li><Link to='/sub6'>FOR ME</Link></li>
                            <li><Link to='/sub7'>ABOUT</Link></li>
                            <li><Link to='/sub9'>고객센터</Link></li>
                            <li><a href="!#">마이페이지</a></li>
                        </ul>
                    </div>
                    <div className="sub-navi">
                        <img src="./images/sub/sub1/arr_location_depth.png" alt="" />
                        {state.tab1&&<button>고객센터<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>}
                        {state.tab2&&<button>FAQ<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>}
                        {state.tab3&&<button>공지사항<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>}
                        {state.tab4&&<button>1:1상담<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>}
                        {state.tab5&&<button>창업안내<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>}
                        {state.tab6&&<button>전자공고<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>}
                        <ul>
                            <li><a href="!#" onClick={onClickFAQ}>FAQ</a></li>
                            <li><a href="!#" onClick={onClickNotice}>공지사항</a></li>
                            <li><a href="!#" onClick={onClickPC}>1:1상담</a></li>
                            <li><a href="!#" onClick={onClickFD}>창업안내</a></li>
                            <li><a href="!#" onClick={onClickAN}>전자공고</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="title">
                <h2>고객센터</h2>
                </div>
                <div className="top-menu">
                    <div className="tab-btn-box">
                        <button onClick={onClickFAQ} className={state.tab2?'on':''}>FAQ</button>
                        <button onClick={onClickNotice} className={state.tab3?'on':''}>공지사항</button>
                        <button onClick={onClickPC} className={state.tab4?'on':''}>1:1상담</button>
                        <button onClick={onClickFD} className={state.tab5?'on':''}>창업안내</button>
                        <button onClick={onClickAN} className={state.tab6?'on':''}>전자공고</button>
                    </div>
                </div>
                <div className="search-box">
                    <div className="input-box">
                        <input type="text" id='Qsearch' name='Qsearch' placeholder='궁금하신 내용을 입력해 주세요.'/>
                        <button>검색</button>
                    </div>
                    <p>찾으시는 질문이 없나요? 이니스프리 상담원에게 문의해 주세요. <a href="!#">1:1 상담하기 <img src="./images/sub/sub9/arr_r16_black.png" alt="" /></a></p>
                </div>
                {
                    state.tab1&&
                    <>
                        <div className="top-box">
                        <div className="title-box">
                            <h4>자주하는 질문</h4>
                            <a href="!#" onClick={onClickFAQ}>자세히보기<img src="./images/sub/sub9/arr_r16_black (1).png" alt="" /></a>
                        </div>
                        <div className="list-box">
                            <ul>
                                <li>
                                    <div className="text-box">
                                        <em>1</em>
                                        <span>주문건에 대해 결제 금액 영수증을 출력하고 싶어요.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-box">
                                        <em>2</em>
                                        <span>오프라인 매장 구매 내용을 확인하고 싶어요.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-box">
                                        <em>3</em>
                                        <span>교환은 어떻게 하나요?</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-box">
                                        <em>4</em>
                                        <span>마이샵 변경은 어떻게 하나요?</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-box">
                                        <em>5</em>
                                        <span>마이샵 등록은 어떻게 하나요?</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-box">
                                        <em>6</em>
                                        <span>온라인(공식몰)에서도 그린티클럽키트를 신청할 수 있나요?</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-box">
                                        <em>7</em>
                                        <span>묶음배송 되나요?</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-box">
                                        <em>8</em>
                                        <span>면세점, 오픈마켓에서 구매한 것도 회원등급에 반영되나요?</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-box">
                                        <em>9</em>
                                        <span>생일 쿠폰이 왜 발행되지 않나요?</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-box">
                                        <em>10</em>
                                        <span>원클릭 결제 카드 삭제하고 싶어요</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="middle-box">
                            <ul>
                                <li>
                                    <h5>이니스프리 <br />온라인 상담실</h5>
                                    <div className="text-box">
                                        <p>상담실 운영시간</p>
                                        <span>월~금요일 AM 9:00 ~ PM 6:00</span>
                                    </div>
                                </li>
                                <li>
                                    <a href="!#">
                                        <p>1:1 문의작성 <img src="./images/sub/sub9/arr_r16_black (1).png" alt="" /></p>
                                        <span>쉽고 간편하게 문의하세요.</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <p>답변확인<img src="./images/sub/sub9/arr_r16_black (1).png" alt="" /></p>
                                        <span>지금 바로 확인하세요.</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="bottom-box">
                            <div className="left">
                                <div className="title-box">
                                <h4>공지사항</h4>
                                <a href="!#" onClick={onClickNotice}>전체보기<img src="./images/sub/sub9/arr_r16_black (1).png" alt="" /></a>
                                </div>
                                <div className="text-box">
                                    <ul>
                                                {
                                                state.공지사항.map((item,idx)=>{
                                                    return(
                                                        <li key={item.번호}>
                                                            <a href="!#">
                                                                <p>{item.제목}</p>
                                                                <span>{`${new Date(item.작성일).getFullYear()}-${new Date(item.작성일).getMonth()+1}-${new Date(item.작성일).getDate()}`}</span>
                                                            </a>
                                                        </li>
                                                    )
                                                 })
                                                }

                                    </ul>
                                </div>
                            </div>
                            <div className="right">
                                <h4>서비스안내</h4>
                                <ul>
                                    <li>
                                        <a href="!#">
                                            <img src="./images/sub/sub9/icon_service_store.png" alt="" />
                                            <div className="text-box">
                                                <p>매장안내</p>
                                                <span>자주가는 매장을 확인하시고 <br />특별한 혜택 받아가세요.</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="!#">
                                            <img src="./images/sub/sub9/icon_service_member.png" alt="" />
                                            <div className="text-box">
                                                <p>멤버십 소개</p>
                                                <span>이니스프리 멤버십 등급과 <br />등급별 혜택들을 확인해 보세요.</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                }
                {state.tab2&&<Sub9FAQCom/>}
                {state.tab4&&<Sub9PersonalCounselCom/>}
                {state.tab5&&<Sub9FoundationCom/>}
                {state.tab6&&<Sub9AnnouncementCom/>}
            </div>                
                {state.tab3&&<Sub9NoticeCom/>}
        </div>
    );
};
