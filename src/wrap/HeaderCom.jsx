import React from "react";
import './scss/header.scss';
import {Link, Outlet, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { searchModal } from "../reducer/searchModal";
import { shoppingBasketModal } from "../reducer/shoppingBasketModal";
import { useNavigate } from "react-router-dom";
import { signIn } from "../reducer/signIn";
import {adminsignIn} from "../reducer/adminsignIn";
import { messageModal } from "../reducer/messageModal";

export default function HeaderCom () {

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    const navigate = useNavigate();

    const searchSlide = React.useRef();
    const gnbMenu = React.useRef();

    React.useEffect(()=>{
        searchSlide.current.style.height = `${50 * 3}px`;
    },[]);

    

    
    const [state,setState] = React.useState({
        isFixed: false,
        isDrop: false,
        isMypage: false
    });

    const [cnt, setCnt] = React.useState(0);
    const [toggle, setToggle] = React.useState(0);

    const searchUpSlide=()=>{
        searchSlide.current.style.transition = 'all 0.3s ease-in';
        searchSlide.current.style.marginTop = `${-50 * cnt}px`;
        if(cnt>2) {
            searchSlide.current.style.transition = 'none';
            searchSlide.current.style.marginTop = 0;
            setTimeout(()=>{
                setToggle(0);
                setCnt(0);
            },10);

        }
    }

    React.useEffect(()=>{
        if(toggle===0){
            searchUpSlide();
        }
        else {
            setToggle(0);
            searchUpSlide();
        }
    },[cnt]);

    React.useEffect(()=>{
        let setId = 0;
        setId = setInterval(()=>{
            setCnt(cnt => cnt+1);
        }, 3000);
        return () => clearInterval(setId);
    },[]);

    React.useEffect(()=>{

        let row3Top = gnbMenu.current.offsetTop+50;
        window.addEventListener('scroll', function(){
            if(window.scrollY>=row3Top){
                setState({
                    ...state,
                    isFixed: true
                });
            }
            else {
                setState({
                    ...state,
                    isFixed: false
                });
            }
        });
    },[]);

    const onMouseEnterNav=()=>{
        setState({
            ...state,
            isDrop: true
        })
    }

    const onMouseLeaveNav=()=>{
        setState({
            ...state,
            isDrop: false
        })
    }

    const onClickSearch=(e)=>{
        e.preventDefault();
        dispatch(searchModal(true));
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }

    const onClickShoppingBasket=(e)=>{
        e.preventDefault();
        dispatch(shoppingBasketModal(true));
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.add('on');
    }

     // 메세지모달 메소드
   const messageModalMethod=(msg)=>{
    const obj = {
        isMessageModal: true,
        isMsg: msg
    }
    dispatch(messageModal(obj));
}

    const onClickLogIn=(e)=>{
        e.preventDefault();
        if(selector.adminsignIn.adminsignInData!==null){
            localStorage.removeItem('INNISFREE_ADMINSIGNIN_DATA');
            dispatch(adminsignIn(null));
            messageModalMethod('안전하게 로그아웃 되었습니다.');
            navigate('/signIn');
        }
        else{
            navigate('/signIn');
        }
    }
    const onClickMyPage=(e)=>{
        e.preventDefault();
        navigate('/mypage');
    }

    const onClickLogOut=(e)=>{
        e.preventDefault();
        dispatch(signIn(null));
        localStorage.removeItem('INNISFREE_SIGNIN_DATA');
        sessionStorage.removeItem('INNISFREE_ADDRESS_KEY');
        navigate('/index');
    }
     
    
    const onClickAdminLogIn=(e)=>{
        e.preventDefault();
        if(selector.signIn.signInData!==null){
            localStorage.removeItem('INNISFREE_SIGNIN_DATA');
            dispatch(signIn(null));
            messageModalMethod('안전하게 로그아웃 되었습니다.');
            navigate('/adminsignIn');
        }
        else{
            navigate('/adminsignIn');
        }
    }
    
    const onClickAdminLogOut=(e)=>{
        e.preventDefault();
        dispatch(adminsignIn(null));
        localStorage.removeItem('INNISFREE_ADMINSIGNIN_DATA');
        messageModalMethod('안전하게 로그아웃 되었습니다.');
        navigate('/index');
    }
    return (
        <>
            <div id="header">
                <div className="my-util">
                    <div className="logo"><Link to='/index'></Link></div>
                    <div className="header-search">
                        <form action="" name="topSearchFrm" id="topSearchFrm" method="GET">
                            <fieldset className="keyword-input" onClick={onClickSearch}>
                                <input type="text" className="input-txt" id="querytop" autoComplete="off" />
                                <button type="button" className="btn-search"></button>
                                <div className="keyword-rolling">
                                    <ul ref={searchSlide}>
                                        <li>
                                            <span>나의 첫 슬로우에이징, NEW 콜라겐 크림</span>
                                            <a href="!#">바로가기</a>
                                        </li>
                                        <li>
                                            <span>현대카드 M포인트니까! 최대 50%</span>
                                            <a href="!#">바로가기</a>
                                        </li>
                                        <li>
                                            <span>나의 첫 슬로우에이징, NEW 콜라겐 크림</span>
                                            <a href="!#">바로가기</a>
                                        </li>
                                    </ul>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="list-my-util">
                            {
                                selector.signIn.signInData===null &&
                                <button type="button" className="btn-login" onClick={onClickLogIn}><span className="name">로그인</span></button>
                            }   
                   
                            {
                                selector.signIn.signInData!==null&&
                                <button type="button" className="btn-logOut" onClick={onClickLogOut}><span className="name">로그아웃</span></button>
                            }
                            {
                                localStorage.getItem('INNISFREE_SIGNIN_DATA')!==null && (
                                    <button type="button" className="btn-mypage" onClick={onClickMyPage}><span className="name" >마이페이지</span></button>
                                )
                            }
                                <button type="button" className="btn-cart-count" onClick={onClickShoppingBasket}><span className="name">장바구니</span><span className="count">0</span></button>
                        
                            {
                                selector.adminsignIn.adminsignInData===null &&(
                                <button type="button" className="btn-admin" onClick={onClickAdminLogIn}><span className="name">관리자</span></button>
                                )
                            }
                            {
                                selector.adminsignIn.adminsignInData!==null &&(
                                <button type="button" className="btn-admin-on" onClick={onClickAdminLogOut}><span className="name">{selector.adminsignIn.adminsignInData.name}님</span></button>
                                )
                            }
                    </div>
                </div>
                <div id="gnbMenu" className={`gnb-menu${state.isFixed?' fixed':''}`} ref={gnbMenu}>
                    <div className="inner">
                        <div className="logo"></div>
                        <nav className="nav-gnb">
                            <button type="button" className={`btn-category${state.isDrop?' on':''}`} onMouseEnter={onMouseEnterNav}>카테고리</button>
                            <ul className="gnb-list">
                                <li>
                                    <Link to='/sub1'>
                                    특가
                                    <strong className="icon-mark"><span className="ir">강조</span></strong>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/sub2'>이벤트</Link>
                                </li>
                                <li>
                                    <Link to='/sub3'>베스트</Link>
                                </li>
                                <li>
                                    <Link to='/sub4'>쇼케이스</Link>
                                </li>
                                <li>
                                    <Link to='/sub5'>라이브</Link>
                                </li>
                                <li>
                                    <Link to='/sub6'>FOR ME</Link>
                                </li>
                                <li className="active">
                                <Link to='/sub7'>ABOUT</Link>
                                </li>
                            </ul>
                            <div className="list-my-util">
                                <button type="button" className="btn-search" onClick={onClickSearch}></button>
                                <button type="button" className="btn-login"></button>
                                <button type="button" className="btn-mypage"></button>
                                <button type="button" className="btn-cart-count"><span className="count">0</span></button>
                            </div>
                        </nav>
                    </div>
                    <div className="nav-category">
                        {
                            state.isDrop && (
                                <nav className="drop-category" onMouseLeave={onMouseLeaveNav}>
                                    <div className="inner">
                                        <ul className="list">
                                            <li className="active">
                                                <a href="!#">스킨케어</a>
                                                <ul id="smenuUA">
                                                    <li><a href="!#">에센스/세럼/앰플</a></li>
                                                    <li><a href="!#">로션/크림</a></li>
                                                    <li><a href="!#">스킨/토너/미스트</a></li>
                                                    <li><a href="!#">선케어</a></li>
                                                    <li><a href="!#">클렌징</a></li>
                                                    <li><a href="!#">팩/마스크</a></li>
                                                    <li><a href="!#">립/아이케어</a></li>
                                                    <li><a href="!#">오일/마사지</a></li>
                                                    <li><a href="!#">기획 세트</a></li>
                                                    <li><a href="!#">기타</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="!#">메이크업</a>
                                                <ul id="smenuQW">
                                                    <li><a href="!#">페이스메이크업</a></li>
                                                    <li><a href="!#">아이메이크업</a></li>
                                                    <li><a href="!#">립메이크업</a></li>
                                                    <li><a href="!#">네일</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="!#">남성</a>
                                                <ul id="smenuUB">
                                                    <li><a href="!#">스킨케어</a></li>
                                                    <li><a href="!#">클렌징</a></li>
                                                    <li><a href="!#">기획 세트</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="!#">헤어/바디/펫</a>
                                                <ul id="smenuQF">
                                                    <li><a href="!#">펫</a></li>
                                                    <li><a href="!#">핸드/풋케어</a></li>
                                                    <li><a href="!#">바디 로션/미스트</a></li>
                                                    <li><a href="!#">바디 워시/청결제</a></li>
                                                    <li><a href="!#">헤어 에센스/미스트</a></li>
                                                    <li><a href="!#">샴푸/트리트먼트</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="!#">기획 세트</a>
                                                <ul className="smenuUT">
                                                    <li><a href="!#">기획 세트</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="!#">미용소품</a>
                                                <ul id="smenuUK">
                                                    <li><a href="!#">브러시</a></li>
                                                    <li><a href="!#">네일 소품</a></li>
                                                    <li><a href="!#">헤어/바디 소품</a></li>
                                                    <li><a href="!#">퍼프/스펀지</a></li>
                                                    <li><a href="!#">화장솜/면봉/기름종이</a></li>
                                                    <li><a href="!#">클렌징 소품</a></li>
                                                    <li><a href="!#">기타 소품</a></li>
                                                </ul>
                                            </li>
                                            <li id="tp3Frist">
                                                <a href="!#"> 피부고민</a>
                                                <ul>
                                                    <li id="gominList1"><a href="!#">수분/보습/속건조</a></li>
                                                    <li id="gominList1"><a href="!#">모공/피지/블랙헤드</a></li>
                                                    <li id="gominList1"><a href="!#">주름/탄력</a></li>
                                                    <li id="gominList1"><a href="!#">트러블/리페어</a></li>
                                                    <li id="gominList1"><a href="!#">각질/피부결</a></li>
                                                    <li id="gominList1"><a href="!#">잡티/피부톤</a></li>
                                                    <li id="gominList1"><a href="!#">영양/토탈안티에이징</a></li>
                                                    <li id="gominList1"><a href="!#">진정/민감</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            )
                        }
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}