//1
// var i = 1;

// do {
//   console.log(i);

//   i++;
// } while (i < 100);

//2
console.warn(
  `Modifica exemplul astfel incat bucla sa numere de la 1 la 99 (dar nu schimba numarul 100).`,
);
var i = 1;
do {
  if (i > 99) {
    i++;

    break;
  }
  console.log(i);
  i++;
} while (i <= 100);

//3
// var i = 1;

// do {
//   if (i > 50) {
//     i++;

//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 100);

//4
console.warn(
  `Modifica exemplul astfel incat bucla sa
  numere de la 1 la 52 `,
);
var i = 1;
do {
  if (i > 52) {
    i++;

    break;
  }
  console.log(i);
  i++;
} while (i <= 100);

//5
console.warn(
  `Modifica exemplul astfel incat bucla sa
  numere de la 1 la 51 `,
);
var i = 1;
do {
  if (i > 51) {
    i++;

    break;
  }
  console.log(i);
  i++;
} while (i <= 100);

//6
console.warn(
  `Modifica exemplul astfel incat bucla sa
  numere de la 1 la 51 `,
);
var i = 1;
do {
  if (i > 12) {
    i++;

    break;
  }
  console.log(i);
  i++;
} while (i <= 100);

//7
console.warn(
  `Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32.  `,
);
var i = 8;
do {
  if (i % 2 != 1) {
    i++;

    continue;
  }
  console.log(i);
  i++;
} while (i <= 32);

//8
console.warn(
  `Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita superioara apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse.  `,
);
