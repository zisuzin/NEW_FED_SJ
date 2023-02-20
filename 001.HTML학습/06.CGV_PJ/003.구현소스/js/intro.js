// 인트로 페이지 - 

window.addEventListener("DOMContentLoaded", loadFn);

// 로딩실행함수
function loadFn(){
    // 동영상 시간을 체크하여 일정시간후
    // 메인페이지로 넘길 수 있음!
    // setTimeout(() => {
        // location.href = "main.html";
    // }, 4000));
    // 그.러.나..
    // 동영상 시간 이벤트를 사용하여 넘기자!!

    // 대상: #myvid
    const myvid = document.querySelector("#myvid");
    // console.log(myvid);

    // 동영상재생중 발생하는 이벤트는?
    // timeUpdate -> 동영상재생 시간이 계속 업데이트시 발생!
    // -> 동영상재생 시간이 계속 업데이트시 발생!
    myvid.addEventListener("timeupdate",chkVid);

    function chkVid(){
        console.log("재생중?",myvid.paused);
        // 비디오가 멈추면 재생끝이므로
        // 비디오 멈춤상태 체크함!
        // paused 속성은 멈추면 true / 아니면 false 리턴
        // 주의 : 비디오가 loop면 안된다!
    }
    

    
}