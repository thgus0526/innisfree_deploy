import React, { useRef } from "react";
import './scss/section1.scss';
import axios from "axios";

export default function Section1Com () {

    const [mouseDown, setMouseDown] = React.useState(null);
    const [mouseUp, setMouseUp] = React.useState(null);
    const [dragStart, setDragStart] = React.useState(null);
    const [mDown, setMDown] = React.useState(false);
    const [winW, setWinW] = React.useState(window.innerWidth);
    const [sizeX, setSizeX] = React.useState(winW / 8);
    let setId = 0;
  
    const handleMouseDown = (e) => {
      setWinW(window.innerWidth);
      setSizeX(winW / 8);
  
      setMouseDown(e.clientX);
      setDragStart(e.clientX - (slideWrap.current.offsetLeft + winW));
      setMDown(true);
    //   setCursor('grabbing');
    };
  
    const handleMouseUp = (e) => {
      setMouseUp(e.clientX);
  
      if (mouseDown - mouseUp > sizeX) {
        clearInterval(setId);
        if (!slideWrap.current.isAnimated) {
            onClickNext(e);
        }
      }
  
      if (mouseDown - mouseUp < -sizeX) {
        clearInterval(setId);
        if (!slideWrap.current.isAnimated) {
          onClickPrev(e);
        }
      }
  
      if (mouseDown - mouseUp >= -sizeX && mouseDown - mouseUp <= sizeX) {
        mainSlide();
      }
  
      setMDown(false);
    //   setCursor('grab');
    };
  
    const handleMouseMove = (e) => {
      if (!mDown) return;
      const dragEnd = e.clientX;
      slideWrap.current.style.left = dragEnd - dragStart + 'px';
    };
  
    const handleDocumentMouseUp = (e) => {
      setMouseUp(e.clientX);
  
      if (mouseDown - mouseUp > sizeX) {
        clearInterval(setId);
        if (!slideWrap.current.isAnimated) {
          onClickNext(e);
        }
      }
  
      if (mouseDown - mouseUp < -sizeX) {
        clearInterval(setId);
        if (!slideWrap.current.isAnimated) {
          onClickPrev(e);
        }
      }
  
      setMDown(false);
    //   setCursor('grab');
    };

    const slideWrap = React.useRef();

    const [cnt, setCnt] = React.useState(0);
    const [toggle, setToggle] = React.useState(0);
    const [isHover, setIsHover] = React.useState(false);

    const [state, setState] = React.useState({
        slide: [],
        n: 0
    });

    React.useEffect(()=>{
        slideWrap.current.style.width = `${100 * state.n}%`;
    },[state.n]);

    const mainSlide=()=>{
        slideWrap.current.style.transition = 'all 0.6s ease-in-out';
        slideWrap.current.style.left = `${-100 * cnt}%`;
        if(cnt!==0){
            returnSlide();
        }
    }

    const returnSlide=()=>{
        if(cnt>(state.n-2)){
            setToggle(1);
            setCnt(1);
            slideWrap.current.style.transition = 'none';
            slideWrap.current.style.left = `${-100 * 0}%`;
        }
        if(cnt<0){
            setToggle(1);
            setCnt(state.n-2-1);
            slideWrap.current.style.transition = 'none';
            slideWrap.current.style.left = `${-(100*(state.n-2))}%`;
        }
    }

    React.useEffect(()=>{
        setId = 0;
        if(isHover===false){
            setId = setInterval(()=>{
                setCnt(cnt => cnt+1);
            }, 6000);
            return () => clearInterval(setId);
        }
    },[isHover]);

    const onClickNext=(e)=>{
        e.preventDefault();
        setCnt(cnt => cnt+1);
    }

    const onClickPrev=(e)=>{
        e.preventDefault();
        setCnt(cnt => cnt-1);
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

    React.useEffect(()=>{
        axios({
            url: './data/index/section1.json',
            method: 'GET'
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

    const onMouseEnterContainer=()=>{
        setIsHover(true);
    }

    const onMouseLeaveContainer=()=>{
        setIsHover(false);
    }

    return (
        <div id="section1">
            <div className="container" onMouseEnter={onMouseEnterContainer} onMouseLeave={onMouseLeaveContainer} onMouseDown={handleDocumentMouseUp}>
                <div className="slide-view" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
                    <ul ref={slideWrap} className="slide-wrap">
                        {
                            state.slide.map((item, idx)=>{
                                return(
                                    <li className="slide" key={item.no}>
                                        <a href="!#">
                                            <div className="cnt-area">
                                                <div className="tag-card">
                                                    <span className={`card-st1 ${item.sale?'':' on'}`}>{Math.round(item.sale*100)}%</span>
                                                    <span className="card-st2">{item.gift}</span>
                                                </div>
                                                <div className="name">
                                                    <span className="prd-name1">{item.title1}</span>
                                                    <span className="prd-name2">{item.title2}</span>
                                                </div>
                                                <div className="price">
                                                    <span className="t-unit">{item.price.toLocaleString('ko-KO')}</span>
                                                    <span className="t-cost">{item.regular.toLocaleString('ko-KO')}</span>
                                                </div>
                                            </div>
                                            <div className="img-box">
                                                    <img src={`./images/index/${item.image}`} alt="" />
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="slide-control">
                        <button className="btn-prev" onClick={onClickPrev}></button>
                        <button className="btn-next" onClick={onClickNext}></button>
                    </div>
                    <div className="page-nation">
                        <span>
                            <em>0{cnt+1>state.n-2 ? 1 : cnt+1}</em>
                            <em>06</em>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}