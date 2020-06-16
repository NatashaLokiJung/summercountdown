// let klods = document.querySelector(".klods");

// const notificationEvent = new Event("notification");

// klods.addEventListener("notification", function (event) {
//     anime({
//         targets: klods,
//         rotate: [7, -7, 0],
//         loop: 6,
//         duration: 50,
//         easing: "linear"
//     });
// });

// setTimeout (() => klods.dispatchEvent(notificationEvent), 5000);


let animateTrigger = document.querySelector(".animate-trigger");
let klods = document.querySelector(".klods");

let io = new IntersectionObserver(function (entries) {
    if (entries[0].intersectionRatio <= 0) return;

    anime({
        targets: klods,
        width: '100%', // -> from '28px' to '100%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
    });

}, { threshold: 1 });

io.observe(animateTrigger);