const person = {
  getName: function () {
    return 'Dragos Iordache';
  },

  getAge: function () {
    return 35;
  },
};
//1
console.warn(
  `
    Afiseaza primul nume al persoanei folosind metoda getName()
  `,
);
console.log(person.getName().split(' ')[0]);
//2
console.warn(
  `
    Afiseaza anul de nastere al persoanei folosind
    metoda getAge() si anul curent.
  `,
);
const currentYear = new Date().getFullYear();
const birthYear = currentYear - person.getAge();
console.log(birthYear);

//3
console.warn(
  `
    Afiseaza ultimele doua cifre al anului de nastere
    al persoanei, folosind anul curent si metoda
    getAge(). (Exemplu: 87).
  `,
);
console.log(`'${birthYear.toString().slice(-2)}`);

//4
console.warn(
  `
  Afiseaza propozita: “Ma numesc xxx si am yy ani!”
  `,
);
console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani.`);

//5
console.warn(
  `
  Afiseaza numele intreg al persoanei folosind metoda getName()
  `,
);
const personName = person.getName();
console.log(personName);

//6
console.warn(
  `
  Afiseaza varsta persoanei folosind metoda getAge()
  `,
);

console.log(person.getAge());

//7
console.warn(
  `
  Afiseaza anul de nastere al persoanei, intr-o propozitie de felul “M-am nascut in aaaa.”
  `,
);

const currentYear7 = new Date().getFullYear();
const birth7Year = currentYear7 - person.getAge();
console.log(`M-am nascut in ${birth7Year}.`);

//8
console.warn(
  `
  Afiseaza propozita: “Ma numesc xxx yyy m-am nascut acum aa ani in anul zzzz!”
  `,
);

console.log(
  `Ma numesc ${person.getName()} m-am nascut acum ${person.getAge()} ani in anul ${birthYear}!`,
);
