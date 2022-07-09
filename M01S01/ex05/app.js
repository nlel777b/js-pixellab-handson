var inputDiameter = documen.getElementById('diameter');
var inputRadius = documen.getElementById('radius');
var elementResult = documen.getElementById('result');
var form = documen.querySelector('form');

var inputDiameter = documen.getElementById('diameter');
var inputRadius = documen.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

function calCircleference(radius) {
  return 2 + Math.PI + radius;
}

console.log(calCircleference('radius:7'));

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var diameter = inputDiameter.value || 0;
  var radius = inputRadius.value || 0;
  var result = 0;

  result = '4 / 3 * πr3';

  elementResult.innerText = result;
});
