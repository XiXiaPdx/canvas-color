const canvas = document.querySelector('#pixelcanvas');
const ctx = canvas.getContext('2d');
const gridWidth = document.querySelector('#inputWidth');
const gridHeight = document.querySelector('#inputHeight');
const submitButton = document.querySelector('#submitButton');
const colorPicker = document.querySelector('#colorPicker');

submitButton.addEventListener('click', function(e){
	makeGrid();
    event.preventDefault();
});

let colorGrid = function colorGrid (columns, rows, gridSize) {
  //these three argument values get 'CLOSED' into the return function below and can be used there. This return function goes to the click listener and that is why it accepts one parameter, the event object when a click happens
  return function(e){
    let x = e.offsetX;
    let y = e.offsetY;
    for (let r=0; r < rows; ++r){
      //is click in this row? use Y
      let upBound = r * gridSize;
      let btmBound = (r+1) * gridSize;
      if (upBound < y && y < btmBound){
        for (let c=0; c < columns; ++c){
    	  //found row. which column?
          let leftBound = c * gridSize;
          let rightBound = (c+1) * gridSize;
          if(leftBound < x && x < rightBound){
          //found column. fill rec with color
            ctx.fillStyle=colorPicker.value;     ctx.fillRect(leftBound,upBound,gridSize,gridSize);
          }
        }
      }
    }
  }
};

function makeGrid() {
  // get number of Canvas Rows
  let canvasRows = gridHeight.value;
  // get number of canvas Columns
  let canvasColumns = gridWidth.value;
  let maxCanvasWidth = Math.round(window.innerWidth * 0.8);
  //check to make sure canvas width is not greater than browser window width.
  // each column has a minimum of 15 pixels
  if(canvasColumns > Math.floor(maxCanvasWidth/15)) {
    alert ("The max grid width for the current display is "+Math.floor(maxCanvasWidth/15)+". Please choose again");
           return;
  }
  //this is length of square for each grid on the canvas.
  let gridSize = Math.round(maxCanvasWidth/canvasColumns);
  // use gridSize to create the actual canvas width and height. Each grid will be square
  canvas.width = canvasColumns * gridSize;
  canvas.height = canvasRows * gridSize;
  setGrid(canvasColumns, canvasRows, gridSize);
  // add click listener to canvas. pass 3 parameters to the colorGrid handler function. colorGrid returns a function (and closure that holds the 3 paramters)  that accepts one parameter, which will be event object.
  canvas.addEventListener('click', colorGrid(canvasColumns,canvasRows,gridSize));
}

function setGrid(columns, rows, gridSize){
//create a 2-D array to store color hex values of each grid as white.
  rowsArray = [];
  for (let r=0; r < rows; ++r) {
  	rowsArray.push([]);
    for (let c=0; c < columns; ++c) {
      ctx.strokeStyle = 'black';
	    ctx.strokeRect(gridSize*c, gridSize*r, gridSize, gridSize);
    }
  }
}
