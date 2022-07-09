var inputlength = documen.getElementById('length');
var inputwidth = documen.getElementById('width');
var elementResult = documen.getElementById('result');
var form = documen.querySelector('form');
var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var length = inputLength.value || 0;
  var width = inputWidth.value || 0;
  var result = 0;

  result = length * width;

  elementResult.innerText = result;

  e.PreventDefault();
});

form.addEventListener(
  'submit',
  function (event) {
    var length = inputLength.value || 0;
    var width = inputWidth.value || 0;
    var result = 0;

    result = length * width;

    elementResult.innerText = result;

    event.preventDefault();
  },
  false,
);
