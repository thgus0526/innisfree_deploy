import React from 'react';
import './scss/sub2.scss';
import axios from 'axios';
import {Link, Outlet, useLocation} from 'react-router-dom';

export default function Sub2Com(){

    const [state,setState]=React.useState({
        tab1:true,
        tab2:false,
        tab3:false,
        tab4:false,
        cnt:0,
        올1:[],
        올2:[],
        올3:[],
        체험:[],
        쇼핑1:[],
        쇼핑2:[],
        제휴:[]

        
    })

    React.useEffect(()=>{

        axios({
            url:'./data/sub/sub2.json',
            method:'GET'
        })
        .then((result)=>{ 
            setState({
                ...state,
                올1:result.data.all1,
                올2:result.data.all2,
                올3:result.data.all3,
                체험:result.data.experience,
                쇼핑1:result.data.shopping1,
                쇼핑2:result.data.shopping2,
                제휴:result.data.partnership,
            })
        })
        .catch((error)=>{
        });
    },[]);

     // 탭버튼  클릭 이벤트
     const onClickTab1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            tab1:true,
            tab2:false,
            tab3:false,
            tab4:false
            
        })
    }
    const onClickTab2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            tab1:false,
            tab2:true,
            tab3:false,
            tab4:false,
            cnt:0
        })
    }
    const onClickTab3=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            tab1:false,
            tab2:false,
            tab3:true,
            tab4:false,
            cnt:0
        })
    }
    const onClickTab4=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            tab1:false,
            tab2:false,
            tab3:false,
            tab4:true,
            cnt:0
        })
    }


    //페이지 클릭 이벤트
    const onClickAllpage1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:0
        })
    }
    const onClickAllpage2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:1
        })
    }
    const onClickAllpage3=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:2
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
        if(state.cnt>=2){
            setState({
                ...state,
                cnt:2
            })
        }
        else{
            setState({
                ...state,
                cnt:state.cnt+1
            })
        }
    }

    return (
        <div id='sub2'>
            <div className="location">
                <div className="ineer-menu">
                    <div className="home"><a href="!#"></a></div>
                    <div className="navi">
                        <img src="./images/sub/sub1/arr_location_depth.png" alt="" />
                        <button>이벤트<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>
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
                <h2>이벤트</h2>
                <button>당첨자 발표<img src="./images/sub/sub2/arr_r16_black.png" alt="" /></button>
                </div>
                <div className="top-menu">
                    <div className="tab-btn-box">
                        <button className={state.tab1===true?'on':''} onClick={onClickTab1}>전체</button>
                        <button className={state.tab2===true?'on':''} onClick={onClickTab2}>체험/리뷰</button>
                        <button className={state.tab3===true?'on':''} onClick={onClickTab3}>쇼핑혜택</button>
                        <button className={state.tab4===true?'on':''} onClick={onClickTab4}>제휴혜택</button>
                    </div>
                </div>
               {
                state.tab1&&
                <>
                <div className="content">
                    {
                        state.cnt===0 &&(
                            <ul>
                        {state.올1.map((item,idx)=>{
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
                                                    <span>{item.상단} <br />{item.하단}</span>               
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                )
                        })
                                
                            }
                        </ul>
                        )
                    }
                    {
                        state.cnt===1&&(
                            <ul>
                        {state.올2.map((item,idx)=>{
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
                                                    <span>{item.상단} <br />{item.하단}</span>               
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                )
                        })
                                
                            }
                        </ul>
                        )
                    }
                    {
                        state.cnt===2&&(
                            <ul>
                        {state.올3.map((item,idx)=>{
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
                                                    <span>{item.상단} <br />{item.하단}</span>               
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                )
                        })
                                
                            }
                        </ul>
                        )
                    }
                </div>
                <div className="page-box">
                        <button onClick={onClickPrevBtn}  className={`prevBtn${state.cnt===0?' on':''}`}></button>
                        <button className={state.cnt===0?'on':''} onClick={onClickAllpage1}>1</button> 
                        <button className={state.cnt===1?'on':''} onClick={onClickAllpage2}>2</button>
                        <button className={state.cnt===2?'on':''} onClick={onClickAllpage3}>3</button>
                        <button onClick={onClickNextBtn}  className={`nextBtn${state.cnt===2?' on':''}`}></button>
                </div>
                </>}    
               {
                state.tab2&&
                <>
                <div className="content">
                    {
                        state.cnt===0 &&(
                            <ul>
                        {state.체험.map((item,idx)=>{
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
                                                    <span>{item.상단} <br />{item.하단}</span>               
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                )
                        })
                                
                            }
                        </ul>
                        )
                    }

                </div>
                <div className="page-box">
                        <button onClick={onClickPrevBtn}  className={`prevBtn${state.cnt===0?' on':''}`}></button>
                        <button className={state.cnt===0?'on':''} onClick={onClickAllpage1}>1</button> 
                        <button onClick={onClickNextBtn}  className={`nextBtn${state.cnt===0?' on':''}`}></button>
                </div>
                </>}    
               {
                state.tab3&&
                <>
                <div className="content">
                    {
                        state.cnt===0 &&(
                            <ul>
                        {state.쇼핑1.map((item,idx)=>{
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
                                                    <span>{item.상단} <br />{item.하단}</span>               
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                )
                        })
                                
                            }
                        </ul>
                        )
                    }
                    {
                        state.cnt===1&&(
                            <ul>
                        {state.쇼핑2.map((item,idx)=>{
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
                                                    <span>{item.상단} <br />{item.하단}</span>               
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                )
                        })
                                
                            }
                        </ul>
                        )
                    }
                </div>
                <div className="page-box">
                        <button onClick={onClickPrevBtn}  className={`prevBtn${state.cnt===0?' on':''}`}></button>
                        <button className={state.cnt===0?'on':''} onClick={onClickAllpage1}>1</button> 
                        <button className={state.cnt===1?'on':''} onClick={onClickAllpage2}>2</button>
                        <button onClick={onClickNextBtn} className={`nextBtn${state.cnt===1?' on':''}`}></button>
                </div>
                </>}    
               {
                state.tab4&&
                <>
                <div className="content">
                    {
                        state.cnt===0 &&(
                            <ul>
                        {state.제휴.map((item,idx)=>{
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
                                                    <span>{item.상단} <br />{item.하단}</span>               
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                )
                        })
                                
                            }
                        </ul>
                        )
                    }
                   
                </div>
                <div className="page-box">
                        <button onClick={onClickPrevBtn}  className={`prevBtn${state.cnt===0?' on':''}`}></button>
                        <button className={state.cnt===0?'on':''} onClick={onClickAllpage1}>1</button> 
                        <button onClick={onClickNextBtn}  className={`nextBtn${state.cnt===0?' on':''}`}></button>
                </div>
                </>}    
            </div>
        </div>
    );
};
