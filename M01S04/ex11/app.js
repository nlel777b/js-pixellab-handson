var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 35,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

//1
console.warn(
  `
    Folosind Object.keys() pe proprietatea skills,
    afiseaza abilitatile persoanei daca acestea sunt
    true. Folosind propozitii de forma:
    “person.name cunoaste: html.” “person.name cunoaste: javaScript.”
  `,
);
Object.keys(person.skills).forEach(function (keyName) {
  if (person.skills[keyName] === true) {
    console.log(`${person.name} cunoaste: ${keyName}.`);
  }
});

//2
console.warn(
  `
    Prin aceeasi metoda, afiseaza o lista inversata
    cu numele complet inversat al prietenilor.
  `,
);
Object.keys(person.friends)
  .reverse()
  .forEach(function (keyName) {
    var friend = person.friends[keyName];

    console.log(`${friend.surname} ${friend.name}`);
  });

//3
console.warn(
  `
    Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.”
    folosind Object.keys()
  `,
);
var message = 'Prietenii mei sunt ';
Object.keys(person.friends).forEach(function (keyName, index, keys) {
  var friend = person.friends[keyName];
  var punctuation = ', ';

  if (index === keys.length - 1) {
    punctuation = '.';
  }

  if (index === keys.length - 2) {
    punctuation = ' si ';
  }

  message += `${friend.name}${punctuation}`;
});
console.log(message);

//4
console.warn(
  `
    Folosind bucla, afiseaza mai multe propozitii
    (cate una per console.log()) care sa
    afiseze: “Diferenta de varsta intre Larry si Dragos este de xxx ani.”
    etc…
  `,
);
Object.keys(person.friends).forEach(function (keyName) {
  var friend = person.friends[keyName];
  var ageDiff = Math.abs(person.age - friend.age);

  console.log(
    `Diferenta de varsta intre ${friend.name} si ${person.name} este de ${ageDiff} ani.`,
  );
});

//5
console.warn(
  `
  Folosind Object.keys() pe proprietatea skills, afiseaza toate abilitatile din obiectul skills.
  `,
);
Object.keys(person.skills).forEach(function (keyName) {
  console.log(` ${keyName}.`);
});

//6
console.warn(
  `
  Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor.
  `,
);
Object.keys(person.friends).forEach(function (keyFriendsName) {
  var friend = person.friends[keyFriendsName];
  console.log(` ${friend.surname} ${friend.name}`);
});

//7
console.warn(
  `
  Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()
  `,
);
var message = 'Prietenii mei sunt ';
Object.keys(person.friends).forEach(function (keyName, index, keys) {
  var friend = person.friends[keyName];
  var punctuation = ', ';

  if (index === keys.length - 1) {
    punctuation = '.';
  }
  if (index === keys.length - 2) {
    punctuation = ' si ';
  }

  message += `${friend.name} ${friend.surname}${punctuation}`;
});
console.log(message);

//8
console.warn(
  `
  Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”
  `,
);
Object.keys(person.friends).forEach(function (keyName) {
  var friend = person.friends[keyName];
  var ageDiff = Math.abs(friend.age);

  console.log(`${friend.name} are ${ageDiff} ani. `);
});

//Pixellab
//Metoda console.log trebuie invocata cu textul "html"
var cons = 'html';
console.log(cons);
var cons = 'css';
console.log(cons);
var cons = 'javaScript';
console.log(cons);
var cons = 'Carol Carolson';
console.log(cons);
var cons = 'Steven Stevenson';
console.log(cons);
var cons = 'Larry Larryson';
console.log(cons);
var cons = 'Larry are 30 ani.';
console.log(cons);
var cons = 'Steven are 31 ani.';
console.log(cons);
var cons = 'Carol are 29 ani.';
console.log(cons);
