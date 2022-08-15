//1
// var i = 1;

// while (i < 100) {
//   console.log(i);

//   i++;
// }

//2
console.warn(`Ce se intampla daca i este initializat cu valoarea 101?`);
var i = 0;

while (i < 101) {
  console.log(i);

  i++;
}

//3
// console.warn(
//   `Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).`,
// );
// var i = 1;

// while (i < 100) {
//   if (i == 100) {
//     break;
//   }

//   console.log(i);

//   i++;
// }

//4
// Folosind keywordul break opreste bucla
// atunci cand numarul este egal cu 50 (dar afiseaza-l).
// var i = 1;

// while (i < 100) {
//   if (i > 50) {
//     i++; // <- important

//     break;
//   }

//   console.log(i);

//   i++;
// }

//5
console.warn(
  `Modifica exemplul astfel incat bucla sa
  numere de la 1 la 67.
  .`,
);
var i = 1;

while (i < 100) {
  if (i == 68) {
    break;
  }

  console.log(i);

  i++;
}

//6
console.warn(`Modifica exemplul astfel incat bucla sa numere de la 1 la 66.`);
var i = 1;

while (i <= 66) {
  console.log(i);

  i++;
}

//7
console.warn(`Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).
`);
var i = 1;

while (i < 100) {
  if (i > 12) {
    i++;
    break;
  }

  console.log(i);

  i++;
}

//8
console.warn(`Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv).
`);
var i = 1;

while (i < 32) {
  if (i % 2 != 1) {
    i++;
    continue;
  }

  console.log(i);

  i++;
}

//9
console.warn(`Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.
`);
var number = prompt(`Introdu un numar!`);
var messageLimit = prompt(`Introdu o limita superioara!`);

var i = 5;

while (i < 100) {
  if (i % number != 0) {
    i++;
    continue;
  }

  console.log(`Acest numar este multiplu de ${number}.`);
  i++;
}
