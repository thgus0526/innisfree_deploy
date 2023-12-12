import React from 'react';

export default function Sub6ShoppingLogCom({quickMenuViewProduct}){
    
    return (
        <main id='sub6' className='shopping-log'>
            <div className="shopping-log-title">
                <div className="shopping-log-title-box">
                    <h2><span>쇼핑로그</span><button></button></h2>
                    <p>최근 본 제품, 이벤트, 검색어예요</p>
                </div>
            </div>
            <div className="shopping-box">
                <ul className='shopping-list-box'>          
                    {
                        quickMenuViewProduct.map((item)=>{
                            return(                                
                                <li key={item.번호}>
                                    <a href="!#">
                                        <div className="nail">
                                            <div className="img">
                                                <img src={item.이미지} alt="" />
                                            </div>
                                        </div>
                                        <div className="product-txt-box">
                                            <div className="name">
                                                <strong>{item.베스트}</strong> {item.제품명} {item.상품이름}
                                            </div>
                                            <div className="price-box">
                                                <span className={`cost${item.할인율 === 0 ? ' on' : ''}`}>{Math.round(item.정가 * (1 - item.할인율)).toLocaleString('ko-KR')}</span>                                                    
                                                {                                            
                                                    item.할인율 !== 0 &&
                                                    <strong className='price'>{item.정가.toLocaleString('ko-KR')}</strong>
                                                }                                         
                                            </div>
                                            <div className="hash-box">
                                                <button className={`tag1${item.태그1 === '' ? ' on' : ''}`}>{'#'+item.태그1}</button>
                                                <button className={`tag2${item.태그2 === '' ? ' on' : ''}`}>{'#'+item.태그2}</button>
                                            </div>
                                            <div className="review">
                                                <img src='./images/sub/sub6/ico_star.png' alt="" />
                                                <p>4.8 (3,531)</p>
                                            </div>
                                        </div> 
                                    </a>              
                                </li>
                            )
                        })
                    }   
                </ul>
            </div>
        </main>
    );
};

