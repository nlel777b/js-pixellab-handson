// // var value = window.prompt('Introdu o valoare');
// // var message = '';
// // var messageParagraph = document.getElementById('message');

// // console.log('Valoarea este:' + value);

// // //1
// // if (value % 2 === 0) {
// //   message = 'Numarul este par ';
// // } else {
// //   message = 'Numarul este impar';
// // }

// // console.log(message);
// // messageParagraph.innerText = message;

// //3

// var value = window.prompt('Introdu o valoare');
// var message = '';
// var number = window.prompt('Cu ce numar compar?');

// value = Number(value);
// number = Number(number);

// if (value > 20) {
//   message = 'Numarul este mai mare decat 20 ';
// } else {
//   message = 'Numarul este mai mic decat 20';
// }

//  if (value > 20) {
//    message = `Numarul ${value} este mai mare decat ${number} `;
//  } else {
//    message = `Numarul ${value} este mai mic decat ${number}`;
//  }

// if (value === number) {
//   message = `Numarul ${value} este egal cu ${number} `;
// } else if (value > number) {
//   message = `Numarul ${value} este mai mare decat ${number}`;
// } else  {
//   message = `Numarul ${value} este mai mic decat ${number}`;

// var messageParagraph = document.getElementById('message');
// messageParagraph.innerText =message;

var value = window.prompt('Introdu o valoare');
var message = '';
var number = window.prompt('Cu ce numar compar?');

value = Number(value);
number = Number(number);

if (isNaN(value) === true) {
  message = 'Nu ai introdus un numar';
} else if (value === number) {
  message = `Numarul ${value} este egal cu ${number}`;
} else if (value > number) {
  message = `Numarul ${value} este mai mare decat ${number}`;
} else {
  message = `Numarul ${value} este mai mic decat ${number}`;
}

var messageParagraph = document.getElementById('message');
messageParagraph.innerText = message;
