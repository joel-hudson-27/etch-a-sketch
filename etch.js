function initGrid(width, height){
    for (let i = 0; i < width; i++){
        for (let j = 0; j < height; j++){
            const squareContainer = document.querySelector("#sketch-container");
            const square = document.createElement("div");
            formatSquare(square);
            squareContainer.appendChild(square);
        }
    }
}

function formatSquare(square){
    square.setAttribute("class", "gridSquare");
    setRandomColor(square);
}

function setRandomColor(square){
    const red = Math.getRandomIntInclusive(0, 255);
    const green = Math.getRandomIntInclusive(0, 255);
    const blue = Math.getRandomIntInclusive(0, 255);
    square.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
}

function squareHovered(event){
    const currOpacity = parseFloat(event.target.style.opacity);
    if(currOpacity > 0){
        event.target.style.opacity -= .1;
    }
}

function updateNumSquares(newWidth, newHeight){
    //changes number of squares in grid
    //need to remove all the children from the
    //container square and append new ones.

    const squares = document.querySelectorAll(".gridSquare");
    const numSquares = squares.length();
    const newNumSquares = newWidth * newHeight;
    const diff = newNumSquares - numSquares;

    diff >= 0 ? addSquares(diff) : delSquares(diff);
}

function addSquares (){

}

function delSquares(){

}
