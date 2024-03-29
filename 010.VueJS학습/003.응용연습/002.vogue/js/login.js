// 보그 PJ : 로그인 페이지 JS - login.js

$(()=>{ // jQB // 

    /********************************* 
        로그인 페이지 유효성검사하기
    *********************************/
    // 대상 : #mid, #mpw 
    const mid = $('#mid');    
    const mpw = $('#mpw');    

    // 유효성검사 기준 : 전송시 아이디, 비번 모두 빈값 없어야함!

    // 이벤트 대상 : #sbtn
    // 이벤트 종류 : click 
    $("#sbtn").click(function(ㄷ){
        // 기본기능막기(서브밋 기능차단)
        event.preventDefault();

        // 공백데이터 처리함수 
        const groSpace = val => val.replace(/\s/g,"");

        // 유효성 검사하기
        // 아이디 비번 중 하나라도 비어 있으면 불통과!
        if(groSpace(mid.val())==="" || groSpace(mpw.val())==="") {
            alert("모두 넣으시오~!");
            // 초기화! + 아이디에 포커스
            mid.val("").focus();
            mpw.val("");
        } // if : 불통과시 
        else {
            // 원래는 DB에서 조회된 결과를 받고
            // 성공메시지를 보이거나 첫페이지로
            // 보내준다!
            alert("로그인에 성공하셨습니다!");
        } // else : 통과시

    }); // click // 
}); // jQB // 