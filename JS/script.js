Array.from(document.querySelectorAll(".letter")).forEach(el => {
    el.innerText = randomLetter();
});

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

//CAROUSEL
const kittenArray = ['kitten_1.jpg', 'kitten_2.jpeg', 'kitten_3.jpg'];
let showKitten = 0;
let carousel = document.getElementById("carouselContainer");

var kittenTimer = setInterval(function () {

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

function changeMode(button) {
    const body = document.body;
    if (body.className === "darkMode") {
        body.className = "lightMode"
    } else {
        body.className = "darkMode"
    }

};


// RED DOT
let redDot = document.getElementById("redDot");
redDot.style.top = "10px";


function startFollowingCursor() {
    redDot.style.position = 'fixed';
    window.addEventListener('mousemove', mouseMove);

}

function stopFollowingCursor() {
    redDot.style.position = 'absolute';
    redDot.style.top = "10px";
    redDot.style.left = "10px";
    window.removeEventListener('mousemove', mouseMove);
}

function mouseMove(e) {

    redDot.style.top = e.clientY + "px";
    redDot.style.left = e.clientX + "px";
}


//GREEN DOT
let greenDot = document.getElementById("greenDot");
greenDot.style.top = "10px";


function runFromCursor() {
    greenDot.style.position = 'fixed';
    window.addEventListener('mousemove', mouseChase);

}

function stopRunning() {
    greenDot.style.position = 'absolute';
    greenDot.style.top = "10px";
    greenDot.style.left = "10px";
    window.removeEventListener('mousemove', mouseChase);
}

function mouseChase(e) {

    if (greenDot.style.top === e.clientY) {
        greenDot.style.top = (e.clientY - 10) + "px";
    } else if (greenDot.style.left === e.clientX)
    {
        greenDot.style.left = (e.clientX - 10) + "px";
    }
    else{
        greenDot.style.position = 'fixed';
    }
    console.log('greendotPosition', greenDot.style.top)
    console.log('mousePosition', e.clientX, e.clientY)
}