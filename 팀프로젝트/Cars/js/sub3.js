
// (1) 캐러셀 슬라이드 배너 구현 
window.addEventListener("DOMContentLoaded",setBan);

// movslide함수 구역 // 
function setBan(){
    console.log("로딩완료");
    
    const posterWrap = document.querySelector(".posterWrap");
    let bannerWrap = document.querySelectorAll(".poster");
    const videos = document.querySelectorAll(".trackVideo");
    const soundTitle = document.querySelectorAll(".track div>dd:nth-child(1)");
    const soundSinger = document.querySelectorAll(".track div>dd:nth-child(2)");
    // console.log(bannerWrap);
    // console.log(soundTitle);
    // console.log(soundSinger);

    const arr = [
        ["ZzMkc0W42nA","v0yilQVQ8Ew","1nswG0Bfaoc","UHbYQU_YHdQ","i2RiRx5K-Uk","xl55n1oO1sY"], //시즌1
        ["tdHx3ZYyQnc","DPl2F_EeHL0","j8FnlHz6NhI","IH5b_78vgdA","_iYUIlEqdZU","QMFRPMi1sbE"], //시즌2
        ["gllOGckFl4g","fh3jQ0hIGf0","V3lispzqU-g","DHL2KplwXHE","SDaLgm4pjN4","eWZYdSIo3k4"], //시즌3
        ];

    const title = [
    ['Real Gone (From "Cars"/Soundtrack Version)','Life is a Highway (From "Cars"/Soundtrack Version)','Our Town (From "Cars"/Soundtrack Version)','Sh-Boom (『カーズ』より)',
    'Goodbye (From "Cars"/Score)','Behind the Clouds (From "Cars"/Soundtrack Version)'],
    ['You Might Think (From "Cars 2"/Soundtrack Version)','Collision of Worlds (From "Cars 2"/Soundtrack Version)',"Nobody's Fool (From 'Cars 2'/Soundtrack Version)",
    'Going To The Backup Plan (From "Cars 2"/Score)','The Other Shoot (From "Cars 2"/Score)','The Radiator Springs Gran Prix (From "Cars 2"/Score)'],
    ["Storm's Winning Streak (From '\Cars 3\'/Score)","Fireball Beach (From '\Cars 3\'/Score)","Smokey Starts Training / A Blaze of Glory (From '\Cars 3\'/Score)",
    "Drip Pan (From '\Cars 3\'/Score)","McQueen's Wild Ride (From '\Cars 3\'/Score)","Temple of Rust-eze (From '\Cars 3\'/Score)"],
    ];

    const singer = [
    ["Sheryl Crow","Rascal Flatts","James Taylor","Chords","Randy Newman","Brad Paisley"],
    ["Weezer","Robbie Williams, Brad Paisley","Michael Giacchino","Michael Giacchino","Michael Giacchino"],
    ["Randy Newman","Randy Newman","Randy Newman","Randy Newman","Randy Newman","Randy Newman"],
    ];
    
    bannerWrap.forEach((ele,idx)=>{
        console.log(ele,idx);
            ele.innerHTML =`<img src="../Cars/image/c${idx+1}_teaser_poster.jpg" alt="포스터${idx+1}이미지">`;

        ele.addEventListener("click", ()=> {
            // 시즌1
            if(idx===3 || idx===6){
                videos.forEach((ele,idx)=>{
                    // ele.innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[idx]}"></iframe>`
                    ele.innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[0][idx]}"></iframe>`
                    soundTitle.forEach((ele,idx)=>{
                        ele.innerText = title[0][idx];
                    });
                    soundSinger.forEach((ele,idx)=>{
                        ele.innerText = singer[0][idx];
                    });
                }); // videos forEach 
            // }); // click 구역 
            }

            // 시즌2
            if(idx===1 || idx===4){
                videos.forEach((ele,idx)=>{
                    // ele.innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[idx]}"></iframe>`
                    ele.innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[1][idx]}"></iframe>`
                    soundTitle.forEach((ele,idx)=>{
                        ele.innerText = title[1][idx];
                    });
                    soundSinger.forEach((ele,idx)=>{
                        ele.innerText = singer[1][idx];
                    });
                }); // videos forEach 
            // }); // click 구역 
            }

            // 시즌3
            if(idx===2 || idx===5){
                videos.forEach((ele,idx)=>{
                    // ele.innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[idx]}"></iframe>`
                    ele.innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[2][idx]}"></iframe>`
                    soundTitle.forEach((ele,idx)=>{
                        ele.innerText = title[2][idx];
                    });
                    soundSinger.forEach((ele,idx)=>{
                        ele.innerText = singer[2][idx];
                    });
                }); // videos forEach 
            } 
        }); // click 구역 

    }); // bannerWrap forEach 

    
    const btns = document.querySelectorAll(".arrow_nav");
    // console.log(btns);
    btns.forEach((ele,idx)=>{
        // console.log("ele는?",ele,idx); 
        ele.onclick =()=>{
            
        let slide = document.querySelectorAll(".poster");
            // console.log(idx);
        if(idx === 0){
            posterWrap.style.left = "85%";
        setTimeout(() => {
            posterWrap.prepend(slide[5]);
            // console.log(slide[5]);
            posterWrap.style.left = "50%";
        }, 0); // setTimeout 함수

        } // if 문
        
        if(idx === 1){
           posterWrap.style.left = "16%";
        setTimeout(() => {
            posterWrap.appendChild(slide[0]);
            // console.log(slide[0]);
            posterWrap.style.left = "50%";

        }, 0); // setTimeout 함수
        } // if 문
        
    }; // click 이벤트 
}); // btns forEach 문 



} // 로딩구역 함수 