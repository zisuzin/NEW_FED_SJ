// 무한이동 드래그&클릭형&멀티 배너 JS - multi.js
import mySlider from "./mySlider.js";

// 함수호출!
// 현재슬라이드 3군데 모두 적용하기
const sl = $(".slider");
sl.each((idx)=>{
    mySlider(sl[idx]); 
})