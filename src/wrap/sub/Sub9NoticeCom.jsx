import React from 'react';
import Sub9NoticeComChild from './Sub9NoticeComChild';
import axios from 'axios';
import './scss/sub9Notice.scss'

export default function Sub9NoticeCom(){
    const [state, setState] = React.useState({
        공지사항: []
    });

    React.useEffect(()=>{
        axios({
            url:'http://sieun.co.kr/innisfree/innisfree_notice_table_select.php',
            method:'GET'
        })
        .then((res)=>{
            console.log( 'AXIOS 성공!' );
            console.log(res.data);
            if(res.status===200){
                setState({
                    ...state,
                    공지사항: res.data,                 
                })
            }
            
        })
        .catch((err)=>{
            console.log( 'AXIOS 실패!' );
            console.log( err );
        });
        return;
    },[]);
    return (
        <div id='sub9Notice'>
                <h3>공지사항</h3>
                <Sub9NoticeComChild 공지사항={state.공지사항}/>
            </div>
    );
};
