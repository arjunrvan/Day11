// target slider-holder
var sliderHolder = document.getElementById('slider-holder');

var sliderList = [
    {
        bgimg: "url(images/ocean.jpg)", 
        title: "Slide 1", 
        subtitle: "This is slide 1"
    },
    {
        bgimg: "url(images/sunset.jpg)", 
        title: "Slide 2", 
        subtitle: "This is slide 2"
    },
    {
        bgimg: "url(images/mountain.jpg)", 
        title: "Slide 3", 
        subtitle: "This is slide 3"
    },
    {
        bgimg: "url(images/fire.jpg)", 
        title: "Slide 4", 
        subtitle: "This is slide 4"
    }
];
    

sliderHolder.style.width = (sliderList.length*100) + 'vw';

for (var i = 0; i < sliderList.length; i ++ ) {

    var createSliderEle = document.createElement('div');

    var sliderTitle = document.createElement('h1');
    sliderTitle.innerHTML = sliderList[i].title;

    var sliderSubTitle = document.createElement('p');
    sliderSubTitle.innerHTML = sliderList[i].subtitle;
    
    createSliderEle.classList.add('slider');
    createSliderEle.appendChild(sliderTitle);
    createSliderEle.appendChild(sliderSubTitle);

    createSliderEle.style.backgroundImage = sliderList[i].bgimg;


    sliderHolder.appendChild(createSliderEle);

   

    // document.querySelectorAll('slider')[i].sty

    
}