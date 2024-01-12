    let btn=document.querySelector(".btn");
    let search=document.querySelector(".search input")
    async function checkWeather(city){
      let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"67744baf7ca41b0fa5adc6be00d21d7b"}&units=metric`)
      let data=await response.json();
      console.log(data) ; 
         document.querySelector(".city").innerHTML=data.name;
         document.querySelector(".temp").innerHTML=data.main.temp;


    }
    btn.addEventListener("click",function(){
      checkWeather(search.value);
    })