import React from "react";
import './scss/section8.scss';
import axios from "axios";

export default function Section8Com ({viewProductMethod, path}) {

    const slideWrap = React.useRef();
    const pageBar = React.useRef();

    const [cnt, setCnt] = React.useState(0);
    const [toggle, setToggle] = React.useState(0);

    const [state, setState] = React.useState({
        slide: [],
        n: 0
    });

    React.useEffect(()=>{
        axios({
            url: './data/index/section3.json',
            method: 'GET',
        }).then((res)=>{
            setState({
                ...state,
                slide: res.data.slide,
                n: res.data.slide.length
            })
        }).catch((err)=>{
            console.log("AXIOS 오류 " + err );
        })
    },[])

    React.useEffect(()=>{
        slideWrap.current.style.width = `${260 * state.n}px`;
    },[state.n]);

    const mainSlide=()=>{
        slideWrap.current.style.transition = 'all 0.3s ease-in-out';
        slideWrap.current.style.left = `${-260 * cnt}px`;
        pageBar.current.style.transform=`scaleX(${0.125 * (cnt+1)})`; 
        pageBar.current.style.transition = `all 0.3s ease-in-out`;
        if(cnt!==0){
            returnSlide();
        }
    }

    const returnSlide=()=>{
        if(cnt>7){
            slideWrap.current.style.transition = 'none';
            slideWrap.current.style.left = `${-100 * 0}%`;
            setTimeout(()=>{
                setToggle(1);
                setCnt(0);
            },10)
        }
        if(cnt<0){
            slideWrap.current.style.transition = 'none';
            slideWrap.current.style.left = `${-(100*(state.n))}%`;
            setTimeout(()=>{
                setToggle(1);
                setCnt(7);
            },10)
        }
    }

    const onClickPrev=(e)=>{
        e.preventDefault();
        setCnt(cnt => cnt-1);
    }
    const onClickNext=(e)=>{
        e.preventDefault();
        setCnt(cnt => cnt+1);
    }

    React.useEffect(()=>{
        if(toggle===0){
            mainSlide();
        }
        else { 
            setToggle(0);
            setTimeout(()=>{
                mainSlide();
            },100);
        }
    },[cnt]);

    const onClickViewProduct=(e, item, route)=>{
        e.preventDefault();
        viewProductMethod(item, route, path);
    }

    return (
        <div id="section8">
            <div className="container">
                <div className="h-group">
                    <h2>이 제품 어때요?</h2>
                    <button type="button" className="btn-arr">더보기</button>
                </div>
                <div className="slide-view">
                    <ul ref={slideWrap} className="slide-wrap">
                        {
                            state.slide.map((item, idx)=>{
                                return (
                                    <li className="slide" key={item.no} onClick={(e)=>onClickViewProduct(e, item, './images/index/')}>
                                        <div className="nail">
                                            <a href="!#">
                                                <div className="img">
                                                    <img src={`./images/index/${item.이미지}`} alt="" />
                                                    <div className="over-flip">
                                                        <img src={`./images/index/${item.변경이미지}`} alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="btn-icon-box">
                                                <button className="btn-heart"></button>
                                                <button className="btn-cart"></button>
                                                <button className="btn-buy"></button>
                                            </div>
                                        </div>
                                        <a href="!#">
                                            <div className="info">
                                                <div className="name">
                                                    <strong>BEST</strong>
                                                    {item.제품명}
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
                                                <div className="hash-box">
                                                    <button type="button">#탄력장벽 </button>
                                                    <button type="button">#탄력장벽끌올 </button>
                                                </div>
                                                <div className="star-grade">
                                                    <div className="grade">{item.grade}</div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="page-nation">
                        <span ref={pageBar} className="fill"></span>
                    </div>
                    <div className="slide-control">
                        <button type="button" className="btn-prev" onClick={onClickPrev}></button>
                        <button type="button" className="btn-next" onClick={onClickNext}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}