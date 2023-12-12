import React from 'react';
import axios from 'axios';
import './scss/sub6.scss'
import ProductList from './sub6ComChild/ProductList'
import ProductAgeList from './sub6ComChild/ProductAgeList';
import Sub6ComChildSwipe from './Sub6ComChildSwipe';

export default function Sub6ComChild({viewProductMethod}) {

    
    const [sub6Count, setSub6Count] = React.useState({});
    React.useEffect(()=>{
        axios({
            url: './data/sub/sub6_count.json',
            method: 'GET'
        })
        .then((res)=>{
            if(res.status === 200){
                setSub6Count(res.data.sub6Count);
            }
        })
        .catch((err)=>{

        })
    });

    return (
        <main id='sub6' className='sub'>
            <div className="content-container">
                <div className="hbox hbox1">
                    <strong>오전 11시</strong>에 고객님들이 가장 많이 찾고 있어요.
                    <Sub6ComChildSwipe viewProductMethod={viewProductMethod}/>
                </div>
                <div className="hbox hbox2">
                    고객님들이 가장 많이 찾으신 <strong>기초</strong> 에서 추천드려요
                    <p>최근 본 제품, 이벤트, 검색어예요</p>
                    <Sub6ComChildSwipe viewProductMethod={viewProductMethod}/>
                </div>                              
                {
                    sub6Count.length > 0 &&
                    (
                        sub6Count.map((item)=>{
                            return(
                                <ProductList num={item} viewProductMethod={viewProductMethod}/>
                            )
                        })
                    ) 
                }
                <ProductAgeList viewProductMethod={viewProductMethod}/>   
            </div>
        </main>
    );
};