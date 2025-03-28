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
  `
    Folosind obiectul person si forEach,
    afiseaza skillurile din pozitiile impare ale arrayului.
  `,
);
person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

//2
console.warn(
  `
    In mod similar, afiseaza skillurile care contin litera a.
  `,
);
person.skills.forEach(function (skill) {
  if (skill.toLowerCase().includes('a')) {
    console.log(skill);
  }
});

//3
console.warn(
  `
    Folosind forEach afiseaza propozitia:
    "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."
  `,
);
var message = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';
  var friendsCount = friends.length;

  if (index === friendsCount - 1) {
    punctuation = '.';
  }

  // if (index === friendsCount - 2) {
  //   punctuation = ' si ';
  // }

  message += friend.name + ' ' + friend.surname + punctuation;
});
console.log(message);

//4
console.warn(
  `
    Folosind forEach, afiseaza numarul total de
    ani pe care il au persoanele din arrayul friends,
    doar daca au varsta mai mare decat 30 inclusiv.
  `,
);
var totalAge = 0;
person.friends.forEach(function (friend) {
  if (friend.age >= 30) {
    totalAge += friend.age;
  }
});
console.log(totalAge.toString());

//5
console.warn(
  `
    Folosind forEach, afiseaza suma anilor de nastere
    a persoanelor care au varsta impara.
  `,
);
var totalYears = 0;
var currentYear = 2022;
person.friends.forEach(function (friend) {
  var birthYear = currentYear - friend.age;

  if (friend.age % 2 !== 0) {
    totalYears += birthYear;
  }
});
console.log(totalYears.toString());

//6
console.warn(
  `
    Afiseaza diferenta de varsta dintre
    persoana si prietenii din arrayul friends daca
    aceasta este mai mare sau egala cu 2 ani.
  `,
);
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff >= 2) {
    console.log(ageDiff);
  }
});

//7
console.warn(
  `
    Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani.
    Intre Dragos si Steven... "
  `,
);
var message = '';
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);

  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';
});
console.log(message.trim());

//8
console.warn(
  `
    Folosind metoda reverse si apoi forEach, afiseaza
    in ordine inversa elementele arrayului skills.
  `,
);
person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });

//9
console.warn(
  `
  Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.
  `,
);
person.skills.forEach(function (skill, index) {
  console.log(skill);
});

//10
console.warn(
  `
  In mod similar, afiseaza skillurile care nu incep cu j.

  `,
);
person.skills.forEach(function (skill, index) {
  if (skill[0] !== 'j') {
    console.log(skill);
  }
});

//11
console.warn(
  `
  Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx." `,
);
var message = 'Numele mari ale prietenilor mei sunt ';
person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';
  var friendsCount = friends.length;

  if (index === friendsCount - 1) {
    punctuation = '. ';
  }

  message += friend.surname + punctuation;
});
console.log(message);

//12
console.warn(
  `
  Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends
`,
);
var totalAge = 0;
person.friends.forEach(function (friend) {
  totalAge += friend.age;

  console.log(totalAge.toString());
});

//13
console.warn(
  `
  Folosind forEach, afiseaza suma anilor de nastere a persoanelor`,
);
var totalYears = 0;
var currentYear = 2022;
person.friends.forEach(function (friend) {
  var birthYear = currentYear - friend.age;
  totalYears += birthYear;
  // if (friend.age % 2 !== 0) {
  //   totalYears += birthYear;
  // }
});
console.log(totalYears.toString());

//14
console.warn(
  `
  Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.
`,
);
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);
  console.log(ageDiff);
});

//15
console.warn(
  `
  Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.

`,
);

// person.friends.names
//   // .slice()
//   .reverse()
//   .forEach(function (name) {
//     console.log(name);
//   });
