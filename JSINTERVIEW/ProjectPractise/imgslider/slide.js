let flag=1;
     function controller(x){
      flag=flag+x;
      console.log("ki holo")
       slideshow(flag)
     }
function slideshow(imgno){
  let slides=document.querySelectorAll(".slide");
   if(imgno==slides.length){
      flag=0;
      imgno=0;
   }
   if (imgno<0){
    flag=slides.length-1;
     imgno=slides.length-1;
   }

  for(j of slides){
   j.style.display="none";
  }

  slides[imgno].style.display="block";

}
slideshow(flag)