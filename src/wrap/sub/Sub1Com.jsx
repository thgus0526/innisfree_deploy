import React from 'react';
import './scss/sub1.scss'
import axios from 'axios';
import {Link, Outlet, useLocation} from 'react-router-dom';

export default function Sub1Com({viewProductMethod, path}){

    const [state,setState]=React.useState({
        cautionModal:false,
        cnt:0,
        프로모션:[],
        상품:[],
        상품2:[],
        상품3:[],
        상품4:[],
        상품5:[],
        tab:false,
        
    })

    React.useEffect(()=>{

        axios({
            url:'./data/sub/sub1.json',
            method:'GET'
        })
        .then((result)=>{ 
            setState({
                ...state,
                프로모션: result.data.promotion,
                상품: result.data.product,
                상품2: result.data.product2,
                상품3: result.data.product3,
                상품4: result.data.product4,
                상품5: result.data.product5,
            })
        })
        .catch((error)=>{
        });
    },[]);

    //유의사항 모달 클릭이벤트
    const onClickCautionModalOpen=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cautionModal:true
            
        })
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');
    }
    const onClickcautionModalClose=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cautionModal:false
        })
    }

    // 탭버튼  클릭 이벤트
    const onClickTab1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            tab:false,
            cnt:0
        })
    }
    const onClickTab2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            tab:true,
            cnt:0
        })
    }

    //페이지 클릭 이벤트

    const onClickpage1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:0
        })
    }
    const onClickpage2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:1
        })
    }
    const onClickpage3=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:2
        })
    }
    const onClickpage4=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:3
        })
    }
    const onClickpage5=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:4
        })
    }
    const onClickPrevBtn=(e)=>{
        e.preventDefault();
        if(state.cnt<0){
            setState({
                ...state,
                cnt:0
            })
        }
        else{
            setState({
                ...state,
                cnt:state.cnt-1
            })
        }
    }
    const onClickNextBtn=(e)=>{
        e.preventDefault();
        if(state.cnt>=4){
            setState({
                ...state,
                cnt:4
            })
        }
        else{
            setState({
                ...state,
                cnt:state.cnt+1
            })
        }
    }

    const onClickViewProduct=(e, item, route)=>{
        e.preventDefault();
        viewProductMethod(item, route, path);
    }

    return (
        <div id='sub1'>
                {state.cautionModal&&<div className='cautionModal'>
                    <div className="modal-box">
                            <h3>“아이라이너 & 립 앤 아이리무버” 기획전 제품 구매 시 유의사항</h3>
                            <div className="modal-text">
                                <p>“아이라이너 & 립 앤 아이리무버” 기획전 제품 구매 시 유의사항 <br />기간 : 11/20(월) - 11/30(목) 23:59:00까지</p>
                            </div>
                            <button className='modal-close' onClick={onClickcautionModalClose}></button>
                        </div>
                    </div>}
            <div className="location">
                <div className="ineer-menu">
                    <div className="home"><a href="!#"></a></div>
                    <div className="navi">
                        <img src="./images/sub/sub1/arr_location_depth.png" alt="" />
                        <button>특가<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>
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
                </div>
            </div>
            <div className="container">
                <h2>특가</h2>
                <div className="top-menu">
                    <div className="tab-btn-box">
                        <button className={state.tab===false?'on':''} onClick={onClickTab1}>진행중인 프로모션 전체</button>
                        <button className={state.tab===true?'on':''} onClick={onClickTab2}>아이라이너 & 립 앤 아이리무버</button>
                    </div>
                    <div className="text-box">
                        <h3>아이라이너 & 립 앤 아이리무버 <br />2개 이상 구매시 50%</h3>
                        <p>
                            아이라이너/립앤아이리무버 1개 구매시 30%, 2개 이상 구매시 50% 할인 <br />
                            (대상제품-파워프루프 펜 라이너, 파워프루프 브러시 라이너, 심플라벨 워터프루프 펜슬라이너, 애플씨드 립앤아이리무버) 
                        </p>
                        <button onClick={onClickCautionModalOpen}>유의사항</button>
                    </div>
                </div>
                <div className="content">
                    <div className="promotion-list">
                        <ul>
                            {state.프로모션.map((item,idx)=>{
                                return(
                                    <li key={item}>
                                    <div className="item">
                                        <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub1/promotion/')}>
                                            <div className="img-box">
                                                <img src={`./images/sub/sub1/promotion/${item.이미지}`} alt="" />
                                                <div className="hover-img">
                                                    <img src={`./images/sub/sub1/promotion/${item.호버이미지}`} alt="" />
                                                </div>
                                                <div className="hover-btn">
                                                    <button className='heartBtn'></button>
                                                    <button className='cartBtn'></button>
                                                    <button className='buyBtn'></button>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="info">
                                        <a href="!#">
                                            <div className="product-name">
                                                <strong>{item.베스트}</strong>{item.상품이름}
                                            </div>
                                            <div className="price">
                                                <strong>{Math.round(item.정가*(1-item.할인율)).toLocaleString('ko-KO')}</strong>
                                                <span>{`~${item.할인율*100}%`}</span>
                                                <p>{item.정가.toLocaleString('KO-ko')}</p>
                                            </div>
                                            <div className="star-grade">
                                                <i>★</i><span>{`${item.별점} (${item.리뷰수.toLocaleString('KO-ko')})`}</span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                )
                            })

                            }
                        </ul>   
                    </div>
                    {!state.tab &&(
                        <div className="product-list 1">
                        <div className="head">
                            <h3>특가 할인 찬스 / 사은품 증정 혜택</h3>
                        </div>
                        {state.cnt===0&&
                            <ul>
                        {
                        state.상품.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub1/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub1/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub1/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="hover-btn">
                                                <button className='heartBtn'></button>
                                                <button className='cartBtn'></button>
                                                <button className='buyBtn'></button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="info">
                                    <a href="!#">
                                        <div className="product-name">
                                            <strong>{item.베스트}</strong>{item.상품이름}
                                        </div>
                                        <div className="price">
                                            <strong>{Math.round(item.정가*(1-item.할인율)).toLocaleString('ko-KO')}</strong>
                                            <span>{`~${item.할인율*100}%`}</span>
                                            <p>{item.정가.toLocaleString('KO-ko')}</p>
                                        </div>
                                        <div className="present">
                                        <span>증정</span>
                                        </div>
                                        <div className="star-grade">
                                            <i>★</i><span>{`${item.별점} (${item.리뷰수.toLocaleString('KO-ko')})`}</span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            )
                        })
                           
                                }
                        </ul>}
                        {
                            state.cnt===1 &&
                            <ul>
                        {
                        state.상품2.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub1/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub1/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub1/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="hover-btn">
                                                <button className='heartBtn'></button>
                                                <button className='cartBtn'></button>
                                                <button className='buyBtn'></button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="info">
                                    <a href="!#">
                                        <div className="product-name">
                                            <strong>{item.베스트}</strong>{item.상품이름}
                                        </div>
                                        <div className="price">
                                            <strong>{Math.round(item.정가*(1-item.할인율)).toLocaleString('ko-KO')}</strong>
                                            <span>{`~${item.할인율*100}%`}</span>
                                            <p>{item.정가.toLocaleString('KO-ko')}</p>
                                        </div>
                                        <div className="present">
                                        <span>증정</span>
                                        </div>
                                        <div className="star-grade">
                                            <i>★</i><span>{`${item.별점} (${item.리뷰수.toLocaleString('KO-ko')})`}</span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            )
                            })
                        }
                        </ul> }       
                        {
                            state.cnt===2 &&
                            <ul>
                        {
                        state.상품3.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub1/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub1/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub1/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="hover-btn">
                                                <button className='heartBtn'></button>
                                                <button className='cartBtn'></button>
                                                <button className='buyBtn'></button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="info">
                                    <a href="!#">
                                        <div className="product-name">
                                            <strong>{item.베스트}</strong>{item.상품이름}
                                        </div>
                                        <div className="price">
                                            <strong>{Math.round(item.정가*(1-item.할인율)).toLocaleString('ko-KO')}</strong>
                                            <span>{`~${item.할인율*100}%`}</span>
                                            <p>{item.정가.toLocaleString('KO-ko')}</p>
                                        </div>
                                        <div className="present">
                                        <span>증정</span>
                                        </div>
                                        <div className="star-grade">
                                            <i>★</i><span>{`${item.별점} (${item.리뷰수.toLocaleString('KO-ko')})`}</span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            )
                            })
                        }
                        </ul> }       
                        {
                            state.cnt===3 &&
                            <ul>
                        {
                        state.상품4.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub1/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub1/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub1/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="hover-btn">
                                                <button className='heartBtn'></button>
                                                <button className='cartBtn'></button>
                                                <button className='buyBtn'></button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="info">
                                    <a href="!#">
                                        <div className="product-name">
                                            <strong>{item.베스트}</strong>{item.상품이름}
                                        </div>
                                        <div className="price">
                                            <strong>{Math.round(item.정가*(1-item.할인율)).toLocaleString('ko-KO')}</strong>
                                            <span>{`~${item.할인율*100}%`}</span>
                                            <p>{item.정가.toLocaleString('KO-ko')}</p>
                                        </div>
                                        <div className="present">
                                        <span>증정</span>
                                        </div>
                                        <div className="star-grade">
                                            <i>★</i><span>{`${item.별점} (${item.리뷰수.toLocaleString('KO-ko')})`}</span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            )
                            })
                        }
                        </ul> }       
                        {
                            state.cnt===4 &&
                            <ul>
                        {
                        state.상품5.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub1/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub1/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub1/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="hover-btn">
                                                <button className='heartBtn'></button>
                                                <button className='cartBtn'></button>
                                                <button className='buyBtn'></button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="info">
                                    <a href="!#">
                                        <div className="product-name">
                                            <strong>{item.베스트}</strong>{item.상품이름}
                                        </div>
                                        <div className="price">
                                            <strong>{Math.round(item.정가*(1-item.할인율)).toLocaleString('ko-KO')}</strong>
                                            <span>{`~${item.할인율*100}%`}</span>
                                            <p>{item.정가.toLocaleString('KO-ko')}</p>
                                        </div>
                                        <div className="present">
                                        <span>증정</span>
                                        </div>
                                        <div className="star-grade">
                                            <i>★</i><span>{`${item.별점} (${item.리뷰수.toLocaleString('KO-ko')})`}</span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            )
                            })
                        }
                        </ul> }       
                        </div>
                        )
                    }
                    {
                    state.tab &&(
                        <div className="product-list 2">
                        <div className="head">
                            <h3>아이라이너 & 립앱 아이리무버 특가 할인 찬스</h3>
                        </div>
                        {state.cnt===0&&
                            <ul>
                        {
                        state.상품.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub1/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub1/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub1/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="hover-btn">
                                                <button className='heartBtn'></button>
                                                <button className='cartBtn'></button>
                                                <button className='buyBtn'></button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="info">
                                    <a href="!#">
                                        <div className="product-name">
                                            <strong>{item.베스트}</strong>{item.상품이름}
                                        </div>
                                        <div className="price">
                                            <strong>{Math.round(item.정가*(1-item.할인율)).toLocaleString('ko-KO')}</strong>
                                            <span>{`~${item.할인율*100}%`}</span>
                                            <p>{item.정가.toLocaleString('KO-ko')}</p>
                                        </div>
                                        <div className="present">
                                        <span>증정</span>
                                        </div>
                                        <div className="star-grade">
                                            <i>★</i><span>{`${item.별점} (${item.리뷰수.toLocaleString('KO-ko')})`}</span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            )
                        })
                           
                                }
                        </ul>}
                        {
                            state.cnt===1 &&
                            <ul>
                        {
                        state.상품2.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub1/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub1/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub1/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="hover-btn">
                                                <button className='heartBtn'></button>
                                                <button className='cartBtn'></button>
                                                <button className='buyBtn'></button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="info">
                                    <a href="!#">
                                        <div className="product-name">
                                            <strong>{item.베스트}</strong>{item.상품이름}
                                        </div>
                                        <div className="price">
                                            <strong>{Math.round(item.정가*(1-item.할인율)).toLocaleString('ko-KO')}</strong>
                                            <span>{`~${item.할인율*100}%`}</span>
                                            <p>{item.정가.toLocaleString('KO-ko')}</p>
                                        </div>
                                        <div className="present">
                                        <span>증정</span>
                                        </div>
                                        <div className="star-grade">
                                            <i>★</i><span>{`${item.별점} (${item.리뷰수.toLocaleString('KO-ko')})`}</span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            )
                            })
                        }
                        </ul> }       
                        {
                            state.cnt===2 &&
                            <ul>
                        {
                        state.상품3.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub1/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub1/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub1/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="hover-btn">
                                                <button className='heartBtn'></button>
                                                <button className='cartBtn'></button>
                                                <button className='buyBtn'></button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="info">
                                    <a href="!#">
                                        <div className="product-name">
                                            <strong>{item.베스트}</strong>{item.상품이름}
                                        </div>
                                        <div className="price">
                                            <strong>{Math.round(item.정가*(1-item.할인율)).toLocaleString('ko-KO')}</strong>
                                            <span>{`~${item.할인율*100}%`}</span>
                                            <p>{item.정가.toLocaleString('KO-ko')}</p>
                                        </div>
                                        <div className="present">
                                        <span>증정</span>
                                        </div>
                                        <div className="star-grade">
                                            <i>★</i><span>{`${item.별점} (${item.리뷰수.toLocaleString('KO-ko')})`}</span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            )
                            })
                        }
                        </ul> }       
                        {
                            state.cnt===3 &&
                            <ul>
                        {
                        state.상품4.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub1/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub1/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub1/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="hover-btn">
                                                <button className='heartBtn'></button>
                                                <button className='cartBtn'></button>
                                                <button className='buyBtn'></button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="info">
                                    <a href="!#">
                                        <div className="product-name">
                                            <strong>{item.베스트}</strong>{item.상품이름}
                                        </div>
                                        <div className="price">
                                            <strong>{Math.round(item.정가*(1-item.할인율)).toLocaleString('ko-KO')}</strong>
                                            <span>{`~${item.할인율*100}%`}</span>
                                            <p>{item.정가.toLocaleString('KO-ko')}</p>
                                        </div>
                                        <div className="present">
                                        <span>증정</span>
                                        </div>
                                        <div className="star-grade">
                                            <i>★</i><span>{`${item.별점} (${item.리뷰수.toLocaleString('KO-ko')})`}</span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            )
                            })
                        }
                        </ul> }       
                        {
                            state.cnt===4 &&
                            <ul>
                        {
                        state.상품5.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub1/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub1/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub1/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="hover-btn">
                                                <button className='heartBtn'></button>
                                                <button className='cartBtn'></button>
                                                <button className='buyBtn'></button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="info">
                                    <a href="!#">
                                        <div className="product-name">
                                            <strong>{item.베스트}</strong>{item.상품이름}
                                        </div>
                                        <div className="price">
                                            <strong>{Math.round(item.정가*(1-item.할인율)).toLocaleString('ko-KO')}</strong>
                                            <span>{`~${item.할인율*100}%`}</span>
                                            <p>{item.정가.toLocaleString('KO-ko')}</p>
                                        </div>
                                        <div className="present">
                                        <span>증정</span>
                                        </div>
                                        <div className="star-grade">
                                            <i>★</i><span>{`${item.별점} (${item.리뷰수.toLocaleString('KO-ko')})`}</span>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            )
                            })
                        }
                        </ul> }       
                        
                        </div>
                        )
                    }
                    <div className="page-box">
                        <button onClick={onClickPrevBtn} className={state.cnt===0?'on':''}></button>
                        <button className={state.cnt===0?'on':''} onClick={onClickpage1}>1</button>
                        <button className={state.cnt===1?'on':''} onClick={onClickpage2}>2</button>
                        <button className={state.cnt===2?'on':''} onClick={onClickpage3}>3</button>
                        <button className={state.cnt===3?'on':''} onClick={onClickpage4}>4</button>
                        <button className={state.cnt===4?'on':''} onClick={onClickpage5}>5</button>
                        <button onClick={onClickNextBtn} className={state.cnt===4?'on':''}></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
