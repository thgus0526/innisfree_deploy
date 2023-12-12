import React from 'react';
import axios from 'axios';
import '../scss/sub6.scss'
import ProductListChild from './ProductListChild'

export default function Sub6SignInComponent({num, viewProductMethod}) {
    const [state, setState] = React.useState({
        isCount1: true, 
        isCount2: false, 
        isCount3: false,
        initPageNum: 1,
        pageNum1: 1,
        pageNum2: 2,
        pageNum3: 3,
        product: [],
        product2: [],
        product3: [],
        title: {
            txt1:'',
            txt2:''
        },
    })

    React.useEffect(()=>{ 
        let folderName = `sub6_${num}`;      
        axios({
            url:`./data/sub/${folderName}.json`,
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    path: folderName,
                    product: res.data.product,
                    product2: res.data.product2,
                    product3: res.data.product3,
                    title: {
                        txt1: res.data.title.txt1,
                        txt2: res.data.title.txt2
                    },
                });
            }
        })
        .catch((err)=>{
            console.log( err );
        });
    },[]);

    const onClickSetBtn=(e)=>{
        e.preventDefault();
        let isCount1 = state.isCount1;
        let isCount2 = state.isCount2;
        let isCount3 = state.isCount3; 
        if(state.isCount1){    
            isCount1 = false;
            isCount2 = true;
            isCount3 = false; 
            state.initPageNum = state.pageNum2;
            setState({
                ...state,
                initPageNum: state.pageNum1
            })
        } 
        else if(state.isCount2){
            isCount1 = false;
            isCount2 = false;
            isCount3 = true;
            state.initPageNum = state.pageNum3;
            setState({
                ...state,
                initPageNum: state.pageNum2
            })
        }
        else if(state.isCount3){
            isCount1 = true;
            isCount2 = false;
            isCount3 = false;
            state.initPageNum = state.pageNum1;
            setState({
                ...state,
                initPageNum: state.pageNum3
            })
        }
        setState({
            ...state,
            isCount1: isCount1,
            isCount2: isCount2,
            isCount3: isCount3
        })
    }

    return (
        <main id='sub6' className='sub-product-list'>
            <div className="content-container">
                <div className="customPick-box">
                    <div className="product-list-box">
                        <div className="hbox">
                            <strong>{state.title.txt1}</strong>  고민의 <strong>{state.title.txt2}</strong>  고객님들이 가장 많이 구매했어요
                        </div>
                        <div className="product-list-wrap">   
                            <ProductListChild initState={state} viewProductMethod={viewProductMethod}/>
                        </div>
                        <div className="btn-set-box">
                            <button onClick={onClickSetBtn}>
                                <span>새로운 추천을 받고 싶어요</span>
                                <p className='countPage'>
                                    <span>{state.initPageNum}</span> &nbsp;/ 3
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};