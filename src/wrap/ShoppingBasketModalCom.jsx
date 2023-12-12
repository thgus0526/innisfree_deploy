import React, { useRef } from "react";
import './scss/shoppingBasketModal.scss';
import { useDispatch,useSelector } from "react-redux";
import { shoppingBasketModal } from "../reducer/shoppingBasketModal";

export default function ShoppingBasketModalCom ({quickMenuViewProduct}) {

    const dispatch = useDispatch();
    const selector = useSelector((state)=>state);
    const [isTrue, setIsTrue] = React.useState(false);

    const onClickClose=(e)=>{
        e.preventDefault();
        dispatch(shoppingBasketModal(false));
        const htmlEl = document.getElementsByTagName('html')[0];
        htmlEl.classList.remove('on');
    }

    React.useEffect(()=>{
        console.log(selector.quickMenuViewProduct.quickMenuViewProduct);
    },[])

    const onClickLogIn=(e)=>{
        e.preventDefault();
        dispatch(shoppingBasketModal(false));
        setTimeout(()=>{        
            window.location.pathname = '/signIn'
        },0);
    }

    const onClickLogUp=(e)=>{
        e.preventDefault();
        dispatch(shoppingBasketModal(false));
        setTimeout(()=>{        
            window.location.pathname = '/signUp'
        },0);
    }

    return (
        <div id="shoppingBasketModal">
            <div className="container">
                <h4 className="title">
                    장바구니
                </h4>
                <div className="basket-box">
                    <img src="./images/index/ico_nodate.png" alt="" />
                    <p>장바구니가 비어있습니다.</p>
                </div>
                <div className="login-box">
                    <button onClick={onClickLogIn}>로그인</button>
                    <button onClick={onClickLogUp}>회원 가입하고 혜택 받기</button>
                </div>
                <span>아직도 이니스프리 회원이 아니세요?</span>
                <button type="button" className="btn-close" onClick={onClickClose}></button>
            </div>
        </div>
    )
}