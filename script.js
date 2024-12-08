

function generateOneSquare(){
    let gridContainer = document.querySelector(".grid-container");
    let square =  document.createElement("div");
    square.classList.add("square");
    gridContainer.append(square);

    square.addEventListener("mouseover",(e)=>{
        console.log("hover!!!!");
        square.style["background"]  = "blue";
    })
}

function setSquareSize(size){
    let allSquares = document.querySelectorAll(".square");
    allSquares.forEach((square)=>{
        square.style.flex = `1 1 calc(${100/size}%)`;
    })
}


function generateGrid(size){
    for(let i = 0; i < size * size; i++){
        generateOneSquare();
    }
    setSquareSize(size);
}

generateGrid(20)