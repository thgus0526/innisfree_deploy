import React from 'react';
import axios from 'axios';
import ProductAgeListChildSubTab from './ProductAgeListChildSubTab';

export default function ProdctAgeListChild({initState, num, viewProductMethod}) {

    const [state, setState] = React.useState({
        subtab1: true,
        subtab2: false,
        subtab3: false,
        subtab4: false,
        subtab5: false,
        subtab6: false,
        subtab7: false,
        subTab1: [],
        subTab2: [],
        subTab3: [],
        subTab4: [],
        subTab5: [],
        subTab6: [],
        subTab7: [],
    })

    React.useEffect(()=>{ 
        axios({
            url: './data/sub/sub6_6_6.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    subTab1: res.data.subTab1,
                    subTab2: res.data.subTab2,
                    subTab3: res.data.subTab3,
                    subTab4: res.data.subTab4,
                    subTab5: res.data.subTab5,
                    subTab6: res.data.subTab6,
                    subTab7: res.data.subTab7
                });
            }
        })
        .catch((err)=>{
            console.log( err );
        });
    },[]);

    const onClickSubTab=(e, parameter)=>{
        e.preventDefault();
        let subtab1 = state.subtab1;
        let subtab2 = state.subtab2;  
        let subtab3 = state.subtab3;  
        let subtab4 = state.subtab4;  
        let subtab5 = state.subtab5;  
        let subtab6 = state.subtab6;  
        let subtab7 = state.subtab7; 
        if(parameter === 'subtab1'){
            subtab1 = true;
            subtab2 = false;
            subtab3 = false;
            subtab4 = false;
            subtab5 = false;
            subtab6 = false;
            subtab7 = false;
        }
        else if(parameter === 'subtab2'){
            subtab1 = false;
            subtab2 = true;
            subtab3 = false;
            subtab4 = false;
            subtab5 = false;
            subtab6 = false;
            subtab7 = false;
        }
        else if(parameter === 'subtab3'){
            subtab1 = false;
            subtab2 = false;
            subtab3 = true;
            subtab4 = false;
            subtab5 = false;
            subtab6 = false;
            subtab7 = false;
        }
        else if(parameter === 'subtab4'){
            subtab1 = false;
            subtab2 = false;
            subtab3 = false;
            subtab4 = true;
            subtab5 = false;
            subtab6 = false;
            subtab7 = false;
        }
        else if(parameter === 'subtab5'){
            subtab1 = false;
            subtab2 = false;
            subtab3 = false;
            subtab4 = false;
            subtab5 = true;
            subtab6 = false;
            subtab7 = false;
        }
        else if(parameter === 'subtab6'){
            subtab1 = false;
            subtab2 = false;
            subtab3 = false;
            subtab4 = false;
            subtab5 = false;
            subtab6 = true;
            subtab7 = false;
        }
        else if(parameter === 'subtab7'){
            subtab1 = false;
            subtab2 = false;
            subtab3 = false;
            subtab4 = false;
            subtab5 = false;
            subtab6 = false;
            subtab7 = true;
        }
        setState({
            ...state,
            subtab1: subtab1,
            subtab2: subtab2,
            subtab3: subtab3,
            subtab4: subtab4,
            subtab5: subtab5,
            subtab6: subtab6,
            subtab7: subtab7,
        })
    }

    return (
        <div>
            {
                initState.isTab6 &&      
                (                    
                <div className="product-list-wrap">
                    <ol className='rank-list'>
                        <li className={`${state.subtab1 === true ? 'on' : ''}`}><button className='rank-btn' onClick={(e)=>onClickSubTab(e, 'subtab1')}><span className='num'>1</span>블루베리</button></li>
                        <li className={`${state.subtab2 === true ? 'on' : ''}`}><button className='rank-btn' onClick={(e)=>onClickSubTab(e, 'subtab2')}><span className='num'>2</span>시카</button></li>
                        <li className={`${state.subtab3 === true ? 'on' : ''}`}><button className='rank-btn' onClick={(e)=>onClickSubTab(e, 'subtab3')}><span className='num'>3</span>핸드마스크</button></li>
                        <li className={`${state.subtab4 === true ? 'on' : ''}`}><button className='rank-btn' onClick={(e)=>onClickSubTab(e, 'subtab4')}><span className='num'>4</span>그린티</button></li>
                        <li className={`${state.subtab5 === true ? 'on' : ''}`}><button className='rank-btn' onClick={(e)=>onClickSubTab(e, 'subtab5')}><span className='num'>5</span>스키니마스카라</button></li>
                        <li className={`${state.subtab6 === true ? 'on' : ''}`}><button className='rank-btn' onClick={(e)=>onClickSubTab(e, 'subtab6')}><span className='num'>6</span>체험</button></li>
                        <li className={`${state.subtab7 === true ? 'on' : ''}`}><button className='rank-btn' onClick={(e)=>onClickSubTab(e, 'subtab7')}><span className='num'>7</span>립밤</button></li>
                    </ol>
                    {
                        state.subtab1 && 
                        (
                            state.subTab1.map((item, idx)=>{
                                return (
                                    <ProductAgeListChildSubTab subProduct={item.subProduct} viewProductMethod={viewProductMethod}/> 
                                )
                            })
                        )
                    }    
                    {
                        state.subtab2 && 
                        (
                            state.subTab2.map((item, idx)=>{
                                return (
                                    <ProductAgeListChildSubTab subProduct={item.subProduct} viewProductMethod={viewProductMethod}/> 
                                )
                            })
                        )
                    }         
                    {
                        state.subtab3 && 
                        (
                            state.subTab3.map((item, idx)=>{
                                return (
                                    <ProductAgeListChildSubTab subProduct={item.subProduct} viewProductMethod={viewProductMethod}/> 
                                )
                            })
                        )
                    }      
                    {
                        state.subtab4 && 
                        (
                            state.subTab4.map((item, idx)=>{
                                return (
                                    <ProductAgeListChildSubTab subProduct={item.subProduct} viewProductMethod={viewProductMethod}/> 
                                )
                            })
                        )
                    }        
                    {
                        state.subtab5 && 
                        (
                            state.subTab5.map((item, idx)=>{
                                return (
                                    <ProductAgeListChildSubTab subProduct={item.subProduct} viewProductMethod={viewProductMethod}/> 
                                )
                            })
                        )
                    }     
                    {
                        state.subtab6 && 
                        (
                            state.subTab6.map((item, idx)=>{
                                return (
                                    <ProductAgeListChildSubTab subProduct={item.subProduct} viewProductMethod={viewProductMethod}/> 
                                )
                            })
                        )
                    }      
                    {
                        state.subtab7 && 
                        (
                            state.subTab7.map((item, idx)=>{
                                return (
                                    <ProductAgeListChildSubTab subProduct={item.subProduct} viewProductMethod={viewProductMethod}/> 
                                )
                            })
                        )
                    }  
                </div>
                )
            }
        </div>
    );
};
