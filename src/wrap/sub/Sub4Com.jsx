import React from 'react';
import './scss/sub4.scss'
import axios from 'axios';
import QrcodeCom from './QrcodeCom';
import {Link, Outlet, useLocation} from 'react-router-dom';

export default function Sub4Com(){

    const [state,setState]=React.useState({
        상품:[],
        배너:[],
        shareBox:false
        
    })

    React.useEffect(()=>{

        axios({
            url:'./data/sub/sub4.json',
            method:'GET'
        })
        .then((result)=>{ 
            setState({
                ...state,
                상품:result.data.product,
                배너:result.data.banner
            })
        })
        .catch((error)=>{
        });
    },[]);

    const onClickShareOpen=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            shareBox:true
        })
    }
    const onClickShareClose=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            shareBox:false
        })
    }

    return (
        <div id='sub4'>
            <QrcodeCom/>
            <div className="location">
                <div className="ineer-menu">
                    <div className="home"><a href="!#"></a></div>
                    <div className="navi">
                        <img src="./images/sub/sub1/arr_location_depth.png" alt="" />
                        <button>쇼케이스<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>
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
                <div className="title">
                    <h2>쇼케이스</h2>
                    <h3>돌아온 보습 레전드 <br />올리브 라인</h3>
                    <div className="sharing-box">
                        {   
                            !state.shareBox&&(
                            <div className="sharing-off">
                            <button className='share-open' onClick={onClickShareOpen}></button>
                        </div>
                            )
                        }
                        {
                            state.shareBox &&(
                            <div className="sharing-on">
                                <p>공유하기</p>
                                <div className="sharing-btn">
                                    <a href="!#" className='facebook'></a>
                                    <a href="!#" className='kakao'></a>
                                    <a href="!#" className='url'></a>
                                </div>
                                <button className='shale-close' onClick={onClickShareClose}></button>
                            </div>
                            )
                        }
                     </div>
                </div>
               
                <div className="content">
                    <div className="main-image">
                        <div className="img-gap">
                            <img src="./images/sub/sub4/img01.jpg" alt="" />
                        </div>
                    </div>
               
                    <div className="product-list">
                                    <div className="col-gap">
                                        <ul>
                                            {
                                            state.상품.map((item,idx)=>{
                                                return(
                                                    <li>
                                                        <div className="item">
                                                            <a href="!#">
                                                                <div className="img-box">
                                                                    <img src={`./images/sub/sub4/${item.이미지}`} alt="" />
                                                                    <div className="hover-img">
                                                                        <img src={`./images/sub/sub4/${item.호버이미지}`} alt="" />
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
                                                                <div className="hashtag">
                                                                <span>{item.해시태그1}</span>
                                                                <span>{item.해시태그2}</span>
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
                    </div>
        
                    <div className="banner-list">
                        <ul>
                            {
                                state.배너.map((item,idx)=>{
                                    return(
                                        <li>
                                            <a href="!#">
                                                <div className="banner-gap">    
                                                    <div className="banner-img">
                                                        <img src={`./images/sub/sub4/${item.이미지}`} alt="" />
                                                    </div>
                                                    <div className ="banner-text">
                                                        <p>{item.상단} <br /> {item.하단}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        )
                                    })
                                }    
                        </ul>
                                <div className="page-box">
                                    <button className='on'>1</button>
                                </div>
                    </div>
                   
                </div>
            </div>
           
        </div>
    );
};
