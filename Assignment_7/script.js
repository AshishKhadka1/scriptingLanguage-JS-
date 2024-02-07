var greenElement = document.getElementsByClassName('green')[0];
console.log(greenElement.innerText); 

var blueElement = document.getElementById('blue');
console.log(blueElement.innerText); 

var yellowElement = document.querySelector('.yellow#yellow');
console.log(yellowElement.innerText); 

var tealElements = document.querySelectorAll('.teal');
tealElements.forEach(function(element) {
    console.log(element.innerText);
});
