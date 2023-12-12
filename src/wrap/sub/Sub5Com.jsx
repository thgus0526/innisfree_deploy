import React from 'react';
import './scss/sub5.scss'
import axios from 'axios';
import {Link, Outlet, useLocation} from 'react-router-dom';
export default function Sub5Com(){
    const slideWrap=React.useRef();
    const[state,setState]=React.useState({
        cnt:0,
        이니슾라이브:[],
        라이브1:[],
        라이브2:[],
        라이브3:[]
    })

    React.useEffect(()=>{

        axios({
            url:'./data/sub/sub5.json',
            method:'GET'
        })
        .then((result)=>{ 
            setState({
                ...state,
                이니슾라이브:result.data.innisfreelive,
                라이브1:result.data.live1,
                라이브2:result.data.live2,
                라이브3:result.data.live3
            })
        })
        .catch((error)=>{
        });
    },[]);


    // 3. 섹션2 메인슬라이드 메서드(함수)
    const mainSlide=()=>{
        slideWrap.current.style.transition = `all 0.6s ease-in-out`;
        // slideWrap.current.style.left = `${-1068 * state.cnt}px`;
        slideWrap.current.style.transform = `translateX(${-1280*state.cnt}px)`;
    }

    // 4-1. 다음슬라이드 카운트 클릭이벤트
    const onClickNext=(e)=>{
        e.preventDefault();

        if(state.cnt>=4){
            setState({
                ...state,
                cnt: 4
            });
        }
        else {
            setState({
                ...state,
                cnt: state.cnt+1
            })
        }      
    }

    // 4-2. 이전슬라이드 카운트 클릭이벤트
    const onClickPrev=(e)=>{
        e.preventDefault();

        if(state.cnt<=0){
            setState({
                ...state,
                cnt: 0
            });
        }
        else{
            setState({
                ...state,
                cnt: state.cnt-1
            })
        }
       
    }

    // 5. 유즈이펙트
    React.useEffect(()=>{        
        mainSlide(); // 애니메이션 구현  
    },[state.cnt]);  // 카운트 변수 변경되면 동작
    
    const onMouseUpSlide=(e)=>{

    }
    const onMouseDownSlide=(e)=>{

    }
    return (
        <div id='sub5'>
             <div className="location">
                <div className="ineer-menu">
                    <div className="home"><a href="!#"></a></div>
                    <div className="navi">
                        <img src="./images/sub/sub1/arr_location_depth.png" alt="" />
                        <button>라이브<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>
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
                    <h2>라이브</h2>
                </div>
                <div className="content">
                    <div className="live">
                        <div className="img-title">
                            <h3></h3>
                        </div>
                        <p>
			                멤버십/빅세일, 신제품 등 이니스프리의 소식을 <br />
                            가장 먼저 좋은 구성으로 라이브에서 만나보세요! <br />
                            라이브 단독 경품과 혜택까지!		                
                        </p>
                        <div className="img-box">
                            <div className="img-gap">
                                <img src="./images/sub/sub5/bg_live_mockup (1).png" alt="" />
                            </div>
                        </div>
                        <div className="live-alarm">
                            <p>이니라이브 알림 신청하고 라이브 혜택 받기</p>
                            <button>알림 받기</button>
                        </div>
                        <div className="text-box">
                            <h4>이니슾라이브</h4>
                            <span>
                            FUN한 라이브! 이니슾라이브에서 만나보세요. <br />
                            이니슾라이브만의 특별한 쇼핑 혜택에 FUN한 콘텐츠까지! <br />
                            <br />
                            이니슾라이브는 매 월 여러분들을 찾아갑니다!
                            </span>
                        </div>
                    </div>
                    <div className="ininsfreelive-replay">
                        <h3>이니슾라이브 다시보기</h3>
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide">
                                        {
                                            state.이니슾라이브.map((item,idx)=>{
                                                return(
                                                    <div className="item">
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={`./images/sub/sub5/${item.이미지}`} alt="" />
                                                            <div className="notice">
                                                                <span className='date'><i></i>{item.날짜}</span>
                                                                <span className='view'>{item.시청수.toLocaleString('KO-ko')}<i></i></span>
                                                            </div>
                                                                <a href="!#">
                                                                    <div className="prd-img">
                                                                        <img src={`./images/sub/sub5/${item.제품이미지}`} alt="" />
                                                                    </div>
                                                                    <div className="prd-name">{item.제품이름}</div>
                                                                </a>
                                                            
                                                        </div>
                                                        <div className="info-box">
                                                            <p>{item.상단} <br /> {item.하단}</p>
                                                            <a href="!#">당첨자 발표</a>
                                                        </div>
                                                    </a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="live-replay">
                        <h3>라이브 다시보기</h3>
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap" ref={slideWrap}>
                                    <li className="slide" onMouseUp={onMouseUpSlide} onMouseDown={onMouseDownSlide}>
                                        {
                                            state.라이브1.map((item,idx)=>{
                                                return(
                                                    <div className="item">
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={`./images/sub/sub5/${item.이미지}`} alt="" />
                                                            <div className="notice">
                                                                <span className='date'><i></i>{item.날짜}</span>
                                                                <span className='view'>{item.시청수.toLocaleString('KO-ko')}<i></i></span>
                                                            </div>
                                                                <a href="!#">
                                                                    <div className="prd-img">
                                                                        <img src={`./images/sub/sub5/${item.제품이미지}`} alt="" />
                                                                    </div>
                                                                    <div className="prd-name">{item.제품이름}</div>
                                                                </a>
                                                            
                                                        </div>
                                                        <div className="info-box">
                                                            <p>{item.상단} <br /> {item.하단}</p>
                                                            <a href="!#">당첨자 발표</a>
                                                        </div>
                                                    </a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </li>
                                    <li className="slide" onMouseUp={onMouseUpSlide} onMouseDown={onMouseDownSlide}>
                                        {
                                            state.라이브2.map((item,idx)=>{
                                                return(
                                                    <div className="item">
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={`./images/sub/sub5/${item.이미지}`} alt="" />
                                                            <div className="notice">
                                                                <span className='date'><i></i>{item.날짜}</span>
                                                                <span className='view'>{item.시청수.toLocaleString('KO-ko')}<i></i></span>
                                                            </div>
                                                                <a href="!#">
                                                                    <div className="prd-img">
                                                                        <img src={`./images/sub/sub5/${item.제품이미지}`} alt="" />
                                                                    </div>
                                                                    <div className="prd-name">{item.제품이름}</div>
                                                                </a>
                                                            
                                                        </div>
                                                        <div className="info-box">
                                                            <p>{item.상단} <br /> {item.하단}</p>
                                                            <a href="!#">당첨자 발표</a>
                                                        </div>
                                                    </a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </li>
                                    <li className="slide" onMouseUp={onMouseUpSlide} onMouseDown={onMouseDownSlide}>
                                        {
                                            state.라이브3.map((item,idx)=>{
                                                return(
                                                    <div className="item">
                                                    <a href="!#">
                                                        <div className="img-box">
                                                            <img src={`./images/sub/sub5/${item.이미지}`} alt="" />
                                                            <div className="notice">
                                                                <span className='date'><i></i>{item.날짜}</span>
                                                                <span className='view'>{item.시청수.toLocaleString('KO-ko')}<i></i></span>
                                                            </div>
                                                                <a href="!#">
                                                                    <div className="prd-img">
                                                                        <img src={`./images/sub/sub5/${item.제품이미지}`} alt="" />
                                                                    </div>
                                                                    <div className="prd-name">{item.제품이름}</div>
                                                                </a>
                                                            
                                                        </div>
                                                        <div className="info-box">
                                                            <p>{item.상단} <br /> {item.하단}</p>
                                                            <a href="!#">당첨자 발표</a>
                                                        </div>
                                                    </a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </li>
                             
                                   
                                </ul>
                            </div>
                        <div className="slide-btn-box">
                        <button className='prevBtn' onClick={onClickPrev}></button>
                        <button className='nextBtn' onClick={onClickNext}></button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};
