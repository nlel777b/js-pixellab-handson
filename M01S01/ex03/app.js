/*var inputlength = documen.getElementById('length');
var inputwidth = documen.getElementById('width');
var inputheight = documen.getElementById('height');
var elementResult = documen.getElementById('result');
var form = documen.querySelector('form');

var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var inputheight = documen.getElementById('height');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var length = inputLength.value || 0;
  var width = inputWidth.value || 0;
  var height = inputHeight.value || 0;
  var result = 0;

  result = length * width * height;

  elementResult.innerText = result;
});

form.addEventListener('submit', function (event) {
  var length = inputLength.value || 0;
  var width = inputWidth.value || 0;
  var height = inputHeight.value || 0;
  var result = 0;

  result = length * width * height;

  elementResult.innerText = result;

  event.preventDefault();
});*/

/* */

var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var inputheight = documen.getElementById('height');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var length = inputLength.value || 0;
  var width = inputWidth.value || 0;
  var height = inputHeight.value || 0;
  var result = 0;

  result = length * width * height;

  elementResult.innerText = result;
});
