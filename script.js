window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyRelease);


var keyHolder = document.getElementById('key-holder');

var keyList = [
    {
        keyName: "A",
        src: new Howl({src:['audio/1.mp3']}),
        keyCode: 65
    },
    {
        keyName: "S",
        src: new Howl({src:['audio/2.mp3']}),
        keyCode: 83
    },
    {
        keyName: "D",
        src: new Howl({src:['audio/3.mp3']}),
        keyCode: 68
    },
    {
        keyName: "F",
        src: new Howl({src:['audio/4.mp3']}),
        keyCode: 70
    },
    {
        keyName: "G",
        src: new Howl({src:['audio/5.mp3']}),
        keyCode: 71
    },
    {
        keyName: "H",
        src: new Howl({src:['audio/6.mp3']}),
        keyCode: 72
    },
    {
        keyName: "J",
        src: new Howl({src:['audio/7.mp3']}),
        keyCode: 74
    },
    {
        keyName: "K",
        src: new Howl({src:['audio/8.mp3']}),
        keyCode: 75
    },
    {
        keyName: "L",
        src: new Howl({src:['audio/9.mp3']}),
        keyCode: 76
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
    whiteTile.style.boxShadow = '2px 2px 2px 2px rgba(255,255,0,0.5)';

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
}

function keyRelease (evt) {
    delete keyCheck[evt.keyCode];

    var pos = keyList.map(function(e) { return e.keyCode; }).indexOf(evt.keyCode);

    keyId[pos].classList.add("animateOut");
    keyId[pos].classList.remove("animate");
}   

