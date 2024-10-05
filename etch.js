function initGrid(size) {
    const squareContainer = document.getElementById("sketch-container");
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            formatSquare(square, size);
            squareContainer.appendChild(square);
        }
    }
}

function formatSquare(square, size) {
    square.setAttribute("class", "gridSquare");
    setRandomColor(square);
    square.addEventListener("mouseover", squareHovered);
    setSize(square, size);
}

function setSize(square, size) {
    square.style.width = `${(1 / size) * 100}%`;
    square.style.height = `${(1 / size) * 100}%`;
}

function resizeGrid(size){
    const squares = document.querySelectorAll(".gridSquare");
    for(let i = 0; i < squares.length; i++){
        setSize(squares[i], size);
    }
}

function setRandomColor(square) {
    const red = getRandomIntInclusive(0, 255);
    const green = getRandomIntInclusive(0, 255);
    const blue = getRandomIntInclusive(0, 255);
    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    square.style.opacity = 1;
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function squareHovered(event) {
    const currOpacity = parseFloat(event.target.style.opacity);
    if (currOpacity > 0) {
        event.target.style.opacity -= .1;
    }
}

function updateNumSquares(size) {
    //changes number of squares in grid
    //need to remove all the children from the
    //container square and append new ones.

    const squares = document.querySelectorAll(".gridSquare");
    const numSquares = squares.length;
    const newNumSquares = size ** 2;
    const diff = newNumSquares - numSquares;

    diff >= 0 ? addSquares(diff, size) : delSquares(Math.abs(diff), numSquares);
}

function addSquares(numSquares, oldSize) {
    const sketchContainer = document.querySelector("#sketch-container");
    resizeGrid(oldSize + numSquares);
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        formatSquare(square, oldSize + numSquares);
        sketchContainer.appendChild(square);
    }
}

function delSquares(numSquares, oldSize) {
    const sketchContainer = document.querySelector("#sketch-container");
    console.log("got here");
    for (let i = 0; i < numSquares; i++) {
        sketchContainer.removeChild(sketchContainer.lastChild);
    }
    console.log(oldSize - numSquares);
    resizeGrid(oldSize - numSquares);
}

function getSizeInput(event) {
    const inputSize = parseInt(prompt("Enter size of the square: "));
    if (inputSize < 100 && inputSize > 0) {
        updateNumSquares(inputSize);
    }
    else {
        alert("You must enter an integer between 1 and 100.");
    }
}

const changeSizeButton = document.querySelector("button");
changeSizeButton.addEventListener("click", getSizeInput);
initGrid(5);