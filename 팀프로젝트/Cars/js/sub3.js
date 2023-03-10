
// (1) 캐러셀 슬라이드 배너 구현 
window.addEventListener("DOMContentLoaded",setBan);

// movslide함수 구역 // 
function setBan(){
    console.log("로딩완료");
    
    const posterWrap = document.querySelector(".posterWrap");
    let bannerWrap = document.querySelectorAll(".poster");
    // console.log(bannerWrap);
    
    bannerWrap.forEach((ele,idx)=>{
        // console.log(ele,idx);
      
        // if(idx === 3/*  && idx === */ ) {
        //     const ele_class_name = ele.getAttribute('class').split(' ')[1];
        //     document.querySelector('.'+ele_class_name)
        //     .style.transform = "scale(1.3)";

        //     console.log('.'+ele_class_name);
        // } else {
        //     ele.style.overflow = "hidden";
        // } // if 문 

        // if(idx === 4) {
        //     const ele_class_name = ele.getAttribute('class').split(' ')[1];
        //     document.querySelector('.'+ele_class_name)
        //     .style.transform = "scale(1.3)";

        //     console.log('.'+ele_class_name);
            
        // } else {
        //     ele.style.overflow = "hidden";
        // } // if 문 

        ele.innerHTML =
        `<li>
            <img src="../Cars/image/c${idx+1}_teaser_poster.jpg" alt="포스터${idx+1}이미지">
        </li>`;

        
    });
    
    const btns = document.querySelectorAll(".arrow_nav");
    // console.log(btns);
    btns.forEach((ele,idx)=>{
        // console.log("ele는?",ele,idx); 
        ele.onclick =(event)=>{
            event.preventDefault();
        
            let slide = document.querySelectorAll(".poster");
        
        if(idx === 0){
            posterWrap.style.left = "16%";
        setTimeout(() => {
                posterWrap.appendChild(slide[0]);
                posterWrap.style.left = "50%";

        }, 0); // setTimeout 함수
        } // if 문

        if(idx === 1){
            posterWrap.style.left = "16%";
        setTimeout(() => {
                posterWrap.appendChild(slide[0]);
                posterWrap.style.left = "50%";

        }, 0); // setTimeout 함수
        } // if 문
        
    }; // click 이벤트 
}); // btns forEach 문 
} // setBan 함수 
