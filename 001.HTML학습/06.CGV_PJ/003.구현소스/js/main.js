// CGV PJ 메인 페이지 JS - main.js

// 요소선택함수 //////
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);


// 로드구역 /////////////////////
window.addEventListener("DOMContentLoaded",()=>{
    console.log("로딩완료!");

    /******************************************* 
        [ 포스터 메뉴 클릭시 클래스주기 ]
        - 포스터 메뉴 클릭시 해당 li에 
        클래스 "on"을 주고 나머지 li는 
        "on"을 모두 지워서 선택된 li만
        일어서있는 CSS가 적용되게 한다!
    *******************************************/
    // 대상 : .mlist ul>li -> 이벤트+변경대상 일치
    const mlist = qsa(".mlist ul>li");
    // console.log(mlist);
    
    // 2. 클릭이벤트 함수 설정하기
    // for of 사용 ! -> 배열/컬렉션 일때 사용!
    for(let x of mlist){

        
        x.onclick = () => {
            // 1. li에 클래스 초기화
            // forEach((요소,순번,객체)=>{코드})
            mlist.forEach(ele=>ele.classList.remove("on"));
            // 클릭된 li에 클래스 "on"넣기
            // classList 객체사용!
            // add()메서드 사용!
            x.classList.add("on");
            // x.classList.toggle("on");
            /* if(x.className === "on"){
                x.className = "";
            } else {
                x.className = "on";
            } */
        }; //// click함수 ////
    } //// for of /////
    
    /* function tx(){
        const onClass = "on"; 
        mlist.classList.toggle("click");
    }

    mlist.addEventListener("click",tx); */

}); ////////////// 로드구역 /////////////////////


