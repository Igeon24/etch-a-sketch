

function generateOneSquare(){
    const popularColors = ["#FF5733", "#33FF57", "#3357FF", "#FFC300", "#900C3F", "#C70039", "#581845", "#00CED1", "#FF69B4", "#2E8B57"];


    let gridContainer = document.querySelector(".grid-container");
    let square =  document.createElement("div");
    square.classList.add("square");
    gridContainer.append(square);
    square.style["background"]  = "white";
    square.style["opacity"]  = "0.5";

    square.addEventListener("mouseover",(e)=>{
        if(square.style.background == "white"){
            let selectedNumber = Math.round(Math.random() * 10);
            square.style["background"]  = popularColors[selectedNumber];
        }else if(square.style.opacity < 1){
            square.style.opacity = `${+square.style.opacity + 0.1}`;
        }
    })
}

function setSquareSize(size){
    let allSquares = document.querySelectorAll(".square");
    allSquares.forEach((square)=>{
        square.style.flex = `1 1 calc(${100/size}%)`;
    })
}


function generateGrid(size){
    let body = document.querySelector("body")
    let gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");

    body.append(gridContainer);

    for(let i = 0; i < size * size; i++){
        generateOneSquare();
    }
    setSquareSize(size);
}



let gridSize = 0;

do {
    gridSize = +prompt("Enter the size of the grid(max 100): ");
    
} while (gridSize<=0 || gridSize>100);
generateGrid(gridSize);