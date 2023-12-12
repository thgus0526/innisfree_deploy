import React from 'react';
import './scss/hpUpdateModal.scss';
import { useDispatch } from 'react-redux';
import { hpUpdateModal } from '../../reducer/hpUpdateModal';
import { confirmModal } from '../../reducer/confirmModal';
import { messageModal } from '../../reducer/messageModal';
import { signIn } from '../../reducer/signIn';
import { hpUpdateNumber } from '../../reducer/hpUpdateNumber';

export default function HpUpdateModal () {

    const dispatch = useDispatch();
    const messageModalMethod=(msg)=>{
        const obj = {
            isMessageModal: true,
            isMsg: msg
        }
        dispatch(messageModal(obj));
    }

    
    const confirmModalMethod=(msg)=>{
        const obj = {
            isConfirmModal: true,
            confirmMsg: msg,
            isSignInOk: false
        }
        dispatch(confirmModal(obj));
    }

    const [state, setState] = React.useState({
        isFinishBtn: false,
        hp1:'',
        hp2:'',
        isAuthenNumberBtn: false,
        isAuthenbox: false,
        isHpAuthenNumber: null,
    });

    const onClickClose=(e)=>{
        e.preventDefault();
        dispatch(hpUpdateModal(false));
    }
    const onChangeHp1=(e)=>{
        setState({
            ...state,
            hp1: e.target.value
        })
    }
    const onChangeHp2=(e)=>{
        setState({
            ...state,
            hp2: e.target.value
        })
    }

    const onClickAuthenModal=(e)=>{
        e.preventDefault();

        const regexp =  /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/g;
        const num = Math.floor(Math.random() * 900000 + 100000);
        let isAuthenNumberBtn = false;
        let isAuthenbox = false;

        if( regexp.test(state.hp1)===false ) {
            messageModalMethod('잘못된 휴대폰 번호입니다.');
        }
        else {
            confirmModalMethod(` ${num}` );
            isAuthenNumberBtn = false;
            isAuthenbox = true;
        }
        
        setState({
            ...state,
            isAuthenNumberBtn: isAuthenNumberBtn,
            isAuthenbox: isAuthenbox,
            isHpAuthenNumber: num
        })
    }

    const onClickHpAuthenOk=(e)=>{
        e.preventDefault();
        let isAuthenNumberBtn = false;
        let isAuthenbox = false;
        if( state.isHpAuthenNumber === Number(state.hp2) ){
            messageModalMethod('인증에 성공하였습니다.');
            isAuthenNumberBtn = true;
            isAuthenbox = false;
        }
        else {
            messageModalMethod('올바른 번호를 입력해 주세요.');
            isAuthenNumberBtn = true;
            isAuthenbox = true;
        }
        setState({
            ...state,
            isAuthenNumberBtn: isAuthenNumberBtn,
            isAuthenbox: isAuthenbox
        })
    }

    React.useEffect(()=>{
        if( state.hp1!=='' && state.hp2!=='' ){
            setState({
                ...state,
                isFinishBtn: true
            })
        }
        else {
            setState({
                ...state,
                isFinishBtn: false
            })
        }
    },[state.hp1, state.hp2])

    const onClickOkBtn=(e)=>{
        e.preventDefault();
        const regExp = /^(\d{3})(\d{3,4})(\d{4})$/g; 
        const result = state.hp1.replace(regExp, '$1-$2-$3');
        if( state.hp1!=='' ){
            dispatch(hpUpdateNumber(result));
            dispatch(hpUpdateModal(false));
            messageModalMethod('변경이 완료되었습니다.');
        }
        else {
            messageModalMethod('다시 한 번 인증해 주세요.');
        }
    }




    return (
        <div id='hp_update_modal'>
            <div className="container">
                <div className="view">
                    <div className='header_box'>
                        <h1>휴대전화 번호 변경</h1>
                        <a href="!#" onClick={onClickClose}><img src="./images/ico_close32_black.png" alt="" /></a>
                    </div>
                    <div className="content">
                        <div className='sub_title'>
                            <span>인증 받으실 휴대폰 번호를 입력하세요.</span>
                        </div>
                        <ul className="center">
                            <li className="input_box">
                                <h2>변경할 휴대전화 입력</h2>
                                <input 
                                    type="text" 
                                    name='userHp1' 
                                    id='userHp1'
                                    value={state.hp1}
                                    onChange={onChangeHp1}
                                />
                                <button onClick={onClickAuthenModal}>인증</button>
                            </li>
                            <li className="input_box">
                                <h2>발급된 인증번호 입력</h2>
                                <input 
                                    type="text" 
                                    name='userHp2' 
                                    id='userHp2'
                                    value={state.hp2}
                                    onChange={onChangeHp2}
                                />
                                <button onClick={onClickHpAuthenOk}>확인</button>
                            </li>
                        </ul>
                        <div className="bottom">
                            <span>인증완료 후 변경된 휴대전화 번호를 저장하시려면 인증완료 버튼을 반드시 눌러주시기 바랍니다.</span>
                        </div>
                    </div>
                    {
                        state.isFinishBtn && (
                            <div className="button_box">
                                <button onClick={onClickOkBtn}>인증완료</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
