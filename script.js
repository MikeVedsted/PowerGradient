// gradient display
const body = document.getElementById('body');
let currentString = document.getElementById("current");

// buttons
const linearBtn = document.getElementById('linearBtn');
const radialBtn = document.getElementById('radialBtn');
const conicBtn = document.getElementById('conicBtn');
const randomBtn = document.getElementById('randomBtn');
const viewBtn = document.getElementById('viewBtn');

// gradient variables
let degrees = document.getElementById('degrees');
let colors = document.querySelectorAll('input[type="color"]');
let type = "linear"

setGradient(); // set initial gradient

function menuClick(id) { // hide all options, show clicked
document.getElementById('linear').style.display = "none";
document.getElementById('radial').style.display = "none";
document.getElementById('conic').style.display = "none";
document.getElementById(id).style.display = "block";
type = id;
setGradient();
}

function setGradient() { // Update gradient and css-string to current values
	body.style.background = type + "-gradient(" + degrees.value + "deg, " + colors[0].value + ", " + colors[1].value + ")";
	currentString.textContent = type + "-gradient(" + degrees.value + "deg, " + colors[0].value + ", " + colors[1].value + ")";
}

function generateColor (){
	return "#" + (Math.random().toString(16) + "000000").substring(2,8)
}

function generateDegree (){
	return degrees.value = Math.floor(Math.random() * (360 - -0 + 1) + 0);
}

function randomGradient() {
	colors[0].value = generateColor();
	colors[1].value = generateColor();
	degrees.value = generateDegree()
	setGradient()
}

// ***************
// EVENT LISTENERS
// ***************

// buttons
linearBtn.addEventListener("click", function(){menuClick("linear")});
radialBtn.addEventListener("click", function(){menuClick("radial")});
conicBtn.addEventListener("click", function(){menuClick("conic")});
randomBtn.addEventListener("click", randomGradient);

// inputs 
degrees.addEventListener("input", setGradient);

for (let i = 0; i < colors.length; i++) {
	colors[i].addEventListener("input", setGradient)
}