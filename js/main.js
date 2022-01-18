//변수 설정 
const btnCall = document.querySelector(".btnCall"); 
const menuMo = document.querySelector(".menuMo"); 

//이벤트 바인딩 
//btnCall을 클릭할 때 
btnCall.onclick = function(e){
    //링크이동금지 
    e.preventDefault(); 

    //btnCall에 on이 있으면 제거, 없으면 추가 
    btnCall.classList.toggle("on"); 
    //menuMo에 on이 있으면 제거, 없으면 추가 
    menuMo.classList.toggle("on"); 
}