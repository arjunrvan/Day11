window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyRelease);


var keyHolder = document.getElementById('key-holder');

var container = document.getElementById('container');

var keyList = [
    {
        keyName: "A",
        src: new Howl({src:['audio/1.mp3']}),
        keyCode: 65,
        bgColor: 'linear-gradient(to right,red,yellow)'
    },
    {
        keyName: "S",
        src: new Howl({src:['audio/2.mp3']}),
        keyCode: 83,
        bgColor: 'linear-gradient(to right,yellow,green)'
    },
    {
        keyName: "D",
        src: new Howl({src:['audio/3.mp3']}),
        keyCode: 68,
        bgColor: 'linear-gradient(to right,green,violet)'
    },
    {
        keyName: "F",
        src: new Howl({src:['audio/4.mp3']}),
        keyCode: 70,
        bgColor: 'linear-gradient(to right,violet,pink)'
    },
    {
        keyName: "G",
        src: new Howl({src:['audio/5.mp3']}),
        keyCode: 71,
        bgColor: 'linear-gradient(to right,pink,orange)'
    },
    {
        keyName: "H",
        src: new Howl({src:['audio/6.mp3']}),
        keyCode: 72,
        bgColor: 'linear-gradient(to right,orange,green)'
    },
    {
        keyName: "J",
        src: new Howl({src:['audio/7.mp3']}),
        keyCode: 74,
        bgColor: 'linear-gradient(to right,green,magenta)'
    },
    {
        keyName: "K",
        src: new Howl({src:['audio/8.mp3']}),
        keyCode: 75,
        bgColor: 'linear-gradient(to right,magenta,red)'
    },
    {
        keyName: "L",
        src: new Howl({src:['audio/9.mp3']}),
        keyCode: 76,
        bgColor: 'linear-gradient(to right,red,black)'
    },
]

for (i = 0; i < keyList.length; i++) {
    var whiteTile = document.createElement('span');

    var pianoKeyTitle = document.createElement('h2');
    pianoKeyTitle.innerHTML = keyList[i].keyName;

    whiteTile.classList.add('white-key');
    whiteTile.appendChild(pianoKeyTitle);

    whiteTile.style.backgroundColor = 'white';
    whiteTile.style.fontSize = '30px';
    whiteTile.style.color = 'red';
    whiteTile.style.width = '80px';
    whiteTile.style.height = '200px';
    whiteTile.style.lineHeight = '200px';
    whiteTile.style.borderRadius = '20px';
    whiteTile.style.boxShadow = '3px 3px 3px rgba(255,255,255,0.5)';

    keyHolder.appendChild(whiteTile);
   
}

var keyId = document.querySelectorAll('span');

keyCheck = [];

function keyPressed (evt) {
    keyCheck[evt.keyCode] = true;

    for (i = 0; i < keyList.length; i++) {
        if (keyList[i].keyCode == evt.keyCode) {
            keyList[i].src.play();
            
        }
    } 

    var pos = keyList.map(function(e) { return e.keyCode; }).indexOf(evt.keyCode);
            
    keyId[pos].classList.add("animate");
    keyId[pos].classList.remove("animateOut");

    keyId[pos].style.backgroundImage = keyList[pos].bgColor;
    setTimeout(function() {keyId[pos].style.backgroundImage = 'none';},1000);
}

function keyRelease (evt) {
    delete keyCheck[evt.keyCode];

    var pos = keyList.map(function(e) { return e.keyCode; }).indexOf(evt.keyCode);

    keyId[pos].classList.add("animateOut");
    keyId[pos].classList.remove("animate");

    // keyId[pos].style.backgroundImage = 'none';
}   

