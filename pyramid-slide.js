var heightSlider = document.getElementById("slider");
var brickSelect = document.getElementById("brick-symbols");
var pyramid = document.getElementById("pyramid");


brickSelect.addEventListener("change", function() {
  heightInt = Number(heightSlider.value);
  if (heightInt > 0 ) {
    drawPyramid(heightInt);
  }
});

heightSlider.addEventListener("input", function() {
  var heightStr = heightSlider.value;
  document.getElementById("height").innerHTML = heightStr;
  heightInt = Number(heightStr);
  brick = brickSelect.selectedIndex.value;

  drawPyramid(heightInt);
});

function drawPyramid(height) {

  pyramid.innerHTML = "";
  var brick = document.getElementById("brick-symbols").value;

  for (var row=0; row<height; row++) {

    var numBricks = row + 2;
    var numSpaces = height - row - 1;

    var rowStr="";
    for(var i=0; i<numSpaces; i++) {
      var spaceChar = "&nbsp";
      rowStr += spaceChar;
    }
    for (var i=0; i<numBricks; i++) {

      rowStr += brick;
    }

    rowElem = document.createElement("p");
    rowElem.innerHTML = rowStr;
    pyramid.appendChild(rowElem);
  }
}
