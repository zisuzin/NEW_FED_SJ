// 패럴렉스 PJ JS - main.js

// 로드 이벤트 설정
window.addEventListener("DOMContentLoaded", loadFn);

// 로드함수 ////
function loadFn() {
    console.log("로딩완료!");

    // 1. 부드러운 스크롤 적용하기!
    startSS();

    // 2. 공통선택자함수
    const qs = (x) => document.querySelector(x);
    const qsa = (x) => document.querySelectorAll(x);
    // 3. 등장위치리턴함수
    const retVal = (x) => x.getBoundingClientRect().top;
    // getBoundingClientRect().top
    // -> 화면에 등장후 위로 올라가면 마이너스됨!

    // 4. 화면높이값읽기 : 등장요소의 시작값이 이것임!
    const winH = window.innerHeight;
    console.log("winH:", winH);

    // 5. 패럴렉스 수치범위 : 움직일값 설정
    const setH1 = 100;
    const setH2 = 200;

    // 6. 패럴렉스 대상선정
    // (1) 글자박스
    const tg1 = qsa(".txt");
    // (2) 아이콘
    const tg2 = qsa(".icon");

    // 7. 패럴렉스 이동함수
    const moveEl = (elpos,ele,setH) => {
        // 전달값: elpos - 위치값 / ele -요소 / setH - 정한범위수 

        // 1. 위치이동값 계산
        if(elpos < winH && elpos > 0) {
            let x = setH2 - (elpos * setH2) / winH;
            console.log("x:",x);

        // 2. 해당요소에 위치이동 CSS반영
            ele.style.cssText = `
                transform: translateY(${-x}px);
            `;
        }

    }

    // 8. 스크롤 이벤트함수 만들기
    window.addEventListener("scroll", () => {
        // 대상1 : 글자박스 패럴렉스호출!
        // console.log(retVal(tg1[2]));
        // let elpos = retVal(tg1[2]);

        tg1.forEach(ele=>
            moveEl(retVal(ele),ele,setH2));

    }); /////////// scroll /////////////////

    // 로딩시 맨위 이동
    setTimeout(()=>{
        window.scrollTo(0,0);
        pos = 0;
    },400);

    // 스크롤바를 직접 잡고 움직일시 부드러운 스크롤 위치값 업데이트
    // window.addEventListener("mouseup", () => {
    //     // 이것 안하면 다시 스크롤시 튐!
    //     pos = window.scrollY;
    // }); /////////// mouseup /////////////////
    // // 키보드로 이동시 부드러운 스크롤 위치값 업데이트
    // window.addEventListener("keyup", () => {
    //     // 이것 안하면 다시 스크롤시 튐!
    //     pos = window.scrollY;
    // }); /////////// mouseup /////////////////

    // // 로딩시 맨위로 이동하기
    // setTimeout(() => {
    //     // 맨위로 이동
    //     window.scrollTo(0,0);
    //     // 부드러운 스크롤 위치값 반영!
    //     pos = 0; // 안하면 튄다!
    // }, 400);

} ////////////// loadFn ///////////////////////////