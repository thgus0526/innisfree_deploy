import React, { useRef } from "react";
import './scss/shoppingModal.scss';
import { useDispatch,useSelector } from "react-redux";
import { shoppingModal } from "../reducer/shoppingModal";

export default function ShoppingLogModalCom ({quickMenuViewProduct}) {

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    const [isTrue, setIsTrue] = React.useState(false);

    const onClickClose=(e)=>{
        e.preventDefault();
        dispatch(shoppingModal(false));
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');
    }

    React.useEffect(()=>{
        console.log(selector.quickMenuViewProduct.quickMenuViewProduct);
    },[])

    return (
        <div id="shoppingModal">
            <div className="container">
                <h4 className="title">
                    쇼핑로그
                    <button type="button" className="icon-tool-tip"></button>
                    <p>
                        최근 본 제품, 이벤트, 검색어예요
                    </p>
                </h4>
                <div className="search-slide-wrap">
                    <section className="shopping-log-section">                        
                        <ul className={`shopping-list-box ${localStorage.getItem('INNISFREE_SHOPPING_LOG_PRODUCT') === null ?' on':''}`}>
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
                        <p className={`no-data ${localStorage.getItem('INNISFREE_SHOPPING_LOG_PRODUCT') !== null ?' on':''}`}>
                            쇼핑로그가 없습니다.
                            <span className="desc">쇼핑로그는 7일 최대 50개까지 보관됩니다.</span>
                        </p>
                        <div className={`box-wrap ${localStorage.getItem('INNISFREE_SHOPPING_LOG_PRODUCT') !== null ?' on':''}`}>
                            <h4 className="sub-title">추천 키워드</h4>
                            <div className="hash-tag">
                                <a href="!#">#홀리데이</a>
                                <a href="!#">#납작아이브로우</a>
                                <a href="!#">#레티놀</a>
                                <a href="!#">#NEW탄력장벽크림</a>
                                <a href="!#">#NEW콜라겐크림</a>
                                <a href="!#">#노세범</a>
                                <a href="!#">#블루베리</a>
                            </div>
                        </div>
                        {/* <ul className="product-list">
                            {
                                selector.quickMenuViewProduct.quickMenuViewProduct.map((item)=>{
                                    return (
                                        <li key={item.no}>
                                            <a href="!#">
                                                <div className="nail">
                                                    <div className="img">
                                                        <img src={item.image} alt="" />
                                                    </div>
                                                </div>
                                                <div className="info">
                                                    <div className="name">
                                                        <strong> BEST </strong>
                                                        {item.title}
                                                    </div>
                                                    <div className="price-box">
                                                        <strong className="price">{item.price.toLocaleString('ko-KO')}</strong>
                                                        <span className="cost">{item.cost.toLocaleString('ko-KO')}</span>
                                                    </div>
                                                    <div className="hash-box">
                                                        <button type="button">{item.hash1}</button>
                                                        <button type="button">{item.hash2}</button>
                                                    </div>
                                                    <div className="star-grade">
                                                        <span className="grade">{item.grade}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul> */}
                        {/* <p className={`no-data ${selector.quickMenuViewProduct.quickMenuViewProduct.length!==0?' on':''}`}>
                            쇼핑로그가 없습니다.
                            <span className="desc">쇼핑로그는 7일 최대 50개까지 보관됩니다.</span>
                        </p>
                        <div className={`box-wrap ${selector.quickMenuViewProduct.quickMenuViewProduct.length!==0?' on':''}`}>
                            <h4 className="sub-title">추천 키워드</h4>
                            <div className="hash-tag">
                                <a href="!#">#홀리데이</a>
                                <a href="!#">#납작아이브로우</a>
                                <a href="!#">#레티놀</a>
                                <a href="!#">#NEW탄력장벽크림</a>
                                <a href="!#">#NEW콜라겐크림</a>
                                <a href="!#">#노세범</a>
                                <a href="!#">#블루베리</a>
                            </div>
                        </div> */}
                    </section>
                </div>
                <button type="button" className="btn-close" onClick={onClickClose}></button>
            </div>
        </div>
    )
}