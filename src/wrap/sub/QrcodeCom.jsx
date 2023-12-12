import React from 'react';
import './scss/qrcode.scss'

export default function QrcodeCom(){

    const [state,setState]=React.useState({
        qrcodeOn:false
    })

    const onclickbtn=(e)=>{
        e.preventDefault();
        if(state.qrcodeOn===false){
            setState({
                ...state,
                qrcodeOn:true
            })
        }
        else if(state.qrcodeOn===true){
            setState({
                ...state,
                qrcodeOn:false
            })
        }
    }
    return (
        <div id='qrcode' className={state.qrcodeOn?'open':''}>

                <div className='box off'>
                    <div className='off-text'>
                        <p>실시간 이니스프리<br />이야기 </p>
                    </div>
                </div>  
                <div className='box on'>
                <div className="on-text">
                    <span className='top'>대학생 에디터들의 뷰티팁을 <br />에디터에서 만나보세요.</span>
                </div>
                <div className="qr-box">
                    <img src="./images/sub/qrcode/qr.gif" alt="" />
                </div>
                <div className="on-text2">
                    <span className='bottom'>휴대폰으로 QR코드를 스캔하여 <br />모바일로 이동해주세요.</span>
                </div>
            </div>
            <div className="button-box">
                <button onClick={onclickbtn}></button>
            </div>
        </div>
    );
};