!function(n){var c={};function t(e){if(c[e])return c[e].exports;var I=c[e]={i:e,l:!1,exports:{}};return n[e].call(I.exports,I,I.exports,t),I.l=!0,I.exports}t.m=n,t.c=c,t.d=function(n,c,e){t.o(n,c)||Object.defineProperty(n,c,{configurable:!1,enumerable:!0,get:e})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var c=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(c,"a",c),c},t.o=function(n,c){return Object.prototype.hasOwnProperty.call(n,c)},t.p="",t(t.s=0)}([function(module,exports){eval("const canvas = document.querySelector('#pixelcanvas');\nconst ctx = canvas.getContext('2d');\nconst gridWidth = document.querySelector('#inputWidth');\nconst gridHeight = document.querySelector('#inputHeight');\nconst submitButton = document.querySelector('#submitButton');\nconst colorPicker = document.querySelector('#colorPicker');\n\nsubmitButton.addEventListener('click', function(e){\n\tmakeGrid();\n    event.preventDefault();\n});\n\nlet colorGrid = function colorGrid (columns, rows, gridSize) {\n  //these three argument values get 'CLOSED' into the return function below and can be used there. This return function goes to the click listener and that is why it accepts one parameter, the event object when a click happens\n  return function(e){\n    let x = e.offsetX;\n    let y = e.offsetY;\n    for (let r=0; r < rows; ++r){\n      //is click in this row? use Y\n      let upBound = r * gridSize;\n      let btmBound = (r+1) * gridSize;\n      if (upBound < y && y < btmBound){\n        for (let c=0; c < columns; ++c){\n    \t  //found row. which column?\n          let leftBound = c * gridSize;\n          let rightBound = (c+1) * gridSize;\n          if(leftBound < x && x < rightBound){\n          //found column. fill rec with color\n            ctx.fillStyle=colorPicker.value;     ctx.fillRect(leftBound,upBound,gridSize,gridSize);\n          }\n        }\n      }\n    }\n  }\n};\n\nfunction makeGrid() {\n  // get number of Canvas Rows\n  let canvasRows = gridHeight.value;\n  // get number of canvas Columns\n  let canvasColumns = gridWidth.value;\n  let maxCanvasWidth = Math.round(window.innerWidth * 0.8);\n  //check to make sure canvas width is not greater than browser window width.\n  // each column has a minimum of 15 pixels\n  if(canvasColumns > Math.floor(maxCanvasWidth/15)) {\n    alert (\"The max grid width for the current display is \"+Math.floor(maxCanvasWidth/15)+\". Please choose again\");\n           return;\n  }\n  //this is length of square for each grid on the canvas.\n  let gridSize = Math.round(maxCanvasWidth/canvasColumns);\n  // use gridSize to create the actual canvas width and height. Each grid will be square\n  canvas.width = canvasColumns * gridSize;\n  canvas.height = canvasRows * gridSize;\n  setGrid(canvasColumns, canvasRows, gridSize);\n  // add click listener to canvas. pass 3 parameters to the colorGrid handler function. colorGrid returns a function (and closure that holds the 3 paramters)  that accepts one parameter, which will be event object.\n  canvas.addEventListener('click', colorGrid(canvasColumns,canvasRows,gridSize));\n}\n\nfunction setGrid(columns, rows, gridSize){\n//create a 2-D array to store color hex values of each grid as white.\n  rowsArray = [];\n  for (let r=0; r < rows; ++r) {\n  \trowsArray.push([]);\n    for (let c=0; c < columns; ++c) {\n      ctx.strokeStyle = 'black';\n\t    ctx.strokeRect(gridSize*c, gridSize*r, gridSize, gridSize);\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVzaWducy5qcz82NTBiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixhQUFhO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekI7QUFDQSxpQkFBaUIsYUFBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGl4ZWxjYW52YXMnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgZ3JpZFdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0V2lkdGgnKTtcbmNvbnN0IGdyaWRIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXRIZWlnaHQnKTtcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRCdXR0b24nKTtcbmNvbnN0IGNvbG9yUGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbG9yUGlja2VyJyk7XG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuXHRtYWtlR3JpZCgpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxubGV0IGNvbG9yR3JpZCA9IGZ1bmN0aW9uIGNvbG9yR3JpZCAoY29sdW1ucywgcm93cywgZ3JpZFNpemUpIHtcbiAgLy90aGVzZSB0aHJlZSBhcmd1bWVudCB2YWx1ZXMgZ2V0ICdDTE9TRUQnIGludG8gdGhlIHJldHVybiBmdW5jdGlvbiBiZWxvdyBhbmQgY2FuIGJlIHVzZWQgdGhlcmUuIFRoaXMgcmV0dXJuIGZ1bmN0aW9uIGdvZXMgdG8gdGhlIGNsaWNrIGxpc3RlbmVyIGFuZCB0aGF0IGlzIHdoeSBpdCBhY2NlcHRzIG9uZSBwYXJhbWV0ZXIsIHRoZSBldmVudCBvYmplY3Qgd2hlbiBhIGNsaWNrIGhhcHBlbnNcbiAgcmV0dXJuIGZ1bmN0aW9uKGUpe1xuICAgIGxldCB4ID0gZS5vZmZzZXRYO1xuICAgIGxldCB5ID0gZS5vZmZzZXRZO1xuICAgIGZvciAobGV0IHI9MDsgciA8IHJvd3M7ICsrcil7XG4gICAgICAvL2lzIGNsaWNrIGluIHRoaXMgcm93PyB1c2UgWVxuICAgICAgbGV0IHVwQm91bmQgPSByICogZ3JpZFNpemU7XG4gICAgICBsZXQgYnRtQm91bmQgPSAocisxKSAqIGdyaWRTaXplO1xuICAgICAgaWYgKHVwQm91bmQgPCB5ICYmIHkgPCBidG1Cb3VuZCl7XG4gICAgICAgIGZvciAobGV0IGM9MDsgYyA8IGNvbHVtbnM7ICsrYyl7XG4gICAgXHQgIC8vZm91bmQgcm93LiB3aGljaCBjb2x1bW4/XG4gICAgICAgICAgbGV0IGxlZnRCb3VuZCA9IGMgKiBncmlkU2l6ZTtcbiAgICAgICAgICBsZXQgcmlnaHRCb3VuZCA9IChjKzEpICogZ3JpZFNpemU7XG4gICAgICAgICAgaWYobGVmdEJvdW5kIDwgeCAmJiB4IDwgcmlnaHRCb3VuZCl7XG4gICAgICAgICAgLy9mb3VuZCBjb2x1bW4uIGZpbGwgcmVjIHdpdGggY29sb3JcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGU9Y29sb3JQaWNrZXIudmFsdWU7ICAgICBjdHguZmlsbFJlY3QobGVmdEJvdW5kLHVwQm91bmQsZ3JpZFNpemUsZ3JpZFNpemUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gbWFrZUdyaWQoKSB7XG4gIC8vIGdldCBudW1iZXIgb2YgQ2FudmFzIFJvd3NcbiAgbGV0IGNhbnZhc1Jvd3MgPSBncmlkSGVpZ2h0LnZhbHVlO1xuICAvLyBnZXQgbnVtYmVyIG9mIGNhbnZhcyBDb2x1bW5zXG4gIGxldCBjYW52YXNDb2x1bW5zID0gZ3JpZFdpZHRoLnZhbHVlO1xuICBsZXQgbWF4Q2FudmFzV2lkdGggPSBNYXRoLnJvdW5kKHdpbmRvdy5pbm5lcldpZHRoICogMC44KTtcbiAgLy9jaGVjayB0byBtYWtlIHN1cmUgY2FudmFzIHdpZHRoIGlzIG5vdCBncmVhdGVyIHRoYW4gYnJvd3NlciB3aW5kb3cgd2lkdGguXG4gIC8vIGVhY2ggY29sdW1uIGhhcyBhIG1pbmltdW0gb2YgMTUgcGl4ZWxzXG4gIGlmKGNhbnZhc0NvbHVtbnMgPiBNYXRoLmZsb29yKG1heENhbnZhc1dpZHRoLzE1KSkge1xuICAgIGFsZXJ0IChcIlRoZSBtYXggZ3JpZCB3aWR0aCBmb3IgdGhlIGN1cnJlbnQgZGlzcGxheSBpcyBcIitNYXRoLmZsb29yKG1heENhbnZhc1dpZHRoLzE1KStcIi4gUGxlYXNlIGNob29zZSBhZ2FpblwiKTtcbiAgICAgICAgICAgcmV0dXJuO1xuICB9XG4gIC8vdGhpcyBpcyBsZW5ndGggb2Ygc3F1YXJlIGZvciBlYWNoIGdyaWQgb24gdGhlIGNhbnZhcy5cbiAgbGV0IGdyaWRTaXplID0gTWF0aC5yb3VuZChtYXhDYW52YXNXaWR0aC9jYW52YXNDb2x1bW5zKTtcbiAgLy8gdXNlIGdyaWRTaXplIHRvIGNyZWF0ZSB0aGUgYWN0dWFsIGNhbnZhcyB3aWR0aCBhbmQgaGVpZ2h0LiBFYWNoIGdyaWQgd2lsbCBiZSBzcXVhcmVcbiAgY2FudmFzLndpZHRoID0gY2FudmFzQ29sdW1ucyAqIGdyaWRTaXplO1xuICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzUm93cyAqIGdyaWRTaXplO1xuICBzZXRHcmlkKGNhbnZhc0NvbHVtbnMsIGNhbnZhc1Jvd3MsIGdyaWRTaXplKTtcbiAgLy8gYWRkIGNsaWNrIGxpc3RlbmVyIHRvIGNhbnZhcy4gcGFzcyAzIHBhcmFtZXRlcnMgdG8gdGhlIGNvbG9yR3JpZCBoYW5kbGVyIGZ1bmN0aW9uLiBjb2xvckdyaWQgcmV0dXJucyBhIGZ1bmN0aW9uIChhbmQgY2xvc3VyZSB0aGF0IGhvbGRzIHRoZSAzIHBhcmFtdGVycykgIHRoYXQgYWNjZXB0cyBvbmUgcGFyYW1ldGVyLCB3aGljaCB3aWxsIGJlIGV2ZW50IG9iamVjdC5cbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29sb3JHcmlkKGNhbnZhc0NvbHVtbnMsY2FudmFzUm93cyxncmlkU2l6ZSkpO1xufVxuXG5mdW5jdGlvbiBzZXRHcmlkKGNvbHVtbnMsIHJvd3MsIGdyaWRTaXplKXtcbi8vY3JlYXRlIGEgMi1EIGFycmF5IHRvIHN0b3JlIGNvbG9yIGhleCB2YWx1ZXMgb2YgZWFjaCBncmlkIGFzIHdoaXRlLlxuICByb3dzQXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgcj0wOyByIDwgcm93czsgKytyKSB7XG4gIFx0cm93c0FycmF5LnB1c2goW10pO1xuICAgIGZvciAobGV0IGM9MDsgYyA8IGNvbHVtbnM7ICsrYykge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsYWNrJztcblx0ICAgIGN0eC5zdHJva2VSZWN0KGdyaWRTaXplKmMsIGdyaWRTaXplKnIsIGdyaWRTaXplLCBncmlkU2l6ZSk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);