console.log(`
    Dragos este instructor de programare. Dragos studiaza JavaScript de la 17 ani.
    Cand Dragos a absolvit facultatea si-a facut licenta in JavaScript.
    Dragos are si un master in tehnologii internet.
    Dragos este instructor Pixellab si preda JavaScript acolo.
`);

var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  email: 'dragos@gmail.com',
  birthYear: 1984,
  pets: [
    (gia = {
      name: 'Gia',
      species: 'lup',
      age: 9,
    }),
    (mali = {
      name: 'Mali',
      species: 'chihuahua',
      age: 14,
    }),
    (sali = {
      name: 'Sali',
      species: 'ciobanesc',
      age: 7,
    }),
  ],
  zipCode: '6789',
};
console.log(person);

console.log(person.pets.length);

// / 6 /
console.warn(
  `Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets. `,
);

console.log(
  `Numele meu este: ${person.firstName} ${person.lastName} si am  ${person.pets.length} animale  .`,
);

// / 7 /
console.warn(
  `Afiseaza propozitia: “Am acelasi email din copilarie: dragos@gmail.com.”`,
);

console.log('Am acelasi email din copilarie: ' + person.email + ' .');

// / 8 /
console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.`,
);

console.log(
  'Unul din cele  ' +
    person.pets.length +
    ' animale ale mele este' +
    pets.mali.species +
    ' si are' +
    pets.mali.age +
    ' ani' +
    '.',
);

// / 9 /
console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2. `,
);

console.log((2022 - person.pets.mali.age).toString());

// / 10 /
console.warn(
  `Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.`,
);
var difference =
  (2022 - person.birthYear).toString() - (2022 - gia.age).toString();
console.log(difference);

// / 11 /
console.warn(
  `Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName. `,
);
var petName = 'Gia';
console.log(petName);

// / 12 /
console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”. `,
);

console.log(
  'Intre' +
    firstName +
    ' si' +
    petName +
    'este o diferenta de difference ani ' +
    '.',
);

// / 13 /
console.warn(
  `In documentul HTML creeaza o lista neordonata <ul> cu 4 elemente goale <li>.  `,
);

// / 14 /
console.warn(`Fiecare li sa aiba un id: prop01, prop02… etc `);

// / 15 /
console.warn(
  `Folosind metoda document.getElementById() afiseaza urmatoarele 5 afirmatii despre obiectul person.
  `,
);

var li01 = document.getElementById('prop01');
li01.innerText = person.name + ', ' + ' locuiesc in aceeasi casa';

// / 16 /
console.warn(
  `Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)
  `,
);

console.log(
  firstName +
    ', ' +
    pet1 +
    pet2 +
    pet3 +
    'locuiesc toti in aceeasi casa ' +
    '.',
);

// / 17 /
console.warn(
  `Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2
  `,
);

console.log(person.pets[0].age - person.pets[2]).toString;

// / 18 /
console.warn(
  `Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”`,
);

console.log(
  'Ma numesc ' +
    person.firstName +
    ' ' +
    person.lastName +
    ', ' +
    'm-am sacut in ' +
    person.birthYear +
    'si codul meu postal este: ' +
    person.zipCode +
    '. ',
);

// / 19 /
console.warn(
  `Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea. `,
);

console.log(
  'Animalele mele s-au nascut in ' +
    2022 -
    person.pets.name[0].age +
    ', ' +
    2022 -
    person.pets.name[1].age +
    ', ' +
    'respectiv ' +
    2022 -
    person.pets.name[2].age,
);

// / 20 /
console.warn(`Folosirea variabilelor este optionala dar incurajata. `);
