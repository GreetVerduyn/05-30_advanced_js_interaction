Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

const kittenArray = ['kitten_1.jpg', 'kitten_2.jpeg', 'kitten_3.jpg'];
let showKitten = 0;
let carousel = document.getElementById("carouselContainer");

var kittenTimer = setInterval(function() {
    console.log('timer');
    carousel.style.backgroundImage = "url('./MEDIA/images/" + kittenArray[showKitten] + "')";
    if (showKitten < kittenArray.length - 1) {
        showKitten += 1;
    } else {
        showKitten = 0;
    }

}, 5000);


function enlarge(image) {
        image.classList.add('enlarged');
}

function makeSmaller(image) {
       image.classList.remove('enlarged');
}
console.log(carousel.style);
