// var testimonial = document.getElementById('silder_box');
// var  dot1= document.getElementById('dot1');
// var  dot2= document.getElementById('dot2');
// var  dot3= document.getElementById('dot2');


// dot1.onclick =function(){
//     testimonial.style.transform = "translateX(524px )";
//     dot1.classList.add("active");
//     dot2.classList.remove("active");
//     dot3.classList.remove("active");
// }
// dot2.onclick =function(){
//     testimonial.style.transform = "translateX(0px)";
//     dot1.classList.remove("active");
//     dot2.classList.add("active");
//     dot3.classList.remove("active");
// }
// dot3.onclick =function(){
//     testimonial.style.transform = "translateX(-524px )";
//     dot1.classList.remove("active");
//     dot2.classList.remove("active");
//     dot3.classList.add("active");
// }































var slides = document.querySelectorAll('.testmon_item');
var btn = document.querySelectorAll('.dot');
let currentSlider = 1;
 // java script  manual nav 
 var manmualNav = function( manual){
     slides.forEach((slide) => {
         slide.classList.remove('active');
         btn.forEach((btn) => {
             btn.classList.remove('active')
         })

     });

     slides[manual].classList.add('active');
     btn[manual].classList.add('active');
 }
 btn.forEach((btn,i) =>{
     btn.addEventListener("click", () => {
         manmualNav(i);
         currentSlider = i;
     })
 });

 // java script  For auto nav

 var repeat = function(activeClass) {
   let active =document.getElementsByClassName('active') ;
   let i = 1 ;
   var repeater = () => {
       setTimeout(function(){
           [...active].forEach((activeSlide)=>{
               activeSlide.classList.remove('active');
           })
        
        slides[i].classList.add('active');
        btn[i].classList.add('active');
        i++;

        if(slides.length == i ){
            i=0;
        }

        if(i >= slides.length){
            return;
        }
         repeater();

       },3000);
   }
   repeater();
 }
 repeat();


