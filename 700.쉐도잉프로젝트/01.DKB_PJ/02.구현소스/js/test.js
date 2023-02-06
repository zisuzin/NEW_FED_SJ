// const age = parseInt(prompt("how old are you?"));

// if(isNaN(age)){ // isNaN = is Not a Number? 숫자가 아니냐?
                // -> 응(true) 숫자가 아니야 - 문자
                // -> 아니(false) 숫자야 - 숫자 
    // console.log("문자다!");
// } else if(age>=0 || age<=19){ // 0~ 19까지의 수만 조건 충족
    // console.log("you are too young"); 
// } else {
   //  console.log("you can drink");
//} 

// const title = document.getElementById("ㅋㄷ"); 
// const hi = document.getElementsByClassName("hihi"); 

// title.innerText = "got you!";

// console.log(title.id);
// console.log(title.className);

var title = document.querySelector(".hello:nth-child(3) h1");
console.log(title);

title.style.color = "blue";
title.style.border = "1px dashed red";