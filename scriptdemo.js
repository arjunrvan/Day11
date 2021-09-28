var sliderHolder = document.getElementById('slider-holder');

var slidePos = 0;

var sliderTimer = null;
sliderTimer = setInterval(function () {move(1)}, 1000);

function move(num) {

    slidePos += num;

    if (slidePos > 3) {
        slidePos = 0;
    } 
    if (slidePos < 0) {
        slidePos = 3;
    }

    sliderHolder.style.transform = `translate(${-slidePos*100}) + '%'`;

}

function stopTimer () {
    clearInterval(sliderTimer);
}

function resumeTimer () {
    sliderTimer = setInterval(function () {move(1)}, 1000);
}

