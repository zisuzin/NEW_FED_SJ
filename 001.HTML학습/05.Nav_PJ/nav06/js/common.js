// 네비게이션 유형6 : 공통 JS - common.js

/// 로그구역 ///
window.addEventListener("DOMContentLoaded",loadFn)

/**************************************** 
    함수명: loadFn
    기능: 로딩후 실행함수
****************************************/
function loadFn(){

    console.log("로딩완료!");
    /******************************** 
     GNB메뉴 객체 데이터를 이용한
     HTML태그 만들어 넣기!
    ********************************/
    // 1. 대상 선정: .gnb    
    const gnb = document.querySelector(".gnb");
    console.log(gnb);

    // 2. 변수 셋팅: html 담을 코드 변수  
    let hcode = "";

    hcode += `<ul>`
    // 3. 상위메뉴 반복코드 생성 
    // mdata객체를 가져와서 반복시킴 -> for in문! (객체하면 for in문)
    // console.log(mdata);

    for(let tm in mdata){ // tm은 mdata의 속성명

        hcode+=
        `
        <li>
            <a href="#">${tm}</a>
            <div class="smenu">
                <h2> 
                ${tm}
                <br><a href=#">전체보기 〉</a>
                </h2>

                <div class="swrap">
                        `;
                    //  2. 하위메뉴 반복코드
                    // -> 객체데이터 이므로 for in문 사용!
                    // -> mdata[tm] -> mdata[속성명] -> 속성값! 
                    // -> 속성값은 서브메뉴이고 객체로 구성됨!
                    for(let sm in mdata[tm]){
                        hcode +=
                        `<dl>
                            <dt>${sm}</dt>`
                        // 3. 서브메뉴(최하위메뉴) 반복코드 
                        // -> 서브메뉴는 배열이므로 for of 사용!
                        for(let sub of mdata[tm][sm]){
                            hcode +=
                            `<dd>
                             <a href="#">${sub}</a>
                            </dd>`
                        } /// for of문 ///

                        hcode += `</dl>`;
                    } /// for in문 /// 

                    hcode += `
                </div>
            </div>
        </li>
    `;
    } /// for in 문 /// 

    hcode +="</ul>"

    // 4. GNB 박스에 출력하기
    gnb.innerHTML = hcode;

} // loadFn함수 //