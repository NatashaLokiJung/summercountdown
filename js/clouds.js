let animateTrigger = document.querySelector(".animate-trigger");
let klods = document.querySelector(".klods");
let chicken = document.querySelector(".chicken");

let io = new IntersectionObserver(function (entries) {
    if (entries[0].intersectionRatio <= 0) return;

    anime({
        targets: chicken,
        keyframes: [
            {translateY: -40},
            {translateX: 350},
            {translateY: 60},
            {translateX: 100},
            {translateY: 0},
            {translateX: 0},
            {translateY: -10},
            {translateX: 350},
            {translateX: 650},
            {translateY: 60},
            {translateX: 100},
            {translateY: 0},
            {translateX: 0}
          ],
          duration: 12000,
          easing: 'easeOutElastic(1, .8)',
          loop: true
    });

}, { threshold: 1 });

io.observe(animateTrigger);


var deadline = new Date("June 26, 2020, 13:30:00").getTime(); 
  
var x = setInterval(function() { 
  
var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
document.getElementById("day").innerHTML =days ; 
document.getElementById("hour").innerHTML =hours; 
document.getElementById("minute").innerHTML = minutes;  
document.getElementById("second").innerHTML =seconds;  
if (t < 0) { 
        clearInterval(x); 
        document.getElementById("demo").innerHTML = "FERIE!"; 
        document.getElementById("day").innerHTML ='0'; 
        document.getElementById("hour").innerHTML ='0'; 
        document.getElementById("minute").innerHTML ='0' ;  
        document.getElementById("second").innerHTML = '0'; } 
}, 1000); 