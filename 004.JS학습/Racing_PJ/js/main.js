// Racing PJ 메인 JS - main.js

/// 로드구역 ///
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);
// 메시지함수 //
const cg = x => console.log(x);

window.addEventListener("DOMContentLoaded", ()=>{
    console.log("로딩완료!");

    /* 
        [ 게임 기능정의 ]
        1. 게임룰: 거북버튼 클릭하여 거북을
        왼쪽에서 오른쪽으로 이동함
        이때 토끼는 자동으로 이동하여
        결승선에 먼저 도달하는 레이서가 승리함
        2. 토끼의 이동속도는 레벨로 설정함
        3. 결승선 도착은 둘 중 하나가 먼저
        도착할 경우 판별함수에서 결과를 화면에 출력한다.
        4. 포커스가 버튼에 갈 경우 마우스가 아닌 버튼으로 조작할 수 없게함 
        (마우스만 사용하도록 함)
        5. 기본적으로 거북이동버튼 클릭시 토끼는 자동으로 작동됨
        6. 토끼이동버튼은 토끼만 미리 작동가능 
        7. 처음으로 버튼은 전체를 리셋함 
    */

    // 1. 대상선정
    // (1) 거북 : .t1
    const t1 = qs("#t1");
    // (2) 토끼 : .r1
    const r1 = qs("#r1");
    // (3) 버튼 : #btns a 
    const btns = qsa("#btns a");
    // (4) 레벨 : #level
    const level = qs("#level");
    // (5) 메시지박스 : #msg
    const msg = qs("#msg");
    // (6) 토끼, 거북 위치값 변수
    let r1pos= 0;
    let t1pos= 0;

    // cg(msg);

    // 2. 이벤트 설정하기
    // 대상: 버튼들 - btns변수
    btns.forEach(ele=>{
        // 1. 이벤트설정
        ele.onclick = (e) => {
            // (0) 기본기능막기
            e.preventDefault();
            // (1) 버튼종류확인 : 버튼텍스트
            let btxt = ele.innerText;
            // cg(btxt);

            // (2) 버튼별 기능분기
            // (2-1) 토끼이동 
            if(btxt==="토끼출발"){
                // 토끼 자동이동함수 호출!
                goR1();
                // (2-2) 거북이동 
                t1pos +=16;
                t1.style.left = t1pos + "px";
            } // if문: 토끼출발
        }; 
    }); // forEach //

    /* 
        함수명: goR1
        기능: 토끼자동이동(인터발함수)
    */
    function goR1(){
        setTimeout(()=>{
            r1.style.left = (++r1pos) + "px";
        },100);
    } /// goR1함수 ///


}); /// 로드구역 ///
