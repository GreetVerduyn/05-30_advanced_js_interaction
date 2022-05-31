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
let redDot = document.getElementById("redDot");
redDot.style.top="10px";


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

function mouseMove(e){

    redDot.style.top = e.clientY + "px";
    redDot.style.left = e.clientX + "px";
}
