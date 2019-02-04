var boxNum = 6;
var colorArray = [];
var pickedColor;
var squares;
// *************************************************defining function ***************************************************************
// for making array of random colors
function makeRandomColorArray(num) {
    for (let index = 0; index < num; index++) {
        colorArray[index] = genColor();
    }
}

// for generating single rgb color
function genColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color;
}

// loop for making squares and adding event listener 
function makesquares() {
    for (let i = 0; i < boxNum; i++) {
        var squareBox = document.createElement("div");
        squareBox.classList.add("square");
        squareBox.style.background = colorArray[i];
        squareBox.addEventListener("click", function () {
            var getColor = this.style.background;
            // if user picks right color
            if (getColor === pickedColor) {
                document.getElementById("message").textContent = "Correct";
                document.getElementById("reset").textContent = "PLAY AGAIN??";
                changeAllColors();
            }
            // if user picks wrong color 
            else {
                document.getElementById("message").textContent = "Try Again";
                this.style.background = "#232323";
            }
        });
        document.getElementById("container").appendChild(squareBox);
    }
}

// creating box element in html
function removesquares() {

    const child = document.getElementById("container");
    const body = child.parentNode;
    child.parentNode.removeChild(child);

    const container = document.createElement("div");
    container.id = "container";
    body.appendChild(container)
}
// function for picking one random color from array and  showing that color in h1 tag in rgb farmate
function pickColor(num) {
    var picking = Math.floor(Math.random() * num);
    pickedColor = colorArray[picking];
    document.getElementById("display_color").textContent = pickedColor;
}
// if user picks right color then this function change color of every box 
function changeAllColors() {
    for (let i = 0; i < boxNum; i++) {
        squares[i].style.background = pickedColor;
        document.querySelector("h1").style.background = pickedColor;
    }
}
// setup function
const onStart = () => {
    document.querySelector("h1").style.background = "steelblue";
    document.getElementById("message").textContent = "";
    document.getElementById("reset").textContent = "NEW COLORS";
    makeRandomColorArray(boxNum);
    removesquares();
    makesquares();
    squares = document.querySelectorAll(".square");
    pickColor(boxNum);
}

//  ************************************************************************************** start *******************************************************
//  startup function call
onStart();
// for reset 
document.getElementById("reset").addEventListener("click", function () {
    onStart();
});
// for easy button
document.getElementById("easy").addEventListener("click", function () {
    boxNum = 3;
    this.classList.add("selected");
    document.getElementById("hard").classList.remove("selected");
    onStart();
});
// for hard button
document.getElementById("hard").addEventListener("click", function () {
    boxNum = 6;
    this.classList.add("selected");
    document.getElementById("easy").classList.remove("selected");
    onStart();
});