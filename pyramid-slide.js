var heightSlider = document.getElementById("slider");
var pyramid = document.getElementById("pyramid");

heightSlider.addEventListener("input", function() {
  var heightStr = heightSlider.value;
  document.getElementById("height").innerHTML = heightStr;
  var heightInt = Number(heightStr);

  drawPyramid(heightInt);
});

function drawPyramid(height) {

  pyramid.innerHTML = "";

  for (var row=0; row<height; row++) {

    var numBricks = row + 2;
    var numSpaces = height - row - 1;

    var rowStr="";
    for(var i=0; i<numSpaces; i++) {
      var spaceChar = "&nbsp";
      rowStr += spaceChar;
    }
    for (var i=0; i<numBricks; i++) {

      // TODO change rowStr to user input

      rowStr += "#";
    }

    rowElem = document.createElement("p");
    rowElem.innerHTML = rowStr;
    pyramid.appendChild(rowElem);
  }
}
