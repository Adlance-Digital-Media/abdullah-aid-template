// swiper slider start

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
console.log(tooltipTriggerList)
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
let projectDetailSlider = new Swiper(".projectDetailSlider", {
    cssMode: true,
    navigation: {
        nextEl: ".custom-next-button",
        prevEl: ".custom-prev-button",
    },
    speed:1200,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    mousewheel: true,
    keyboard: true,
});

// Image Lazy Loading
var imgDefer = document.getElementsByTagName("img");
for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute("data-src")) {
        imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
    }
}

// Gsap Animation:
let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

tl.to(".animated_pattern", {
    y: '-50px',
    scale:'1.1',
    ease: "power1.inOut",
    duration: 3,
    opacity:'0.1',
    yoyo: true,
    repeat: -1
})

// tl.from(".animated_pattern_full", {

//     y: '20px',
//     duration: 3,
//     opacity:'0.1',
//     yoyo: true,
//     repeat: -1
// })

// Light Gallery Init
lightGallery(document.getElementById('masonry_grid'), {
    plugins: [lgThumbnail],
    speed: 500,
    enableSwipe:true,
});
