import React from 'react';
import axios from 'axios';
import ProductAgeListChildSubTab from './ProductAgeListChildSubTab';

export default function ProdctAgeListChild2({initState, num, viewProductMethod}) {

    const [state, setState] = React.useState({
        subtab1: true,
        subTab1: []
    })

    React.useEffect(()=>{ 
        axios({
            url: './data/sub/sub6_6_2.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    subTab1: res.data.subTab1
                });
            }
        })
        .catch((err)=>{
            console.log( err );
        });
    },[]);

    return (
        <div>
            {
                initState.isTab2 &&      
                (                    
                <div className="product-list-wrap">
                    <ol className='rank-list'>
                        <li className={`${state.subtab1 === true ? 'on' : ''}`}><button className='rank-btn'><span className='num'>1</span> 레티놀</button></li>
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
                </div>
                )
            }    
        </div>
    );
};
