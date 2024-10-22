// JavaScript Document
console.log("hi");

const carousel = document.getElementById('carousel');
let scrollAmount = 0;
const scrollSpeed = 1;  

function autoScrollCarousel() {
    scrollAmount += scrollSpeed;
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;  
    }
    carousel.scrollTo({
        left: scrollAmount,
        behavior: 'auto'  
    });
}

setInterval(autoScrollCarousel, 16);
// met behulp van chatgpt.com