import React from 'react';
import './scss/sub6.scss'
import Sub6ComChild from './Sub6ComChild';
import Sub6ShoppingLogCom from './Sub6ShoppingLogCom';
import { Link } from 'react-router-dom';

export default function Sub6Com({quickMenuViewProduct, viewProductMethod}) {

    return (
        <main id='sub6' className='sub'>
             <div className="location">
                <div className="ineer-menu">
                    <div className="home"><a href="!#"></a></div>
                    <div className="navi">
                        <img src="./images/sub/sub1/arr_location_depth.png" alt="" />
                        <button>FOR ME<img src="./images/sub/sub1/arr_location_black.png" alt="" /></button>
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
            <div className="title-container">
                <div className="title-box">
                    <h2>FOR ME</h2>
                </div>
            </div>
            <div className="content">
                <div className="left-box">
                    <div className="recommend-box">
                        <div className="re-title-box">
                            <h3>추천해요</h3>
                            <a href="!#">피부정보 등록</a>
                        </div>
                        <div className="re-content-box">

                        </div>
                        <p>가장 많이 등록된 피부정보 기준으로 보여드려요.</p>
                        <div className="btn-box">
                            <button>중성피부</button>
                            <button>모공 / 주름 / 탄력</button>
                        </div>
                    </div>
                    <div className="content-container">
                        <Sub6ComChild viewProductMethod={viewProductMethod}/>
                    </div>
                </div>
                <Sub6ShoppingLogCom quickMenuViewProduct={quickMenuViewProduct}/>
            </div>
        </main>
    );
};