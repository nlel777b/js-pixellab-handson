var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 35,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};
//1
console.warn(
  `Folosind obiectul person si un for, afiseaza in
  consola skillurile de pe pozitiile pare ale arrayului.`,
);
for (let i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (i % 2 === 0) {
    console.log(skill);
  }
}
//2
console.warn(
  `
  In mod similar, afiseaza skillurile care NU incep cu j.
  `,
);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill[0] !== 'j') {
    console.log(skill);
  }
}
//3
console.warn(
  `
    Folosind un for afiseaza propozitia:
    "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."
  `,
);

var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }

  // v1
  message = message + friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

//4
console.warn(
  `
    Folosind un for, afiseaza numarul total de ani
    pe care il au persoanele din arrayul friends,
    doar daca varsta este mai mare sau egala cu 30 de ani.
  `,
);
var sumAge = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  if (friend.age >= 30) {
    sumAge = sumAge + friend.age;
  }
}
console.log(sumAge.toString());

//5
console.warn(
  `
  Folosind un for, afiseaza suma anilor de nastere ai persoanelor.
  `,
);
var currentYear = 2022;
var sumYears = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  sumYears = sumYears + currentYear - friend.age;
}
console.log(sumYears + '');

//6
console.warn(
  `
  Afiseaza diferenta de varsta dintre persoana si
  prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani.
  `,
);
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff > 2) {
    console.log(ageDiff);
  }
}

//7
console.warn(`Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara.
`);

var message = '';
for (var i = 1; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);
  if (i % 2 != 1) {
    console.log(message);
  }
  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';
}

//8
console.warn(
  ` Folosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.`,
);

var message = 'Skills: ';
for (var i = person.skills.length - 1; i >= 0; i--) {
  var skill = person.skills[i];
  var punctuation = ', ';

  if (i === 0) {
    punctuation = '.';
  }

  message = message + skill + punctuation;
}
console.log(message);

//9
console.warn(`Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana
`);

// for (var  i = person.skills.length; i >= 0; i++) {
//   var skill = person.skills[i];
//   var punctuation = ', ';
//   if (i >= 0) {
//     punctuation = '.';
//   }
//   message = message + skill + punctuation;
// }
// console.log(message);

//10
console.warn(` In mod similar, afiseaza skillurile care incep cu c
`);
for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill[0] === 'c') {
    console.log(skill);
  }
}

//11
console.warn(
  ` Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx, xxx."`,
);
// var message ='Numele de familie ale prietenilor mei sunt: ';
// for(var i = 0; i < person.friends.surname; 1++) {
//   var surname = person.friends[i];
//   var punctuation = ', ';

//   if (i === person.friends.surname) {
//     punctuation = '. ';
//   }
//   message = message + surname + punctuation;

// }
// console.log(message);

//12
console.warn(
  `
  Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends.
  `,
);

//13
console.warn(
  `
  Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.
  `,
);

//14
console.warn(
  `
  Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ".
  Repeta pentru tot arrayul friends.
  `,
);
var message = '';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';
}
console.log(message.trim());

//15
console.warn(
  `
    Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.”
    in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).
  `,
);
var message = 'Prietenii mei sunt: ';
for (var i = person.friends.length - 1; i >= 0; i--) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === 0) {
    punctuation = '.';
  }

  message += friend.name + ' ' + friend.surname + punctuation;
}
console.log(message);

//Pixellab
console.warn(`"Intre Dragos si Carol este o diferenta de 6 ani.".`);
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age[2]);
  console.log(
    `Intre ${person.name} si ${friends[2].name} este o diferenta de ${ageDiff}.toString() ani .`,
  );
}
