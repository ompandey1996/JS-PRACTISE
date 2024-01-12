
let flag=2;
  function controller(x){
   flag=flag+x;
   imgslider(flag)   
  }
function imgslider(imgno){
let slides=document.getElementsByClassName("slide");
if(imgno==slides.length){
  flag=0;
  imgno=0;
}
if(imgno <0){
 flag=slides.length-1;
 imgno=slides.length-1;
}
for( y of slides){
  y.style.display="none";
}
  slides[imgno].style.display="block";
}
imgslider(flag);