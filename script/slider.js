

let slides = document.querySelectorAll('.slide');
let currentSlide = 0;


function minus(){
    slides[currentSlide].className = 'slide';
    if (currentSlide -1 == -1) {
        currentSlide=slides.length-1;
    }
    else{
        currentSlide--;
    }
    slides[currentSlide].className = 'slide showing';
}
function plus(){
    slides[currentSlide].className = 'slide';
    if (currentSlide+1 == slides.length) {
        currentSlide=0;
    }
    else{
        currentSlide++;
    }
    slides[currentSlide].className = 'slide showing';
}


