let menu = document.querySelector('.hideMenu')
let button = document.querySelector('.menu__button')
let buttonC = document.querySelector('.menu__buttonClose')

button.onclick = function() {
    menu.style.display = 'block';
    buttonC.style.display = 'block';
    button.style.display = 'none';
  }
buttonC.onclick = function() {
    menu.style.display = 'none';
    button.style.display = 'block';
    buttonC.style.display = 'none';
  }











      let button2 = document.querySelector(".modal-button2");
      let button2BR = document.querySelector(".modal-button2BR");
      let modalWind1 = document.querySelector(".modal-dialog");
      let modalWind1BR = document.querySelector(".modal-dialogBR");
      let button3 = document.querySelector(".modal-button3");
      let button3BR = document.querySelector(".modal-button3BR");
      let modalWind2 = document.querySelector(".modal-dialog2");
      let modalWind2BR = document.querySelector(".modal-dialog2BR");

      button2.onclick = function(){
         modalWind1.style.display = 'none'; 
         modalWind2.style.display = 'block';
      } 
      button2BR.onclick = function(){
        modalWind1BR.style.display = 'none';
        modalWind2BR.style.display = 'block';
     } 
      button3.onclick = function(){
         modalWind2.style.display = 'none'; 
         modalWind1.style.display = 'block';
      } 
      button3BR.onclick = function(){
        modalWind2BR.style.display = 'none';
        modalWind1BR.style.display = 'block';
     } 


      let forImgAndText = document.querySelector(".about__textAndImg");
      let aboutFirstImg =document.querySelector(".about__imgwrap")
      let aboutName = document.querySelector(".about__name")
      const mq = window.matchMedia( "(min-width: 1000px)" );
      if (mq.matches) {
        forImgAndText.innerHTML = '<img src="img/icons/aboutSmall.png" class="wow bounceInLeft"> Dear Customer, welcome to my page! My name is Julia, I am 25 years old. I am a web designer and front-end developer. ' 
        aboutFirstImg.parentNode.removeChild(aboutFirstImg);
    } else {
      };



setInterval(
  function(){
    let loader = document.querySelector(".cssload-loaderWrap");
    loader.style.transition = "ease all 1s";
    loader.style.opacity= "0";
  },400
)







let left = 0;
let leftButton = 0;
let polosa = document.querySelector('.polosa');
let polosaButton = document.querySelector('.polosaButton');
function sliderLeft() {
    left -=70;
    leftButton = -110;
    if (left<-70) {
        left = 0;
        leftButton= 0;
    }
    polosa.style.left = left + 'vw';
    polosaButton.style.left = leftButton + 'px';
}
document.querySelector('.sliderButtonRight').onclick = sliderLeft;
function sliderRight() {
  left +=70;
  if (left=0) {
      left = -70
  }
  polosa.style.left = left + 'vw';
}
document.querySelector('.sliderButtonLeft').onclick = sliderLeft;