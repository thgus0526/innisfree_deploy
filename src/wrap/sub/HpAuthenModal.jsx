// import React from 'react';
// import './scss/hpAuthenModal.scss';
// import { useDispatch } from 'react-redux';
// import { confirmModal } from '../reducer/confirmModal';

// export default function HpAuthenModal () {

//     const dispatch = useDispatch();

//     const confirmModalMethod=(value)=>{
//         const obj = {
//             isConfirmModal: value,
//             confirmMsg: '',
//             isSignInOk: false
//         }
//         dispatch(confirmModal(obj));
//     }

//     // 인증 모달창 닫기
//     const onClickClose=(e)=>{
//         e.preventDefault();
//         dispatch(confirmModalMethod(false));
//     }

//     return (
//         <div id='hp_authen_modal'>
//             <div className="container">
//                 <div className="content">
//                     <div className="title">
//                         <h3>인증번호 :</h3> <h2>num</h2>
//                     </div>
//                     <ul className="text_box">
//                         <li><h4>발급된 인증번호를</h4></li>
//                         <li><h4>닫기 버튼을 누른 후</h4></li>
//                         <li><h4>인증번호 확인 상자에 입력해주세요.</h4></li>
//                     </ul>
//                     <button onClick={onClickClose}>닫기</button>
//                 </div>
//             </div>
//         </div>
//     );
// };
