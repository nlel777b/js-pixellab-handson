//1 (cu multiplu de 7)
// var number = prompt('Introdu un numar:');

// for (var i = 7; i <= 1000; i++) {
//   console.log(i);

//   if (i % number !== 0) {
//     continue;
//   }

//   console.log(`Acest numar este multiplu de ${number}.`);
// }

//2 + 3(cu multiplu de x)
var number = prompt('Introdu un numar:');

for (var i = 0; i <= 1000; i++) {
  console.log(i);
  if (i % number !== 0) {
    continue;
  }
  console.log(`Acest numar este multiplu de ${number}.`);
}
