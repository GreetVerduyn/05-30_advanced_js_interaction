Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

//CAROUSEL
const kittenArray = ['kitten_1.jpg', 'kitten_2.jpeg', 'kitten_3.jpg'];
let showKitten = 0;
let carousel = document.getElementById("carouselContainer");

var kittenTimer = setInterval(function() {

    carousel.style.backgroundImage = "url('./MEDIA/images/" + kittenArray[showKitten] + "')";
    if (showKitten < kittenArray.length - 1) {
        showKitten += 1;
    } else {
        showKitten = 0;
    }

}, 5000);

//COLLAGE
function enlarge(image) {
        image.classList.add('enlarged');
}

function makeSmaller(image) {
       image.classList.remove('enlarged');
}


//CHANGE MODE

function changeMode(button){
    const body= document.body;
    if (body.className === "darkMode"){
        body.className = "lightMode"
    } else {
        body.className = "darkMode"
    }

};

// RED DOT
let redBox = document.getElementById("redBox");
//let context = box.getContext("2d");
let dot = document.getElementById("redDot");
dot.style.top="10px";


let mouseX=0;
let mouseY=0;
let boxPos = getPosition(redBox);


function setMousePosition(e) {
    mouseX= e.clientX - boxPos.x;
    mouseY= e.clientY - boxPos.y;
   // console.log(mouseY, mouseX)
}

function getPosition(el) {
    let xPosition = 0;
    let yPosition = 0;

    while (el) {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
    }

    return {
        x: xPosition,
        y: yPosition,
    };
}


function startFollowingCursor() {
    console.log('startFollowingCursor');
    window.addEventListener('mousemove', mouseMove);
}
function stopFollowingCursor() {
    console.log('stopFollowingCursor');
    window.removeEventListener('mousemove', mouseMove);
}

function mouseMove(e){
    console.log('mouseMove', e.clientX);
    console.log('boxposition', boxPos)
    let offsetTop = e.clientX - getPosition(redBox).x;
    dot.style.top = offsetTop + "px";
    dot.style.left = e.clientX + "px";
}
