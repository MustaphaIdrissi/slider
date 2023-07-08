const prev =document.querySelector(".prev");
const next =document.querySelector(".next");
const imgy =document.querySelectorAll(".igh");
const sld =document.querySelector(".slider-image");

var currentSlide=0;
var slideInterval;
next.addEventListener("click",()=>{
    imgy[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % imgy.length;
  imgy[currentSlide].classList.add("active");
});

prev.addEventListener("click",()=>{
    imgy[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1+ imgy.length) % imgy.length;
  imgy[currentSlide].classList.add("active");
});





function startSlideInterval() {
    slideInterval =setInterval(function(){
        imgy[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % imgy.length;
        imgy[currentSlide].classList.add("active");
    }, 3000);
  }
  
  function pauseSlideInterval() {
  
   clearInterval(slideInterval);
  }
  
  function handleMouseEnter() {
    pauseSlideInterval();
  }
  
  function handleMouseLeave() {
    startSlideInterval();
  }
  
  startSlideInterval();



  sld.addEventListener("mouseenter", handleMouseEnter);
  sld.addEventListener("mouseleave", handleMouseLeave);
