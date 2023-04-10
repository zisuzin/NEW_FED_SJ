// 제이쿼리로 구현한 자동페이지 휠 JS : jquery-autoScroll.js


/****************************************** 
    [ 생성자메서드로 묶어서 export해준다! ]
    < 생성자메서드로 변경할때 체크할점! >
    1. 일반메서드(function)는 할당형 메서드로 변경
    -> 메서드명은 this키워드로 등록
    예) 
    (변경전)
    function my(){...} 
    (변경후)
    this.my = () => {}

    2. 변수는 외부에 공개할 것만 this키워드로 등록함
    -> 일반적으로 let,const를 모두 변경할 필요는 없고
    내가 인스턴스 생성시 접근해야할 변수만 this로 등록함!

    3. 할당형 변수는 호출 호이스팅이 불가하므로
    상단에서 바로 메서드를 호출하거나 이벤트 등록한 경우
    이를 생성자 메서드 하단으로 이동시킨다!

    4. 생성자메서드 내부에서 this키워드의 의미는?
    생성자메서드 자신! 여기서는 AutoScroll생성자메서드를 말한다!
    -> 할당형 메서드 내부의 this키워드는 생성자메서드 자신을 말함
    -> 이벤트에 속한 메서드일 경우 이벤트 대상인 나 자신(this)는
    어떻게 표현하지? -> event.currentTarget

    /*********************************** 
        클래스로 묶어서 export 해준다!
        - 변경사항들 
        1. 공용변수는 constructor 에 this 키워드로 등록함
        2. 모든 함수는 메서드 형태로 변경함
            function 이름(){} -> 이름(){}
        3. 서로 다른 메서드에서 클래스내부 다른 메서드를 호출할때
            this키워드를 사용하여 호출함!
        4. 이벤트 등록시 addEventListener(이벤트명,함수)
            함수일때는 함수명만 쓰면 등록되었으나 클래스는 함수가 아닌
            메서드이므로 이것은 익명함수구역을 만들고 함수를 호출하는
            방식으로 this키워드를 사용한 메서드 호출을 해야 호출됨!
    ***********************************/

    class AutoScroll(){
        constructor()
    /****************************************** 
        대상 변수할당하기
    ******************************************/
    // 전체 페이지번호
    this.pno = 0;
    // 페이지 요소
    const pg = $(".page");
    // 전체 페이지개수
    const pgcnt = pg.length;
    // console.log("페이지개수:", pgcnt, pg);
    // 광실행금지변수
    let prot = [];
    // 광스크롤금지
    prot[0] = 0;
    // 광클 초기값
    prot[1] = 0;
    // this.gnb 메뉴 li
    this.gnb = $(".this.gnb li");
    // this.indic 메뉴 li
    this.indic = $(".this.indic li");
    // 각 페이지별 등장요소
    this.minfo = $(".this.minfo");
    // 이동시간 
    this.sc_speed = 700;
    // 이징값
    this.easing = "";

    this.initPg();
    }
    /**************************************** 
        메서드명 : initPg
        기능 : 페이지 초기셋팅하기
    ****************************************/
   initPg = () => {
    /****************************************** 
        이벤트 등록하기
    ******************************************/
    // 윈도우 휠이벤트 발생시
    $(window).on("wheel", ()=>this.wheelFn());
    // this.gnb메뉴 클릭시 : 대상 - .gnb a
    $(".gnb a").click(()=>this.chgMenu());
    // 인디케이터 클릭시 : 대상 - .indic a
    $(".indic a").click(()=>this.chgMenu());
    
    // 새로고침시 스크롤위치 캐싱 변경하기(맨위로!)
    $("html,body").animate({ scrollTop: "0px" });
   }
    
    /**************************************** 
        메서드명: wheelFn
        기능: 마우스휠 이벤트 발생시 호출됨
        -> 한페이지씩 자동스크롤 기능
    ****************************************/
    this.wheelFn = () => {
        // 광휠금지
        if (prot[0]) return;
        this.chkCrazy(0);
    
        console.log("휠~~~~~~!");
    
        // 1.휠방향 알아내기
        let delta = event.wheelDelta;
        console.log(delta);
    
        // 2. 방향에 따른 페이지번호 증감
        if (delta < 0) {
            this.pno++;
            if (this.pno === pgcnt) this.pno = pgcnt - 1;
            // 마지막 페이지번호에 고정!
        } //// if /////
        else {
            this.pno--;
            if (this.pno === -1) this.pno = 0;
            // 첫페이지번호에 고정!
        } //// else ////
    
        console.log(this.pno);
    
    // 3. 스크롤 이동하기 + 메뉴에 클래스"on"넣기
        this.movePg();
    } // wheelFn 메서드 ////
    
    /******************************************** 
        메서드명: chgMenu
        기능: 메뉴 클릭시 메뉴변경과 페이지이동
    ********************************************/
    this.chgMenu = () => {
        // 0. 광클금지
        if (prot[1]) return;
        this.chkCrazy(1);
    
        // 1. 클릭된 a요소의 부모 li 순번을 구함 === this.pno
        let idx = $(event.currentTarget).parent().index();
        // this키워드는 생성자메서드의 객체를 가리킴
        // 따라서 이벤트 발생 자신은 event.currentTarget 
    
        console.log("나,클릭?", event.currentTarget, idx);
    
        // 2. 전역페이지번호에 순번 업데이트
        this.pno = idx;
    
        // 3. 페이지이동 + 메뉴에 클래스"on"넣기
        this.movePg();
    } ////////// chgMenu 메서드 ///////////////////
    
    /******************************************** 
        메서드명: chkCrazy
        기능: 광적동작 체크하여 제어리턴
    ********************************************/
    chkCrazy = (seq) => {
        // seq 관리변수 순번
        prot[seq] = 1;
        setTimeout(() => (prot[seq] = 0), 800);
    }; //////// chkCrazy메서드 //////////////
    
    /******************************************** 
        메서드명: movePg
        기능: 페이지이동 애니메이션
    ********************************************/
    movePg = () => {
        // 대상: html,body -> 두개를 모두 잡아야 공통적으로 적용됨!
        $("html,body").animate(
            {
                scrollTop: $(window).height() * this.pno + "px",
            },
            this.sc_speed, // 생성시 셋팅가능한 이동시간 
            this.easing, // 생성시 셋팅가능한 이징값
            // showEle // 이동후 콜백메서드호출!
        );
    
        // 대상: this.gnb메뉴 , 인디케이터 메뉴
        this.gnb.eq(this.pno).addClass("on").siblings().removeClass("on");
        this.indic.eq(this.pno).addClass("on").siblings().removeClass("on");
    } ///////////////// movePg ////////////////
    
    // 등장할 요소 초기화 /////
    // this.minfo.css({
    //     opacity: 0,
    //     transform: "translate(-50%,50%)",
    //     transition: ".3s ease-out",
    // }); ///////// css //////
    
    /******************************************** 
        메서드명: showEle
        기능: 페이지이동후 요소 등장하기
    ********************************************/
    // this.showEle = () => {
    //     // .this.minfo 페이지별 등장하기!
    //     pg.eq(this.pno).find(".this.minfo").css({
    //         opacity: 1,
    //         transform: "translate(-50%,-50%)",
    //     }) ///////// css //////
    //     // 다른페이지 초기화
    //     .parents(".page").siblings().find(".this.minfo")
    //     .css({
    //         opacity: 0,
    //         transform: "translate(-50%,50%)",
    //         transition: ".3s ease-out",
    //     }); ///////// css //////
    // } /////////// showEle 메서드 ///////////////////
    
    // 등장액션메서드 최초호출 ///
    // setTimeout(showEle, 1000);
    
    
    } // AutoScroll 생성자메서드 //
    
    
    // 생성자메서드 내보내기 ////
    export default AutoScroll;