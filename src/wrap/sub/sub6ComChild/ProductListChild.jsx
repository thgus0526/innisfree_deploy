import React from 'react';
import '../scss/sub6.scss';

export default function ProductListChild({initState, viewProductMethod, path}) {
    
    const onClickViewProduct=(e, item, route)=>{
        e.preventDefault();
        viewProductMethod(item, route, path);
    }

    return (
        <div>
            {
                initState.isCount1 &&                
                <ul>        
                    {     
                        initState.product.length > 0 &&   
                        (                        
                            initState.product.map((item, idx)=>{
                                return(   
                                    <li key={idx}>
                                        <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub6/')}>
                                            <div className="img">                                            
                                                <img src={`./images/sub/sub6/${item.이미지}`} alt="" /> 
                                                <div className={`over-img${item.변경이미지 === '' ? ' on' : ''}`}>
                                                    <img src={`./images/sub/sub6/${item.변경이미지}`} alt="" />
                                                </div>
                                                <div className="hover-btn">
                                                    <button className='heartBtn'></button>
                                                    <button className='cartBtn'></button>
                                                    <button className='buyBtn'></button>
                                                </div>
                                            </div>  
                                            <div className="product-txt-box">
                                                <div className="name">
                                                    <strong>{item.베스트}</strong> {item.제품명}
                                                </div>
                                                <div className="price-box">
                                                    <span className={`price${item.할인율 === 0 ? ' on' : ''}`}>{Math.round(item.정가 * (1 - item.할인율)).toLocaleString('ko-KR')}</span>

                                                    {
                                                        item.할인율 !== 0 &&                                                
                                                        <span className='sale'>{Math.round(item.할인율 * 100)}%</span>
                                                    }                                                       
                                                    {                                            
                                                        item.할인율 !== 0 &&
                                                        <strong className='cost'>{item.정가.toLocaleString('ko-KR')}</strong>
                                                    }                                         
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
                        initState.product2.length > 0 &&   
                        (                        
                            initState.product2.map((item, idx)=>{
                                return(        
                                    <li>
                                        <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub6/')}>
                                            <div className="img">                                            
                                                <img src={`./images/sub/sub6/${item.이미지}`} alt="" /> 
                                                <div className={`over-img${item.변경이미지 === '' ? ' on' : ''}`}>
                                                    <img src={`./images/sub/sub6/${item.변경이미지}`} alt="" />
                                                </div>
                                                <div className="hover-btn">
                                                    <button className='heartBtn'></button>
                                                    <button className='cartBtn'></button>
                                                    <button className='buyBtn'></button>
                                                </div>
                                            </div>  
                                            <div className="product-txt-box">
                                                <div className="name">
                                                    <strong>{item.베스트}</strong> {item.제품명}
                                                </div>
                                                <div className="price-box">
                                                    {                                            
                                                        item.할인율 !== 0 &&
                                                        <strong className='price'>{item.정가.toLocaleString('ko-KR')} </strong>
                                                    }
                                                    {
                                                        item.할인율 !== 0 &&                                                
                                                        <span className='sale'>{Math.round(item.할인율 * 100)}%</span>
                                                    }                                            
                                                    <span className={`cost${item.할인율 === 0 ? ' on' : ''}`}>{Math.round(item.정가 * (1 - item.할인율)).toLocaleString('ko-KR')} </span>
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
                                        <a href="!#" onClick={(e)=>onClickViewProduct(e, item, './images/sub/sub6/')}>
                                            <div className="img">                                            
                                                <img src={`./images/sub/sub6/${item.이미지}`} alt="" /> 
                                                <div className={`over-img${item.변경이미지 === '' ? ' on' : ''}`}>
                                                    <img src={`./images/sub/sub6/${item.변경이미지}`} alt="" />
                                                </div>
                                                <div className="hover-btn">
                                                    <button className='heartBtn'></button>
                                                    <button className='cartBtn'></button>
                                                    <button className='buyBtn'></button>
                                                </div>
                                            </div>  
                                            <div className="product-txt-box">
                                                <div className="name">
                                                    <strong>{item.베스트}</strong> {item.제품명}
                                                </div>
                                                <div className="price-box">
                                                    {                                            
                                                        item.할인율 !== 0 &&
                                                        <strong className='price'>{item.정가.toLocaleString('ko-KR')} </strong>
                                                    }
                                                    {
                                                        item.할인율 !== 0 &&                                                
                                                        <span className='sale'>{Math.round(item.할인율 * 100)}%</span>
                                                    }                                            
                                                    <span className={`cost${item.할인율 === 0 ? ' on' : ''}`}>{Math.round(item.정가 * (1 - item.할인율)).toLocaleString('ko-KR')} </span>
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