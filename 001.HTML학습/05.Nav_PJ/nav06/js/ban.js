// 네비유형 6 : 배너셋팅 JS - ban.js //////
window.addEventListener("DOMContentLoaded",setBan);

    // 1. 최상위 배너박스 대상선정 : .banbx
    const banbx = document.querySelectorAll(".banbx");
    
    // 2. 배너박스 일괄 셋팅하기 
    banbx.forEach((ele)=>setBan(ele));

    // setBan()

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(.slide)
    4. 기능 설계:
        -> left 이동의 기준값이 -220% 인것이 포인트!
        (이유: 2장의 슬라이드가 앞에 나가있음. 잘라내는 것이
            숨겨져야하므로 셋팅한것임!)

        (1) 오른쪽 버튼 클릭시

            ※ 변경된부분!!!
            {   트랜지션 중앙 커지기를 적용한 경우이므로
                왼쪽버튼과 같이 잘라내기를 먼저하여
                슬라이드 주인공 순서를 일치 시킨다!!!! }

            -> 슬라이드 이동전!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 -120%으로 변경한다!
        
            다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -220%로 변경시킨다.
            

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -330%로 변경한다.
            그 후 left값을 -220%으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/


// 배너셋팅함수 //////////////
function setBan(){
    // 1. 호출확인
    // console.log("배너야~!");

    // 2. 대상선정 : .bancont
    const bancont = document.querySelector(".bancont");
    // console.log(bancont);

    // 3. 태그 구성하기 
    // 태그변수 
    let hcode = `<ul class="slide">`;

    for(let i=0; i<13; i++){
        hcode += `
        <li>
            <img src="./nav06/img_nav06/ban${i}.png" alt="배너이미지">
        </li>`;
    } // for 문 // 

    hcode += `<ul>`;
    // console.log(hcode);

    // 4. .bancont에 출력하기
    bancont.innerHTML = hcode;


} // setBan 함수 // 