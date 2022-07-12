/* 1 */
var object = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 35,
  petOwner: false,
  carOwner: false,
};

/* 2 */
console.warn(`Afiseaza fraza "Ma numesc xxx yyy si am xx ani".
`);
console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' ani.',
);

/* 3 */
console.warn(
  `Afiseaza anul in care te-ai nascut scazand varsta pe care ai trecut-o in obiect din anul curent(un proces numit hardcodare )`,
);
console.log((2022 - object.age).toString());

/* 4 */
console.warn(
  `Adauga o cheie noua de tip boolean cu numele petOwner(observa capitalizarea)`,
);

/* 5 */
console.warn(
  `Afiseaza fraza "xxx yyy are xx ani" in consola folosind operatorul de concatenare `,
);
console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani. ',
);

/* 6 */
console.warn(
  `Afiseaza fraza "xxx s-a nascut in aaaa" foloseste tot anul curent pentru a scade varsta `,
);
console.log(
  object.name + ' ' + ' s-a nascut in ' + (2022 - object.age).toString(),
);

/* 7 */
console.warn(
  `Adauga o cheie noua de tip boolean cu numele carOwner(observa capitalizarea)`,
);

/* din Pixellab*/
console.log(object.name);
console.log(object.age.toString());
/*console.log(
  object.name +
    ' ' +
    object.surname +
    ' are ' +
    object.age +
    ' ani. ',
);*/
console.log('Dragos Iordache are 35 ani.');

/*console.log(
  object.name + ' ' + ' s-a nascut in ' + (2022 - object.age).toString(),
);*/
console.log('Dragos s-a nascut in 1987.');
