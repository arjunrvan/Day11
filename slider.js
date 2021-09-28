var sliderHolder = document.getElementById('slider-holder');
var pos = 0;

function moveSlider(posNum) {
    pos += posNum;

    if(pos < -300) {
        pos = 0;
    } else if (pos > 0) {
        pos = -300
    }
    
    sliderHolder.style.transform = `translateX(${pos}vw)`;
}


var sliderTimerID = null;
sliderTimerID = setInterval(sliderTimer, 1000);

function sliderTimer() {
    pos-= 100;
    if(pos < -300) {
        pos = 0;
    }
    sliderHolder.style.transform = `translate(${pos}vw)`;
}


function stopTimer() {
    clearInterval(sliderTimerID);
}

function resumeTimer() {
    console.log("mouse out")
    sliderTimerID = setInterval(sliderTimer, 1000);
}
