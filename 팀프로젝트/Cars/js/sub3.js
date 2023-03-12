
window.addEventListener("DOMContentLoaded",setBan);
/*************** 배열데이터 ***************/
const arr = [
    ["ZzMkc0W42nA","v0yilQVQ8Ew","1nswG0Bfaoc","UHbYQU_YHdQ","i2RiRx5K-Uk","xl55n1oO1sY"], //시즌1
    ["tdHx3ZYyQnc","DPl2F_EeHL0","j8FnlHz6NhI","IH5b_78vgdA","_iYUIlEqdZU","QMFRPMi1sbE"], //시즌2
    ["gllOGckFl4g","fh3jQ0hIGf0","V3lispzqU-g","DHL2KplwXHE","SDaLgm4pjN4","eWZYdSIo3k4"], //시즌3
    ];

const title = [
['Real Gone','Life is a Highway','Our Town','Sh-Boom (『カーズ』より)',
'Goodbye','Behind the Clouds'],
['You Might Think','Collision of Worlds ',"Nobody's Fool",
'Going To The Backup Plan','The Other Shoot','The Radiator Springs Gran Prix'],
["Storm's Winning Streak","Fireball Beach","Smokey Starts Training / A Blaze of Glory",
"Drip Pan","McQueen's Wild Ride","Temple of Rust-eze"],
];

const singer = [
["Sheryl Crow","Rascal Flatts","James Taylor","Chords","Randy Newman","Brad Paisley"],
["Weezer","Robbie Williams, Brad Paisley","Michael Giacchino","Michael Giacchino","Michael Giacchino","Michael Giacchino"],
["Randy Newman","Randy Newman","Randy Newman","Randy Newman","Randy Newman","Randy Newman"],
];


// movslide함수 구역 // 
function setBan(){
    // console.log("로딩완료");
    
    /*************** 전역변수 ***************/
    const posterWrap = document.querySelector(".posterWrap");
    let bannerWrap = document.querySelectorAll(".poster");
    const videos = document.querySelectorAll(".trackVideo");
    const soundTitle = document.querySelectorAll(".track div>dd:nth-child(1)");
    const soundSinger = document.querySelectorAll(".track div>dd:nth-child(2)");
    var video_gubun = '';  
    let slide2 = document.querySelector(".posterWrap").children;
    
    

    /*************** 이미지데이터 ***************/
    bannerWrap.forEach((ele,idx)=>{
        // console.log(ele,idx);
            ele.innerHTML =`<img src="../Cars/image/c${idx+1}_teaser_poster.jpg" alt="포스터${idx+1}이미지">`;
            // const alt = ele.getAttribute(alt);
            // console.log(alt);

        ele.addEventListener("click", ()=> {
            console.log(ele.dataset.video_gubun);
            // 시즌1
            if(ele.dataset.video_gubun==3 || ele.dataset.video_gubun==6){
                videos.forEach((ele1,idx)=>{
                    // ele.innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[idx]}"></iframe>`
                    ele1.innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[0][idx]}"></iframe>`
                    soundTitle.forEach((ele2,idx)=>{
                        ele2.innerText = title[0][idx];
                    });
                    soundSinger.forEach((ele2,idx)=>{
                        ele2.innerText = singer[0][idx];
                    });
                }); // videos forEach 
            // }); // CLICK AREA
            }

            // 시즌2
            if(ele.dataset.video_gubun==1 || ele.dataset.video_gubun==4){
                videos.forEach((ele1,idx)=>{
                    // ele.innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[idx]}"></iframe>`
                    ele1.innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[1][idx]}"></iframe>`
                    soundTitle.forEach((ele2,idx)=>{
                        ele2.innerText = title[1][idx];
                    });
                    soundSinger.forEach((ele2,idx)=>{
                        ele2.innerText = singer[1][idx];
                    });
                }); // videos forEach 
            // }); // CLICK AREA
            } // IF문

            // 시즌3
            if(ele.dataset.video_gubun==2 || ele.dataset.video_gubun==5){
                videos.forEach((ele1,idx)=>{
                    // ele.innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[idx]}"></iframe>`
                    ele1.innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[2][idx]}"></iframe>`
                    soundTitle.forEach((ele2,idx)=>{
                        ele2.innerText = title[2][idx];
                    });
                    soundSinger.forEach((ele2,idx)=>{
                        ele2.innerText = singer[2][idx];
                    });
                }); // videos forEach 
            }  // IF문
        }); // CLICK AREA

    }); // bannerWrap forEach 


    /*************** 3번째 이미지 위치에 따라 영상 변경 ***************/
    const btns = document.querySelectorAll(".arrow_nav");
    let slide = document.querySelectorAll(".poster");

    function init(e){
        videos.forEach((ele,seq)=>{
            var aa = '';
            ele.innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[1][seq]}"></iframe>`
            for(var iia=0; iia< slide2.length; iia++){
            if(iia == 3) {
                 aa = ele;
                 soundTitle.forEach((ele,idx)=>{
                    ele.innerText = title[1][idx];
                });
                soundSinger.forEach((ele,idx)=>{
                    ele.innerText = singer[1][idx];
                });
                //  console.log(arr[ii][idx]);
            } // IF문
        };  // FOR문
    }); //forEach문 
        
    } // init함수
    
    /*************** 캐러셀슬라이드 ***************/
    btns.forEach((ele,idx)=>{
        // console.log("ele는?",ele,idx); 
        ele.onclick =()=>{
            
        let slide = document.querySelectorAll(".poster");
        
        var aa = '';
        videos.forEach((ele2,seq)=>{
            ele2.innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[1][seq]}"></iframe>`
           
        }); //forEach문 

        if(idx === 0){
            get_video_gubun();
            // console.log(video_gubun);
            posterWrap.style.left = "85%";
        setTimeout(() => {
            posterWrap.prepend(slide[5]);
            // console.log(slide[5]);
            posterWrap.style.left = "50%";
        }, 0); // setTimeout 함수

        // 왼쪽버튼 1클릭시 시즌1번 영상 재생
    
           
            for(var ix=0; ix<videos.length; ix++) {
                videos[ix].innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[video_gubun-1][ix]}"></iframe>`
                soundTitle[ix].innerText = title[video_gubun-1][ix];
                soundSinger[ix].innerText = singer[video_gubun-1][ix];
            }
        // 오른쪽버튼 2클릭시 시즌3번 영상 재생
     
        
   } // IF문

   
        
        if(idx === 1){
            get_video_gubun();
            // console.log(video_gubun);
           posterWrap.style.left = "16%";
            setTimeout(() => {
                posterWrap.appendChild(slide[0]);
                // console.log(slide[0]);
                posterWrap.style.left = "50%";

            }, 0); // setTimeout 함수

            // 오른쪽버튼 1클릭시 시즌2번 영상 재생
          //  var aa = '';
            
            for(var ix=0; ix<videos.length; ix++) {
                videos[ix].innerHTML = `<iframe src="https://www.youtube.com/embed/${arr[video_gubun-1][ix]}"></iframe>`
                soundTitle[ix].innerText = title[(video_gubun-1)][ix];
                soundSinger[ix].innerText = singer[(video_gubun-1)][ix];
              
            }
           
        } // IF문
        
    }; // CLICK AREA
}); // btns forEach 문 


init();

function get_video_gubun(e) {

    for(var ii=0; ii< slide2.length; ii++){
        if(ii == 3) {
            video_gubun = slide2[ii].dataset.video_gubun;
        }  else {
            continue;
        }
    }
}
} // ROADING AREA // 
