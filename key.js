var boxy = document.getElementById('boxy');
var snd1 = document.getElementById('snd1');
var snd2 = document.getElementById('snd2');
var snd3 = document.getElementById('snd3');
var snd4 = document.getElementById('snd4');
var snd5 = document.getElementById('snd5');

var boxyPos = {x:0, y:0};
var keyList = [];

window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyRelease);

function keyPressed (evt) {
    keyList[evt.keyCode] = true;

    if (keyList[39]) {
        boxyPos.x += 5;
    }

    if (keyList[37]) {
        boxyPos.x -= 5;
    }

    if (keyList[40]) {
        boxyPos.y += 5;
    }

    if (keyList[38]) {
        boxyPos.y -= 5;
    }

    // switch (keyList[evt.code]) {
    //     case keyList[39]:
    //         console.log('go right');
    //         boxyPos.x +=5;
    //         break;
        
    //     case keyList[37]:
    //         console.log('go left');
    //         boxyPos.x -= 5;
    //         break;

    //     case keyList [40]:
    //         console.log('go down');
    //         boxyPos.y += 5;
    //         break;

    //     case keyList [38]:
    //         console.log('go up');
    //         boxyPos.y -= 5;
    //         break;
    // }

    // switch (evt.keyCode) {
    //     case 39:
    //         boxyPos.x += 5;
    //         break;

    //     case 37:
    //         boxyPos.x -= 5;
    //         break;

    //     case 38:
    //         boxyPos.y -= 5;
    //         break;

    //     case 40:
    //         boxyPos.y += 5;
    //         break;

    //     default:
    //         break;
    // }

    // Push keycode into array and assign true
    
    // console.log(keyList);
    
    boxy.style.left = boxyPos.x + 'px';
    boxy.style.top = boxyPos.y + 'px';
}

function keyRelease (evt) {
    delete keyList[evt.keyCode];
}