import React from 'react';

export default function Sub7ComChild2(){
    const slideWrap=React.useRef();
    const slideBar=React.useRef();
    const [state,setState]=React.useState({
        cnt:0
    })


    //메인슬라이드 메서드(함수)
    const mainSlide=()=>{
        slideBar.current.style.transition = `all 0.6s ease-in-out`;
        slideBar.current.style.transform=`scaleX(${0.25*state.cnt})`; 
        slideWrap.current.style.transition = `all 0.6s ease-in-out`;
        slideWrap.current.style.transform = `translateX(${-260*state.cnt}px)`;
        if(state.cnt!==0){
            returnSlide();
        }
    }

    React.useEffect(()=>{     
        mainSlide(); 
        let setId = 0;
            setId = setInterval(()=>{
                setState({
                    cnt:state.cnt+1
                })
            }, 2000);
            return () => clearInterval(setId);   
    },[state.cnt]);

    // 1-2 슬라이드 리턴
    const returnSlide=()=>{
        // 리턴 다음
        if(state.cnt>4){ // 24-2 = 22
            setState({
                cnt:1
            })
            slideBar.current.style.transform=`scaleX(${0.25*state.cnt*0})`; 
            slideBar.current.style.transition = `none`;
            slideWrap.current.style.transition = 'none';
            slideWrap.current.style.transform = `translateX(${-260*state.cnt*0}px)`;
        }
    }



    return (
                    <>
                        <div className="top-box2">
                            <p>‘Green Tea’ <br />the Origin of INNISFREE</p>
                            <span>천혜의 자연환경과 경이로운 생명력을 가진 제주. <br />그곳의 흙과 빛, 물과 바람, 그리고 안개가 조화롭게 어우러진 <br />청록의 다원은 이니스프리의 시작점입니다.</span>
                            <div className="arrow"></div>
                        </div>
                        
                        <div className="middle-box">
                            <div className="middle-text">
                                <p>
                                돌무더기와 가시덤불이 가득했던 황무지를 <br />
                                손으로 일구어 비옥한 차밭으로 <br />                      
                                개간한 창업주의 끈질긴 집념과 개척 정신은
                                </p>
                                <p>
                                ‘건강한 피부를 위해 끊임없이 도전하고 연구’ <br />
                                하는 오늘날 이니스프리의 근간이 되었고, <br />
                                이것의 산물이라고 할 수 있는 ‘그린티’는 <br />
                                이니스프리의 정수가 되는 원료로 자리 잡았습니다.
                                </p>
                            </div>
                        </div>
                        <div className="about-slide-box">
                            <h3>Farm to Face <br />Beauty Green Tea™ INNISFREE</h3>
                            <div className="slide-box">
                                <div className="left">
                                    <div className="gap">
                                    <img src="./images/sub/sub7/bg_leaf.png" alt="" />
                                    <p>녹차 나무 한 그루가 자라기까지 걸리는 시간 5년.</p>
                                    <p>약 20여년 동안 여러 실험 끝에 2만여 종의 녹차 중 <br />기후, 병충해를 비롯한 여러 악조건을 견디며</p>
                                    <p>전세계 유일무이한 ‘피부만을 위한 녹차 품종’을 탄생 시킬 수 있었습니다.</p>
                                    </div>                                
                                </div>
                                <div className="right">
                                    <div className="slide-container">
                                        <div className="slide-view">
                                            <ul className="slide-wrap" ref={slideWrap}>
                                                <li className="slide">
                                                    <img src="./images/sub/sub7/greenTeaHeritage_slide01.png" alt="" />
                                                </li>
                                                <li className="slide">
                                                    <img src="./images/sub/sub7/greenTeaHeritage_slide02.png" alt="" />
                                                </li>
                                                <li className="slide">
                                                    <img src="./images/sub/sub7/greenTeaHeritage_slide03.png" alt="" />
                                                </li>
                                                <li className="slide">
                                                    <img src="./images/sub/sub7/greenTeaHeritage_slide04.png" alt="" />
                                                </li>
                                                <li className="slide">
                                                    <img src="./images/sub/sub7/greenTeaHeritage_slide05.png" alt="" />
                                                </li>
                                                <li className="slide">
                                                    <img src="./images/sub/sub7/greenTeaHeritage_slide06.png" alt="" />
                                                </li>
                                                <li className="slide">
                                                    <img src="./images/sub/sub7/greenTeaHeritage_slide01.png" alt="" />
                                                </li>
                                            </ul>
                                            <div className="slide-bar">
                                                <span ref={slideBar}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="bottom-box2">
                            <h3>
                            이니스프리의 특별한 그린티가 들어간 <br />
                            <strong>이니스프리 대표 제품</strong>들을 지금 바로 만나보세요.
                            </h3>
                            <ul>
                                <li>
                                    <a href="!#">
                                        <img src="./images/sub/sub7/greenTeaHeritage_bg01.png" alt="" />
                                        <p>그린티 씨드 히알루론산 세럼</p>
                                        <span>상품 보러가기<img src="./images/sub/sub7/arr_r16_gray.png" alt="" /></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <img src="./images/sub/sub7/greenTeaHeritage_bg02.png" alt="" />
                                        <p>그린티 씨드 히알루론산 크림</p>
                                        <span>상품 보러가기<img src="./images/sub/sub7/arr_r16_gray.png" alt="" /></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <img src="./images/sub/sub7/greenTeaHeritage_bg03.png" alt="" />
                                        <p>비타C 그린티 엔자임 잡티 토닝 세럼</p>
                                        <span>상품 보러가기<img src="./images/sub/sub7/arr_r16_gray.png" alt="" /></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <img src="./images/sub/sub7/greenTeaHeritage_bg08.png" alt="" />
                                        <p>콜라겐 그린티 세라마이드 탄력장벽 <br />크림</p>
                                        <span>상품 보러가기<img src="./images/sub/sub7/arr_r16_gray.png" alt="" /></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </>
    );
};
