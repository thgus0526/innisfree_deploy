import React from 'react';
import '../scss/sub6.scss';
import ProdctAgeListChild from './ProductAgeListChild';
import ProdctAgeListChild2 from './ProductAgeListChild2';
import ProdctAgeListChild3 from './ProductAgeListChild3';
import ProdctAgeListChild4 from './ProductAgeListChild4';
import ProdctAgeListChild5 from './ProductAgeListChild5';
import ProdctAgeListChild6 from './ProductAgeListChild6';

export default function ProductAgeList({viewProductMethod}) {
    
    const [state, setState] = React.useState({
        isTab1: true,
        isTab2: false,
        isTab3: false,
        isTab4: false,
        isTab5: false,
        isTab6: false,
    })

    const onClickTab=(e, parameter)=>{
        e.preventDefault();
        let isTab1 = state.isTab1;
        let isTab2 = state.isTab2;
        let isTab3 = state.isTab3;
        let isTab4 = state.isTab4;        
        let isTab5 = state.isTab5;        
        let isTab6 = state.isTab6;        
        if(parameter === 'tab1'){
            isTab1 = true;
            isTab2 = false;
            isTab3 = false;
            isTab4 = false;
            isTab5 = false;
            isTab6 = false;
        }
        else if(parameter === 'tab2'){
            isTab1 = false;
            isTab2 = true;
            isTab3 = false;
            isTab4 = false;
            isTab5 = false;
            isTab6 = false;
        }
        else if(parameter === 'tab3'){
            isTab1 = false;
            isTab2 = false;
            isTab3 = true;
            isTab4 = false;
            isTab5 = false;
            isTab6 = false;
        }
        else if(parameter === 'tab4'){
            isTab1 = false;
            isTab2 = false;
            isTab3 = false;
            isTab4 = true;
            isTab5 = false;
            isTab6 = false;
        }
        else if(parameter === 'tab5'){
            isTab1 = false;
            isTab2 = false;
            isTab3 = false;
            isTab4 = false;
            isTab5 = true;
            isTab6 = false;
        }
        else if(parameter === 'tab6'){
            isTab1 = false;
            isTab2 = false;
            isTab3 = false;
            isTab4 = false;
            isTab5 = false;
            isTab6 = true;
        }
        setState({
            ...state,
            isTab1: isTab1,
            isTab2: isTab2,
            isTab3: isTab3,
            isTab4: isTab4,
            isTab5: isTab5,
            isTab6: isTab6,
        })
    }

    return (
        <main id='sub6' className='sub'>
            <div className="content-container">
                <div className="customPick-box">
                    <div className="product-list-box">
                        <div className="hbox">
                            <strong>같은 연령대</strong> 고객님들이 가장 많이 검색하고 있어요.
                        </div>
                        <div className="age-tabmenu">
                            <ul>
                                <li className={`${state.isTab1 === true ? ' active' : ' none'}`} onClick={(e)=>onClickTab(e, 'tab1')}><button>전체</button></li>
                                <li className={`${state.isTab2 === true ? ' active' : ' none'}`} onClick={(e)=>onClickTab(e, 'tab2')}><button>10대</button></li>
                                <li className={`${state.isTab3 === true ? ' active' : ' none'}`} onClick={(e)=>onClickTab(e, 'tab3')}><button>20대</button></li>
                                <li className={`${state.isTab4 === true ? ' active' : ' none'}`} onClick={(e)=>onClickTab(e, 'tab4')}><button>30대</button></li>
                                <li className={`${state.isTab5 === true ? ' active' : ' none'}`} onClick={(e)=>onClickTab(e, 'tab5')}><button>40대</button></li>
                                <li className={`${state.isTab6 === true ? ' active' : ' none'}`} onClick={(e)=>onClickTab(e, 'tab6')}><button>50대</button></li>
                            </ul>
                        </div>            
                        <ProdctAgeListChild initState={state} viewProductMethod={viewProductMethod}/>   
                        <ProdctAgeListChild2 initState={state} viewProductMethod={viewProductMethod}/>   
                        <ProdctAgeListChild3 initState={state} viewProductMethod={viewProductMethod}/>   
                        <ProdctAgeListChild4 initState={state} viewProductMethod={viewProductMethod}/>   
                        <ProdctAgeListChild5 initState={state} viewProductMethod={viewProductMethod}/>   
                        <ProdctAgeListChild6 initState={state} viewProductMethod={viewProductMethod}/>   
                    </div>
                </div>
            </div>
        </main>
    );
};