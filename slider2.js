//target slider-holder
var sliderHolder = document.getElementById('slider-holder');

var sliderItem = [
    {
        bgImg: 'url(images/img-1.jpg)',
        title: 'Welcome to Langkawi',
        subTitle: 'Enjoy holiday....',
    }, 
    {
        bgImg: 'url(images/img-2.jpg)',
        title: 'Wind, Sun, and Burn',
        subTitle: 'Enjoy holiday....',
    }, 
    {
        bgImg: 'url(images/img-3.jpg)',
        title: 'Slider 3',
        subTitle: 'Enjoy holiday....',
    },
    {
        bgImg: 'url(images/img-4.jpg)',
        title: 'Slider 4',
        subTitle: 'Enjoy holiday....',
    },
    {
        bgImg: 'url(images/img-4.jpg)',
        title: 'Slider 5',
        subTitle: 'Enjoy holiday....',
    }, 
    {
        bgImg: 'url(images/img-4.jpg)',
        title: 'Slider 6',
        subTitle: 'Enjoy holiday....',
    }
];

sliderHolder.style.width = sliderItem.length*100+'vw';
for(var i = 0; i < sliderItem.length; i ++) {
    
    var sliderEle = document.createElement('div');

    var sliderTitle = document.createElement('h1');
    sliderTitle.innerHTML = sliderItem[i].title;

    var sliderSubTitle = document.createElement('p');
    sliderSubTitle.innerHTML = sliderItem[i].subTitle;

    sliderEle.classList.add('slider');
    sliderEle.appendChild(sliderTitle);
    sliderEle.appendChild(sliderSubTitle);  

    sliderEle.style.backgroundImage = sliderItem[i].bgImg
    sliderHolder.appendChild(sliderEle);
  
}

var pos = 0;
var sliderTimerID = null;
sliderTimerID = setInterval(sliderTimer, 2000);

function sliderTimer() {
    pos-= 100;
    if(pos < -((sliderItem.length-1)* 100)) {
        pos = 0;
    }
    sliderHolder.style.transform = `translate(${pos}vw)`;
}


function stopTimer() {
    clearInterval(sliderTimerID);
}

function resumeTimer() {
    console.log("mouse out")
    sliderTimerID = setInterval(sliderTimer, 2000);
}