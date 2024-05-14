const display0 = document.getElementById('display0');
const display1 = document.getElementById('display1');
const display2 = document.getElementById('display2');
const display3 = document.getElementById('display3');
const display4 = document.getElementById('display4');

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

document.addEventListener('DOMContentLoaded', async function() {
    for (let i = 0; i < 35671; i++){
        await sleep(400);
        addSadFace(i);
    }
});

function addSadFace(i){
    console
    const sadFace = document.createElement('img');
    sadFace.src = "./img/sadface.svg";
    sadFace.alt = "a red and gray crayon drawing of a sad face"
    if (i < 3){
        display0.append(sadFace);
    } else if (i < 6){
        display1.append(sadFace);
    } else if (i < 9){
        display2.append(sadFace);
    } else if (i < 12){
        display3.append(sadFace);
    } else {
        display4.append(sadFace);
    }
}