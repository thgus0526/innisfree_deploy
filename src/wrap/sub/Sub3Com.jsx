import React from 'react';
import './scss/sub3.scss'
import Sub3ComChild1 from './Sub3ComChild1';
import Sub3ComChild2 from './Sub3ComChild2';
import Sub3ComChild3 from './Sub3ComChild3';
import {Link, Outlet, useLocation} from 'react-router-dom';

export default function Sub3Com({viewProductMethod, path}){


    const [state,setState]=React.useState({
        tab1:true,
        tab2:false,
        tab3:false,
        btn1:true,
        btn2:false,
        btn3:false,
        btn4:false,
        btn5:false,
        btn6:false,
        btn7:false
    })



    // 탭버튼 클릭 이벤트
    const onClickTab1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            tab1:true,
            tab2:false,
            tab3:false
        })
    }
    const onClickTab2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            tab1:false,
            tab2:true,
            tab3:false
        })
    }
    const onClickTab3=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            tab1:false,
            tab2:false,
            tab3:true
        })
    }

    //탭바 버튼 클릭이벤트
    const onClickbtn1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            btn1:true,
            btn2:false,
            btn3:false,
            btn4:false,
            btn5:false,
            btn6:false,
            btn7:false,
        })
    }
    const onClickbtn2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            btn1:false,
            btn2:true,
            btn3:false,
            btn4:false,
            btn5:false,
            btn6:false,
            btn7:false
        })
    }
    const onClickbtn3=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            btn1:false,
            btn3:true,
            btn2:false,
            btn4:false,
            btn5:false,
            btn6:false,
            btn7:false
        })
    }
    const onClickbtn4=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            btn1:false,
            btn4:true,
            btn3:false,
            btn2:false,
            btn5:false,
            btn6:false,
            btn7:false
        })
    }
    const onClickbtn5=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            btn1:false,
            btn5:true,
            btn3:false,
            btn4:false,
            btn2:false,
            btn6:false,
            btn7:false
        })
    }
    const onClickbtn6=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            btn1:false,
            btn6:true,
            btn3:false,
            btn4:false,
            btn5:false,
            btn2:false,
            btn7:false
        })
    }
    const onClickbtn7=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            btn1:false,
            btn7:true,
            btn3:false,
            btn4:false,
            btn5:false,
            btn6:false,
            btn2:false
        })
    }

    return (
        <div id='sub3'>
            <div className="location">
                <div className="ineer-menu">
                    <div className="home"><a href="!#"></a></div>
                    <div className="navi">
                        <img src="./images/sub/sub1/arr_location_depth.png" alt="" />
                        <button>베스트<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>
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
                    <h2>베스트</h2>
                </div>
                <div className="top-menu">
                        <div className="tab-btn-box">
                            <button className={state.tab1===true?'on':''} onClick={onClickTab1}>실시간베스트</button>
                            <button className={state.tab2===true?'on':''} onClick={onClickTab2}>주간 베스트</button>
                            <button className={state.tab3===true?'on':''} onClick={onClickTab3}>월간 베스트</button>
                        </div>
                </div>
                <div className="tab-bar">
                    <ul>
                        <li>
                            <button className={state.btn1===true?'on':''} onClick={onClickbtn1}>전체</button>
                        </li>
                        <li>
                            <button className={state.btn2===true?'on':''} onClick={onClickbtn2}>스킨케어</button>
                        </li>
                        <li>
                            <button className={state.btn3===true?'on':''} onClick={onClickbtn3}>메이크업</button>
                        </li>
                        <li>
                            <button className={state.btn4===true?'on':''} onClick={onClickbtn4}>남성</button>
                        </li>
                        <li>
                            <button className={state.btn5===true?'on':''} onClick={onClickbtn5}>헤어/바디/펫</button>
                        </li>
                        <li>
                            <button className={state.btn6===true?'on':''} onClick={onClickbtn6}>기획세트</button>
                        </li>
                        <li>
                            <button className={state.btn7===true?'on':''} onClick={onClickbtn7}>미용소품</button>
                        </li>
                    </ul>
                    {state.tab1===true&&<span class="date">2023.11.23 14:50 기준</span>}
                    {state.tab2===true&&<span class="date">2023.11.17 ~ 2023.11.23 기준</span>}
                    {state.tab3===true&&<span class="date">전월 기준</span>}
                </div>
                {state.tab1&&<Sub3ComChild1 btn1={state.btn1} btn2={state.btn2} btn3={state.btn3} btn4={state.btn4}btn5={state.btn5}btn6={state.btn6}btn7={state.btn7} viewProductMethod={viewProductMethod} path={path}/>}
                {state.tab2&&<Sub3ComChild2 btn1={state.btn1} btn2={state.btn2} btn3={state.btn3} btn4={state.btn4}btn5={state.btn5}btn6={state.btn6}btn7={state.btn7} viewProductMethod={viewProductMethod} path={path}/>}
                {state.tab3&&<Sub3ComChild3 btn1={state.btn1} btn2={state.btn2} btn3={state.btn3} btn4={state.btn4}btn5={state.btn5}btn6={state.btn6}btn7={state.btn7} viewProductMethod={viewProductMethod} path={path}/>}
            </div>
           
        </div>

    );
};
