import React from 'react';
import './scss/sub7.scss';
import Sub7ComChild1 from './Sub7ComChild1';
import Sub7ComChild2 from './Sub7ComChild2';
import Sub7ComChild3 from './Sub7ComChild3';
import {Link, Outlet, useLocation} from 'react-router-dom';


export default function Sub7Com(){

    const [state,setState]=React.useState({
        tab1:true,
        tab2:false,
        tab3:false
    })

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

    return (
        <div id='sub7'>
             <div className="location">
                <div className="ineer-menu">
                    <div className="home"><a href="!#"></a></div>
                    <div className="navi">
                        <img src="./images/sub/sub1/arr_location_depth.png" alt="" />
                        <button>ABOUT<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>
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
                        {state.tab1&&<button>BRAND STORY<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>}
                        {state.tab2&&<button>Green Tea Heritage<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>}
                        {state.tab3&&<button>Better For Earth<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>}
                        <ul>
                            <li><a href="!#">Brand Story</a></li>
                            <li><a href="!#">Green Tea Heritage</a></li>
                            <li><a href="!#">Better For Earth</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="title">
                    <h2>ABOUT</h2>
                </div>
                <div className="top-menu">
                        <div className="tab-btn-box">
                            <button className={state.tab1===true?'on':''} onClick={onClickTab1}>Brand Story</button>
                            <button className={state.tab2===true?'on':''} onClick={onClickTab2}>Green Tea Heritage</button>
                            <button className={state.tab3===true?'on':''} onClick={onClickTab3}>Better For Earth</button>
                        </div>
                </div>
                <div className="content">
                    {state.tab1&&<Sub7ComChild1/>}
                    {state.tab2&&<Sub7ComChild2/>}
                    {state.tab3&&<Sub7ComChild3/>}

                    <div className="banner-box">
                        <a href="!#" className='banner1'>
                            <p>The Origin <br />Green Tea Heritage</p>
                        </a>
                        <a href="!#" className='banner2'>
                            <p>Better for Earth</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
