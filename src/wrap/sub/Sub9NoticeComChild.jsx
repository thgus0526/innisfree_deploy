import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function Sub9NoticeComChild({공지사항}){
    const navigate = useNavigate();
    const selector = useSelector((state)=>state);

    const onClickView =(e,item)=>{
        e.preventDefault();
        navigate('/sub9View',{state:item});
    }

    const onClickInsert=(e)=>{
        e.preventDefault();
        navigate('/sub9Insert');
    }

    return ( 
        <div className="content">
            <div className="sub-title">
                <p>총<strong>{공지사항.length}</strong>개</p>
            </div>
                <ul>
                        {
                            공지사항.length > 0 &&(
                            공지사항.map((item,idx)=>{
                                return(
                                <li key={item.번호} onClick={(e)=>onClickView(e, item)}>
                                    <ul>
                                        <li className='col1'>{item.번호}</li>
                                        <li className='col2'><div className="type"><span>{item.유형}</span>{item.제목}</div></li>
                                        <li className='col3'>{`${new Date(item.작성일).getFullYear()}.${new Date(item.작성일).getMonth()+1}.${new Date(item.작성일).getDate()}`}</li>
                                    </ul>
                                </li>
                                )
                            })
                            )
                        }
                </ul>
                {selector.adminsignIn.adminsignInData!==null&&
                    <div className="button-box">
                    <button className='insertBtn' onClick={onClickInsert}>글쓰기</button>
                </div>}
    </div>
    );
};
