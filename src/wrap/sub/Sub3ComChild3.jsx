import React from 'react';
import axios from 'axios';

export default function Sub3ComChild2({btn1,btn2,btn3,btn4,btn5,btn6,btn7,viewProductMethod,path}){

    const slideWrap=React.useRef();
    const slideBar=React.useRef();

    const[state,setState]=React.useState({
        cnt:0,
        이벤트슬라이드:[],
        탭3버튼1제품1:[],
        탭3버튼1제품2:[],
        탭3버튼2제품1:[],
        탭3버튼2제품2:[],
        탭3버튼3제품1:[],
        탭3버튼4제품1:[],
        탭3버튼5제품1:[],
        탭3버튼6제품1:[],
        탭3버튼7제품1:[],
    })

    React.useEffect(()=>{

        axios({
            url:'./data/sub/sub3Tab3.json',
            method:'GET'
        })
        .then((result)=>{ 
            setState({
                ...state,
                이벤트슬라이드:result.data.eventSlide,
                탭3버튼1제품1:result.data.monthlyBest1top,
                탭3버튼1제품2:result.data.monthlyBest1bottom,
                탭3버튼2제품1:result.data.monthlyBest2top,
                탭3버튼2제품2:result.data.monthlyBest2bottom,
                탭3버튼3제품1:result.data.monthlyBest3top,
                탭3버튼4제품1:result.data.monthlyBest4top,
                탭3버튼5제품1:result.data.monthlyBest5top,
                탭3버튼6제품1:result.data.monthlyBest6top,
                탭3버튼7제품1:result.data.monthlyBest7top,
            })
        })
        .catch((error)=>{
        });
    },[]);

         // 메인슬라이드 메서드(함수)
     const mainSlide=()=>{
        slideWrap.current.style.transition = `all 0.6s ease-in-out`;
        slideWrap.current.style.transform = `translateX(${-433*state.cnt}px)`;
        slideBar.current.style.transform=`scaleX(${0.11111*state.cnt})`; 
        slideBar.current.style.transition = `all 0.6s ease-in-out`;
    }
         // 다음슬라이드 카운트 클릭이벤트
    const onClickNext=(e)=>{
        e.preventDefault();
        if(state.cnt>=9){
            setState({
                ...state,
                cnt:0
            })
        }
        else{
            setState({
                ...state,
                cnt:state.cnt+1
            })     
        }
    }

    // 이전슬라이드 카운트 클릭이벤트
    const onClickPrev=(e)=>{
        e.preventDefault();
        if(state.cnt<1){
            setState({
                ...state,
                cnt:8
            })
        }
        else{
            setState({
                ...state,
                cnt:state.cnt-1
            })    
        }
    }

    React.useEffect(()=>{        
        mainSlide();
    },[state.cnt]);

    const onClickViewProduct=(e, item, route)=>{
        e.preventDefault();
        viewProductMethod(item, route, path);
    }

    return (
        <>
        {
            btn1&&
            <div className="content tab1btn1">
            <div className="product-list">
                    <ul>
                        {
                        state.탭3버튼1제품1.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub3/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub3/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub3/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="rank">
                                                <span>{item.랭크}</span>
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
                </ul>

            </div>
            <div className="event-slide">
                <div className="slide-container">
                    <div className="slide-view">
                        <ul ref={slideWrap}>
                    {state.이벤트슬라이드.map((item,idx)=>{
                            return(
                                <li key={idx}>
                                    <div className="item">
                                        <a href="!#">
                                            <span>{item.이벤트구분}</span>
                                            <div className='img-box'>
                                                <img src={`./images/sub/sub2/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="text-box">
                                                <p>{item.날짜}</p>
                                                <span>{item.상단} {item.하단}</span>               
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
               
                <div className="button-box">
                    <button className='prevBtn' onClick={onClickPrev}></button>
                    <button className='nextBtn' onClick={onClickNext}></button>
                </div>
                <div className="slide-bar">
                    <span ref={slideBar}></span>
                </div>
            </div>
            <div className="product-list">
                    <ul>
                        {
                        state.탭3버튼1제품2.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub3/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub3/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub3/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="rank">
                                                <span>{item.랭크}</span>
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
                </ul>

            </div>
        </div>
        }
        {
            btn2&&
            <div className="content tab1btn2">
            <div className="product-list">
                    <ul>
                        {
                        state.탭3버튼2제품1.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub3/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub3/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub3/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="rank">
                                                <span>{item.랭크}</span>
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
                </ul>

            </div>
            <div className="event-slide">
                <div className="slide-container">
                    <div className="slide-view">
                        <ul ref={slideWrap}>
                    {state.이벤트슬라이드.map((item,idx)=>{
                            return(
                                <li key={idx}>
                                    <div className="item">
                                        <a href="!#">
                                            <span>{item.이벤트구분}</span>
                                            <div className='img-box'>
                                                <img src={`./images/sub/sub2/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="text-box">
                                                <p>{item.날짜}</p>
                                                <span>{item.상단} {item.하단}</span>               
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
               
                <div className="button-box">
                    <button className='prevBtn' onClick={onClickPrev}></button>
                    <button className='nextBtn' onClick={onClickNext}></button>
                </div>
                <div className="slide-bar">
                    <span ref={slideBar}></span>
                </div>
            </div>
            <div className="product-list">
                    <ul>
                        {
                        state.탭3버튼2제품2.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub3/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub3/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub3/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="rank">
                                                <span>{item.랭크}</span>
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
                </ul>

            </div>
        </div>
        }
        {
           btn3&&
            <div className="content tab1btn3">
            <div className="product-list">
                    <ul>
                        {
                        state.탭3버튼3제품1.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub3/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub3/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub3/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="rank">
                                                <span>{item.랭크}</span>
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
                </ul>

            </div>
            <div className="event-slide">
                <div className="slide-container">
                    <div className="slide-view">
                        <ul ref={slideWrap}>
                    {state.이벤트슬라이드.map((item,idx)=>{
                            return(
                                <li key={idx}>
                                    <div className="item">
                                        <a href="!#">
                                            <span>{item.이벤트구분}</span>
                                            <div className='img-box'>
                                                <img src={`./images/sub/sub2/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="text-box">
                                                <p>{item.날짜}</p>
                                                <span>{item.상단} {item.하단}</span>               
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
               
                <div className="button-box">
                    <button className='prevBtn' onClick={onClickPrev}></button>
                    <button className='nextBtn' onClick={onClickNext}></button>
                </div>
                <div className="slide-bar">
                    <span ref={slideBar}></span>
                </div>
            </div>
        </div>
        }
        {
            btn4&&
            <div className="content tab1btn4">
            <div className="product-list">
                    <ul>
                        {
                        state.탭3버튼4제품1.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub3/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub3/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub3/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="rank">
                                                <span>{item.랭크}</span>
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
                </ul>

            </div>
            <div className="event-slide">
                <div className="slide-container">
                    <div className="slide-view">
                        <ul ref={slideWrap}>
                    {state.이벤트슬라이드.map((item,idx)=>{
                            return(
                                <li key={idx}>
                                    <div className="item">
                                        <a href="!#">
                                            <span>{item.이벤트구분}</span>
                                            <div className='img-box'>
                                                <img src={`./images/sub/sub2/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="text-box">
                                                <p>{item.날짜}</p>
                                                <span>{item.상단} {item.하단}</span>               
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
               
                <div className="button-box">
                    <button className='prevBtn' onClick={onClickPrev}></button>
                    <button className='nextBtn' onClick={onClickNext}></button>
                </div>
                <div className="slide-bar">
                    <span ref={slideBar}></span>
                </div>
            </div>
        </div>
        }
        {
            btn5&&
            <div className="content tab1btn5">
            <div className="product-list">
                    <ul>
                        {
                        state.탭3버튼5제품1.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub3/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub3/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub3/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="rank">
                                                <span>{item.랭크}</span>
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
                </ul>

            </div>
            <div className="event-slide">
                <div className="slide-container">
                    <div className="slide-view">
                        <ul ref={slideWrap}>
                    {state.이벤트슬라이드.map((item,idx)=>{
                            return(
                                <li key={idx}>
                                    <div className="item">
                                        <a href="!#">
                                            <span>{item.이벤트구분}</span>
                                            <div className='img-box'>
                                                <img src={`./images/sub/sub2/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="text-box">
                                                <p>{item.날짜}</p>
                                                <span>{item.상단} {item.하단}</span>               
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
               
                <div className="button-box">
                    <button className='prevBtn' onClick={onClickPrev}></button>
                    <button className='nextBtn' onClick={onClickNext}></button>
                </div>
                <div className="slide-bar">
                    <span ref={slideBar}></span>
                </div>
            </div>
        </div>
        }
        {
            btn6&&
            <div className="content tab1btn6">
             <div className="product-list">
                    <ul>
                        {
                        state.탭3버튼6제품1.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub3/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub3/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub3/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="rank">
                                                <span>{item.랭크}</span>
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
                </ul>

            </div>    
            <div className="event-slide">
                <div className="slide-container">
                    <div className="slide-view">
                        <ul ref={slideWrap}>
                    {state.이벤트슬라이드.map((item,idx)=>{
                            return(
                                <li key={idx}>
                                    <div className="item">
                                        <a href="!#">
                                            <span>{item.이벤트구분}</span>
                                            <div className='img-box'>
                                                <img src={`./images/sub/sub2/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="text-box">
                                                <p>{item.날짜}</p>
                                                <span>{item.상단} {item.하단}</span>               
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
               
                <div className="button-box">
                    <button className='prevBtn' onClick={onClickPrev}></button>
                    <button className='nextBtn' onClick={onClickNext}></button>
                </div>
                <div className="slide-bar">
                    <span ref={slideBar}></span>
                </div>
            </div>
        </div>
        }
        {
            btn7&&
            <div className="content tab1btn7">
            <div className="product-list">
                    <ul>
                        {
                        state.탭3버튼7제품1.map((item,idx)=>{
                            return(
                                <li key={item}>
                                <div className="item">
                                    <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub3/')}>
                                        <div className="img-box">
                                            <img src={`./images/sub/sub3/${item.이미지}`} alt="" />
                                            <div className="hover-img">
                                                <img src={`./images/sub/sub3/${item.호버이미지}`} alt="" />
                                            </div>
                                            <div className="rank">
                                                <span>{item.랭크}</span>
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
                </ul>

            </div>
            <div className="event-slide">
                <div className="slide-container">
                    <div className="slide-view">
                        <ul ref={slideWrap}>
                    {state.이벤트슬라이드.map((item,idx)=>{
                            return(
                                <li key={idx}>
                                    <div className="item">
                                        <a href="!#">
                                            <span>{item.이벤트구분}</span>
                                            <div className='img-box'>
                                                <img src={`./images/sub/sub2/${item.이미지}`} alt="" />
                                            </div>
                                            <div className="text-box">
                                                <p>{item.날짜}</p>
                                                <span>{item.상단} {item.하단}</span>               
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
               
                <div className="button-box">
                    <button className='prevBtn' onClick={onClickPrev}></button>
                    <button className='nextBtn' onClick={onClickNext}></button>
                </div>
                <div className="slide-bar">
                    <span ref={slideBar}></span>
                </div>
            </div>
        </div>
        }
        </>
    );
};

