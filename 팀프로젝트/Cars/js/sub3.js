
// (1) 캐러셀 슬라이드 배너 구현 
window.addEventListener("DOMContentLoaded",setBan);

// movslide함수 구역 // 
function setBan(){
    console.log("로딩완료");
    
    const posterWrap = document.querySelector(".posterWrap");
    let bannerWrap = document.querySelectorAll(".poster");
    const videos = document.querySelectorAll(".trackVideo");
    // console.log(bannerWrap);

    const arr = 
    ["ZzMkc0W42nA","v0yilQVQ8Ew","1nswG0Bfaoc","UHbYQU_YHdQ","i2RiRx5K-Uk","xl55n1oO1sY"];

    // mvi 객체 
    // const mvi = {
    //     //"../Cars/image/c4_teaser_poster.jpg": {
    //     "mImg": {
    //         first: "https://www.youtube.com/embed/ZzMkc0W42nA",
    //         "2": "https://www.youtube.com/embed/v0yilQVQ8Ew",
    //         "3": "https://www.youtube.com/embed/1nswG0Bfaoc",
    //         "4": "https://www.youtube.com/embed/UHbYQU_YHdQ",
    //         "5": "https://www.youtube.com/embed/i2RiRx5K-Uk",
    //         "6": "https://www.youtube.com/embed/xl55n1oO1sY",
    //     },
        // "시즌2": {
        //     "iframe": "",
        //     "iframe": "",
        //     "iframe": "",
        //     "iframe": "",
        //     "iframe": "",
        //     "iframe": "",

        // }

    // }; // mvi 객체 
    
    bannerWrap.forEach((ele,idx)=>{
        // console.log(ele,idx);
      
        // 가운데 이미지 요소만 (1.3) 적용
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

        // let mainImg = ele.querySelectorAll("li img");
        ele.addEventListener("click", ()=> {
            // (2) 아이프레임 for문으로 자동 넣기
            // for(let x in mvi) {
            //     console.log(x[0]);
            // }
            // for(let x of arr){
            //     // console.log(x);
            // }

            videos.forEach((ele,idx)=>{
                ele.innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[idx]}"></iframe>`
            });

            
            


        }); // click 구역 

        // console.log(mainImg);
        // for(let i=0; i<7; i++){
        //     let property = mainImg.alt;
        //     console.log(property);
        // }

        
    });
    
    const btns = document.querySelectorAll(".arrow_nav");
    // console.log(btns);
    btns.forEach((ele,idx)=>{
        // console.log("ele는?",ele,idx); 
        ele.onclick =()=>{
            
        let slide = document.querySelectorAll(".poster");
        
        if(idx === 0){
            posterWrap.style.left = "16%";
        setTimeout(() => {
                posterWrap.appendChild(slide[0]);
                posterWrap.style.left = "50%";

                if(slide[4]){
                    videos.innerHTML = ;
                } else {    
                    videos.innerHTML = "";
                }
                
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



} // 로딩구역 함수 
