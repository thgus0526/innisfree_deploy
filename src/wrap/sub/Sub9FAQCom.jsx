import React from 'react';


export default function Sub9FAQCom(){

    const [state,setState]=React.useState({
        btn1:false,
        btn2:false,
        btn3:false,
        btn4:false,
        btn5:false,
        btn6:false,
        btn7:false,
        btn8:false,
        btn9:false,
        btn10:false
    })

    const onClickBtn1=(e)=>{
        e.preventDefault();
        if(state.btn1===false){
            setState({
                ...state,
                btn1:true
            })
        }
        else{
            setState({
                ...state,
                btn1:false
            })
        }
    }
    const onClickBtn2=(e)=>{
        e.preventDefault();
        if(state.btn2===false){
            setState({
                ...state,
                btn2:true
            })
        }
        else{
            setState({
                ...state,
                btn2:false
            })
        }
    }
    const onClickBtn3=(e)=>{
        e.preventDefault();
        if(state.btn3===false){
            setState({
                ...state,
                btn3:true
            })
        }
        else{
            setState({
                ...state,
                btn3:false
            })
        }
    }
    const onClickBtn4=(e)=>{
        e.preventDefault();
        if(state.btn4===false){
            setState({
                ...state,
                btn4:true
            })
        }
        else{
            setState({
                ...state,
                btn4:false
            })
        }
    }
    const onClickBtn5=(e)=>{
        e.preventDefault();
        if(state.btn5===false){
            setState({
                ...state,
                btn5:true
            })
        }
        else{
            setState({
                ...state,
                btn5:false
            })
        }
    }
    const onClickBtn6=(e)=>{
        e.preventDefault();
        if(state.btn6===false){
            setState({
                ...state,
                btn6:true
            })
        }
        else{
            setState({
                ...state,
                btn6:false
            })
        }
    }
    const onClickBtn7=(e)=>{
        e.preventDefault();
        if(state.btn7===false){
            setState({
                ...state,
                btn7:true
            })
        }
        else{
            setState({
                ...state,
                btn7:false
            })
        }
    }
    const onClickBtn8=(e)=>{
        e.preventDefault();
        if(state.btn8===false){
            setState({
                ...state,
                btn8:true
            })
        }
        else{
            setState({
                ...state,
                btn8:false
            })
        }
    }
    const onClickBtn9=(e)=>{
        e.preventDefault();
        if(state.btn9===false){
            setState({
                ...state,
                btn9:true
            })
        }
        else{
            setState({
                ...state,
                btn9:false
            })
        }
    }
    const onClickBtn10=(e)=>{
        e.preventDefault();
        if(state.btn10===false){
            setState({
                ...state,
                btn10:true
            })
        }
        else{
            setState({
                ...state,
                btn10:false
            })
        }
    }

    return (
        <div id='sub9FAQ'>
                <div className="question-box">
                    <h3>TOP 10</h3>
                    <div className="question-list">
                        <ul>
                            <li onClick={onClickBtn1}>
                                <button><span>주문문의</span><p>Q. 주문건에 대해 결제 금액 영수증을 출력하고 싶어요.</p> <img src={`./images/sub/sub9/${!state.btn1?'arw_acd.png':'arw_acd_on.png'}`} alt="" />
                                </button>
                                <div className={`text-box${state.btn1?' on':''}`}>
                                    <span>공식 온라인몰 주문건에 대한 문의주신 결제 금액 영수증 출력은 [마이페이지 &gt; 주문/배송현황 &gt; 증빙서류 발급] 을 통해 영수증 출력 가능합니다. <br />
                                    (PC접속을 통해서만 가능하며, 이니스프리 APP을 통해서는 서비스 이용 불가한 점 양해 부탁드립니다.)
                                    </span>
                                </div>
                            </li>
                            <li onClick={onClickBtn2}>
                                <button><span>사이트이용</span><p>Q. 오프라인 매장 구매 내용을 확인하고 싶어요.</p> <img src={`./images/sub/sub9/${!state.btn2?'arw_acd.png':'arw_acd_on.png'}`} alt="" />
                                </button>
                                <div className={`text-box${state.btn2?' on':''}`}>
                                    <span>고객님께서 오프라인 매장에서 상품을 구매하신 내용은 아래 경로를 통하여 확인 가능합니다.<br />
                                    - APP 이용 시 : [이니스프리 APP &gt; 카테고리 &gt; 맨 하단 우측 3번째 스마트 영수증] 에서 확인 가능합니다. <br />
                                    - PC 이용 시 : [이니스프리 공식 온라인몰 홈페이지 &gt; 마이페이지 &gt; 주문배송현황 &gt; 구매내역 &gt; 매장]에서 확인 가능합니다.
                                    </span>
                                </div>
                            </li>
                            <li onClick={onClickBtn3}>
                                <button><span>교환문의</span><p>교환은 어떻게 하나요?</p> <img src={`./images/sub/sub9/${!state.btn3?'arw_acd.png':'arw_acd_on.png'}`} alt="" />
                                </button>
                                <div className={`text-box${state.btn3?' on':''}`}>
                                    <span><strong>상품 불량 및 오배송 등의 경우 동일 제품으로 교환 접수 가능</strong>상품이 마음에 들지 않거나 고객 변심에 의한 경우 <br />
                                    반품 후 재구매로 진행 필요한 점 안내드립니다</span>
                                    <span>* 상품 불량 및 오배송으로 교환을 원하시는 경우에는 아래 순서로 신청하여 주시면 내용 확인 후 교환 조치해 드립니다. <br />
                                    1. [마이페이지 &gt; 내 주문관리 &gt; 교환신청]에서 접수 <br />
                                    2. [고객센터 &gt; 1:1 고객 상담] 또는 고객상담실(수신자 요금 부담) 080-380-0114로 연락주셔야만 회수접수가 가능하니 꼭 상담실로 연락해주세요. <br />
                                    3. 회수신청이 접수되면 제품 회수를 위해 배송받으신 주소로 이니스프리 지정 택배사에서(CJ대한통운택배) 영업일 기준 1~3일 내 직접 방문하여 상품을 수거합니다. <br />
                                    4. 회수상품 물류 검수 완료 후 새로운 제품으로 출고</span>
                                    <span>
                                    * 교환 제품이 1~2일내 준비하여 출고되며,출고 이 후 CJ대한통운을 통해 택배사 사정에 따라 평일 1~3일내 배송됩니다. <br />
                                    ※입고 시간이 소요되는 제품인 경우 추가 시간이 소요될 수 있습니다. 
                                    </span>
                                </div>
                            </li>
                            <li onClick={onClickBtn4}>
                                <button><span>정보변경</span><p>Q. 마이샵 변경은 어떻게 하나요?</p> <img src={`./images/sub/sub9/${!state.btn4?'arw_acd.png':'arw_acd_on.png'}`} alt="" />
                                </button>
                                <div className={`text-box${state.btn4?' on':''}`}>
                                    <span>마이샵 변경은 등록일로부터 1년 이후 변경이 가능합니다.  <br />
                                    (ex. 2019-01-01일 등록, 2020-01-02일부터 변경가능)
                                    </span>
                                    <span>
                                    중도 변경을 원하실 경우, 고객상담실로 연락 부탁드립니다. <br />
                                    TEL : 080-380-0114 [평일 9:00~18:00 / 12:00~13:00 점심]
                                    </span>
                                </div>
                            </li>
                            <li onClick={onClickBtn5}>
                                <button><span>사이트이용</span><p>Q. 온라인(공식몰)에서도 그린티클럽키트를 신청할 수 있나요?</p> <img src={`./images/sub/sub9/${!state.btn5?'arw_acd.png':'arw_acd_on.png'}`} alt="" />
                                </button>
                                <div className={`text-box${state.btn5?' on':''}`}>
                                    <span>공식 온라인몰에서도 신청이 가능합니다. (공식 온라인몰 or 오프라인 매장 선택) <br />
                                    단, 배송비 2,500원이 부과됩니다.
                                    </span>
                                    <span>  
                                        오직 그린티클럽 고객님들께만 드리는 그린티클럽 키트! <br />
                                        더욱 다양하고 풍부해진 그린티클럽 키트를 받아가세요! <br />
                                        그린티클럽 키트 신청 기간과 수령 기간은 사이트 내 이벤트, 공지 사항을 통해 안내되며, 해당 기간에만 신청 및 수령 가능합니다.
                                    </span>
                                    <span>* 연 2회 게릴라성 진행</span>
                                    <span>* 신청후 지정하신 매장에서 수령가능</span>
                                </div>
                            </li>
                            <li onClick={onClickBtn6}>
                                <button><span>배송문의</span><p>Q. 묶음배송 되나요?</p> <img src={`./images/sub/sub9/${!state.btn6?'arw_acd.png':'arw_acd_on.png'}`} alt="" />
                                </button>
                                <div className={`text-box${state.btn6?' on':''}`}>
                                    <span>묶음 배송의 경우 물류 시스템에서 자동으로 묶음배송 처리될 경우에만 가능하며, 임의로 묶음배송은 어려운 점 양해부탁드립니다.</span>
                                </div>
                            </li>
                            <li onClick={onClickBtn7}>
                                <button><span>결제문의</span><p>Q. 면세점, 오픈마켓에서 구매한 것도 회원등급에 반영되나요?</p> <img src={`./images/sub/sub9/${!state.btn7?'arw_acd.png':'arw_acd_on.png'}`} alt="" />
                                </button>
                                <div className={`text-box${state.btn7?' on':''}`}>
                                    <span>이니스프리 오프라인 매장 또는 공식 온라인 몰에서 구매한 실적만 등급 산정에 반영되며, 그 외 오픈마켓, 면세점 등에서 구매한 내역은 별도 멤버십 산정에 포함되지 않는 점 안내드립니다.</span>
                                </div>
                            </li>
                            <li onClick={onClickBtn8}>
                                <button><span>쿠폰</span><p>Q. 생일 쿠폰이 왜 발행되지 않나요?</p> <img src={`./images/sub/sub9/${!state.btn8?'arw_acd.png':'arw_acd_on.png'}`} alt="" />
                                </button>
                                <div className={`text-box${state.btn8?' on':''}`}>
                                    <span>
                                        생일 혜택은 고객님의 등급이 VIP,그린티클럽 이면 받으실 수 있어요! <br />
                                        쿠폰은 생일 당일 발급되며, 발급 당일포함 7일내 사용 가능합니다.
                                    </span>
                                    <span>혜택 : 생일 축하 40% 쿠폰 증정</span>
                                    <span>- 최대 주문 금액 20만원(정상가 기준)</span>
                                    <span>- 공식 온라인 몰 또는 오프라인 매장에서 1회 사용 가능</span>
                                    <span>- 할인 불가 품목 제외</span>
                                </div>
                            </li>
                            <li onClick={onClickBtn9}>
                                <button><span>정보변경</span><p>Q. 원클릭 결제 카드 삭제하고 싶어요</p> <img src={`./images/sub/sub9/${!state.btn9?'arw_acd.png':'arw_acd_on.png'}`} alt="" />
                                </button>
                                <div className={`text-box${state.btn9?' on':''}`}>
                                    <span>PC : 이니스프리 홈페이지 &gt; 마이페이지 &gt; 내 정보 관리 &gt; 원클릭결제 카드관리 페이지에서 등록된 카드 삭제 가능합니다.</span>
                                    <span>APP : 이니스프리 APP &gt; 왼쪽 상단 메뉴 &gt; 원클릭결제 카드관리 &gt; 카드등록 바로가기 페이지에서 등록된 카드 삭제 가능합니다.												</span>
                                </div>
                            </li>
                            <li onClick={onClickBtn10}>
                                <button><span>정보변경</span><p>Q. 마이샵 등록은 어떻게 하나요?</p> <img src={`./images/sub/sub9/${!state.btn10?'arw_acd.png':'arw_acd_on.png'}`} alt="" />
                                </button>
                                <div className={`text-box${state.btn10?' on':''}`}>
                                    <span>SNS 계정 혹은 비회원은 등록이 불가하며, 이니스프리 통합회원 정보로 로그인 후 등록 가능합니다.  <br />
                                    </span>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <span>- PC : 마이페이지 내 마이샵 관리 클릭 후 등록 가능합니다. 고객센터 매장안내 창 내에서도 등록 가능합니다. </span>
                                    <span>- APP : 마이페이지 내  마이샵 관리 클릭 후 등록 가능합니다.  어플 좌측 상단 메뉴 창 클릭 매장안내 창 내에서도 등록 가능합니다.  </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    );
};
