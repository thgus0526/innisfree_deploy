import React from 'react';
import './scss/sub9Insert.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { messageModal } from '../../reducer/messageModal';
import { useDispatch, useSelector } from 'react-redux';


export default function Sub9NoticeInsertFormCom () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selector = useSelector((state)=>state);

    const [state, setState]= React.useState({
        isSelect: false,
        유형: '',
        작성자: '',
        아이디: '',
        제목: '',
        내용: ''
    });
  
    // 타입
    const onChangeSelect=(e)=>{
        setState({
            ...state,
            유형:  e.target.value
        })
    }

    // 제목
    const onChangeSubject=(e)=>{
        setState({
            ...state,
            제목:  e.target.value
        })
    }

    //내용
    const onChangeContents=(e)=>{
        setState({
            ...state,
            내용:  e.target.value
        })
    }
   
    // 메세지모달 메소드
   const messageModalMethod=(msg)=>{
    const obj = {
        isMessageModal: true,
        isMsg: msg
    }
    dispatch(messageModal(obj));
}

    // 폼전송
    const onSubmitInsertForm=(e)=>{
        e.preventDefault();

        if(state.유형===''){
            messageModalMethod('유형을 선택해주세요.');
        }
        else if(state.제목===''){
            messageModalMethod('제목을 입력해주세요.');
        }
        else if(state.내용===''){
            messageModalMethod('내용을 입력해주세요.');
        }
        else {

            let formData = new FormData();
            formData.append('nType', state.유형);
            formData.append('nName', state.작성자);
            formData.append('nId', state.아이디);
            formData.append('nSubject', state.제목);
            formData.append('nContent', state.내용);

            axios({
                url:'http://sieun.co.kr/innisfree/innisfree_notice_table_insert.php',
                method: 'POST',
                data: formData
            })
            .then((res)=>{               
                if(res.status===200){   
                    if(res.data===1){                        
                        messageModalMethod('공지등록에 성공하였습니다.');
                        navigate('/sub9Notice');
                    }                 
                    else{
                        messageModalMethod('공지등록에 실패하였습니다. 확인 후 다시 시도해주세요.')
                    }
                    
                }
            })
            .catch((err)=>{
                console.log( err );
            });

        }
    }

    return (
        <div id='sub9Insert'>
                <div className="container">                                       
                    <div className="content">      
                        <div  className="insert-box">
                            <div className="insert-header">
                                <h2>공지사항</h2>                               
                            </div>                            
                            <div className="insert-list">
                                <form autoComplete='off' onSubmit={onSubmitInsertForm}>
                                    <div className="insert-form">
                                        <ul>
                                            <li>
                                                <div className="gap">   
                                                    <label  className='left-label' htmlFor="nType">유형<i>*</i></label>
                                                    <select name="nType" id="nType" onChange={onChangeSelect}>
                                                        <option value=""></option>
                                                        <option value="고객 센터">고객 센터</option>
                                                        <option value="매장 공지">매장 공지</option>
                                                        <option value="배송 공지">배송 공지</option>
                                                        <option value="쇼핑몰 공지">쇼핑몰 공지</option>
                                                        <option value="이벤트 공지">이벤트 공지</option>
                                                    </select>                                                    
                                                    <span className="icon-arrow-down"></span>
                                                </div>                                                
                                            </li>
                                            <li>
                                                <div className="gap">   
                                                    <span className='left-label'>작성자</span>                                                    
                                                    <div className="admin-name">{selector.adminsignIn.adminsignInData.name}</div>
                                                </div>                                                
                                            </li>
                                            <li>
                                                <div className="gap">                                                    
                                                    <span className='left-label'>아이디</span>
                                                    <div className="admin-id">{selector.adminsignIn.adminsignInData.id}</div> 
                                                </div>                                                
                                            </li>
                                            <li>
                                                <div className="gap">                                                    
                                                    <label className='left-label' htmlFor="subject">제목<i>*</i></label>
                                                    <input type="text" name='subject' id='subject'  onChange={onChangeSubject} value={state.제목} />
                                                </div>                                                
                                            </li>
                                            <li>
                                                <div className="gap">                                                    
                                                    <label className='left-label' htmlFor="contents">내용<i>*</i></label>
                                                    <textarea name="contents" id="contents" cols="30" rows="10"  onChange={onChangeContents} value={state.내용} ></textarea>
                                                </div>       
                                            </li>
                                        </ul>
                                    </div>  

                                    <div className="button-box">
                                        <button type='submit' onSubmit={onSubmitInsertForm}>등록</button>
                                    </div>  
                                </form> 
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    );
};