import React from 'react';
import './scss/sub6.scss'
export default function Sub6ComChildTab({initState}) {

    return (
        <div>
            {
                initState.isCount1 &&
                <ul>        
                    {     
                        initState.product.length > 0&&   
                        (
                        
                            initState.product.map((item, idx)=>{
                                return(        
                                    <li>
                                        <a href="!#">
                                            <div className="img">                                            
                                                <img src={`./images/sub/sub6/${item.이미지}`} alt="" />
                                                <div className="over-img">
                                                    <img src={`./images/sub/sub6/${item.변경이미지}`} alt="" />
                                                </div>
                                            </div>  
                                            <div className="product-txt-box">
                                                <div className="name">
                                                    <strong>{item.베스트}</strong> {item.제품명}
                                                </div>
                                                <div className="price-box">
                                                    {                                            
                                                        item.할인율 !== 0 &&
                                                        <strong className='price'>{item.정가.toLocaleString('ko-KR')}원</strong>
                                                    }
                                                    {
                                                        item.할인율 !== 0 &&                                                
                                                        <span className='sale'>{Math.round(item.할인율 * 100)}%</span>
                                                    }                                            
                                                    <span className={`cost${item.할인율 === 0 ? ' on' : ''}`}>{Math.round(item.정가 * (1 - item.할인율)).toLocaleString('ko-KR')}원</span>
                                                </div>
                                                <div className="sticker-box">
                                                    <span className={item.증정 === '' ? 'off' : ''}>{item.증정}</span>
                                                </div>
                                                <div className="hash-box">
                                                    <button className={`tag1${item.태그1 === '' ? ' on' : ''}`}>{'#'+item.태그1}</button>
                                                    <button className={`tag2${item.태그2 === '' ? ' on' : ''}`}>{'#'+item.태그2}</button>
                                                </div>
                                                <div className="review">
                                                    <img src="./images/sub/sub6/ico_star.png" alt="" />
                                                    <p>4.8 (3,531)</p>
                                                </div>
                                            </div>                                      
                                        </a>
                                    </li>
                                )
                            })  
                        ) 
                    }
                </ul>
            }
            {
                initState.isCount2 &&
                <ul>        
                    {     
                        initState.product2.length > 0&&   
                        (
                        
                            initState.product2.map((item, idx)=>{
                            return(        
                                <li>
                                    <a href="!#">
                                        <div className="img">                                            
                                            <img src={`./images/sub/sub6/${item.이미지}`} alt="" />
                                            <div className="over-img">
                                                <img src={`./images/sub/sub6/${item.변경이미지}`} alt="" />
                                            </div>
                                        </div>  
                                        <div className="product-txt-box">
                                            <div className="name">
                                                <strong>{item.베스트}</strong> {item.제품명}
                                            </div>
                                            <div className="price-box">
                                                {                                            
                                                    item.할인율 !== 0 &&
                                                    <strong className='price'>{item.정가.toLocaleString('ko-KR')}원</strong>
                                                }
                                                {
                                                    item.할인율 !== 0 &&                                                
                                                    <span className='sale'>{Math.round(item.할인율 * 100)}%</span>
                                                }                                            
                                                <span className={`cost${item.할인율 === 0 ? ' on' : ''}`}>{Math.round(item.정가 * (1 - item.할인율)).toLocaleString('ko-KR')}원</span>
                                            </div>
                                            <div className="sticker-box">
                                                <span className={item.증정 === '' ? 'off' : ''}>{item.증정}</span>
                                            </div>
                                            <div className="hash-box">
                                                <button className={`tag1${item.태그1 === '' ? ' on' : ''}`}>{'#'+item.태그1}</button>
                                                <button className={`tag2${item.태그2 === '' ? ' on' : ''}`}>{'#'+item.태그2}</button>
                                            </div>
                                            <div className="review">
                                                <img src="./images/sub/sub6/ico_star.png" alt="" />
                                                <p>4.8 (3,531)</p>
                                            </div>
                                        </div>                                      
                                    </a>
                                </li>
                                )
                            })  
                        ) 
                    }
                </ul>
            }
            {
                initState.isCount3 &&
                <ul>        
                    {     
                        initState.product3.length > 0&&   
                        (
                        
                            initState.product3.map((item, idx)=>{
                                return(        
                                    <li>
                                        <a href="!#">
                                            <div className="img">                                            
                                                <img src={`./images/sub/sub6/${item.이미지}`} alt="" />
                                                <div className="over-img">
                                                    <img src={`./images/sub/sub6/${item.변경이미지}`} alt="" />
                                                </div>
                                            </div>  
                                            <div className="product-txt-box">
                                                <div className="name">
                                                    <strong>{item.베스트}</strong> {item.제품명}
                                                </div>
                                                <div className="price-box">
                                                    {                                            
                                                        item.할인율 !== 0 &&
                                                        <strong className='price'>{item.정가.toLocaleString('ko-KR')}원</strong>
                                                    }
                                                    {
                                                        item.할인율 !== 0 &&                                                
                                                        <span className='sale'>{Math.round(item.할인율 * 100)}%</span>
                                                    }                                            
                                                    <span className={`cost${item.할인율 === 0 ? ' on' : ''}`}>{Math.round(item.정가 * (1 - item.할인율)).toLocaleString('ko-KR')}원</span>
                                                </div>
                                                <div className="sticker-box">
                                                    <span className={item.증정 === '' ? 'off' : ''}>{item.증정}</span>
                                                </div>   
                                                <div className="hash-box">
                                                    <button className={`tag1${item.태그1 === '' ? ' on' : ''}`}>{'#'+item.태그1}</button>
                                                    <button className={`tag2${item.태그2 === '' ? ' on' : ''}`}>{'#'+item.태그2}</button>
                                                </div>
                                                <div className="review">
                                                    <img src="./images/sub/sub6/ico_star.png" alt="" />
                                                    <p>4.8 (3,531)</p>
                                                </div>
                                            </div>                                      
                                        </a>
                                    </li>
                                )
                            })  
                        ) 
                    }
                </ul>
            }
        </div>
    );
};