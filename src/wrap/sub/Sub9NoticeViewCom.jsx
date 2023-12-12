import React from 'react';
import './scss/sub9NoticeView.scss';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { messageModal } from '../../reducer/messageModal';
export default function Sub9NoticeViewCom(){
    const selector = useSelector((state)=>state);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const onClickList=(e)=>{
        e.preventDefault();
        navigate('/sub9Notice');
    }
    const onClickUpdate=(e)=>{
        e.preventDefault();
        navigate('/sub9Update',{state: location.state}); 
    }
    
      // 메세지모달 메소드
      const messageModalMethod=(msg)=>{
        const obj = {
            isMessageModal: true,
            isMsg: msg
        }
        dispatch(messageModal(obj));
    }

    const onClickDelete=(e)=>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('idx', location.state.번호);

        axios({
            url:'http://sieun.co.kr/innisfree/innisfree_notice_table_delete.php',
            method: 'POST',
            data: formData
        })
        .then((res)=>{               
            if(res.status===200){   
                if(res.data===1){                        
                    messageModalMethod('공지가 삭제 되었습니다.');
                    navigate('/sub9Notice');
                }                 
                else{
                    messageModalMethod('공지 삭제에 실패하였습니다. 확인 후 다시 시도해주세요.');
                }
                
            }
        })
        .catch((err)=>{
            console.log( err );
        });

    }
    
    return (
        <div id='sub9NoticeView'>
            <div className="container">
                <div className="title">
                    <span>{location.state.유형}</span>
                    <h3>{location.state.제목}</h3>
                    <p>{`${new Date(location.state.작성일).getFullYear()}.${new Date(location.state.작성일).getMonth()+1}.${new Date(location.state.작성일).getDate()}`}</p>
                </div>
                <div className="content">
                    {
                            location.state.내용.split('<br />').map((item)=>{
                                return(
                                        <p>{item}</p>
                                    )
                                })
                    }
                </div>
                <div className="button-box">
                    {selector.adminsignIn.adminsignInData!==null&&<button onClick={onClickUpdate}>수정</button>}
                    <button onClick={onClickList}>목록</button>
                    {selector.adminsignIn.adminsignInData!==null&&<button onClick={onClickDelete}>삭제</button>}
                </div>
            </div>
        </div>
    );
};

