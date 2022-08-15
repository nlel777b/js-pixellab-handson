var friends = [
  {
    name: 'Dragos',
    surname: 'Iordache',
  },
  {
    name: 'Larry',
    surname: 'Larryson',
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
  },
  {
    name: 'Carol',
    surname: 'Carolson',
  },
  {
    name: 'Andra',
    surname: 'Andrason',
  },
];

var friendsCount = friends.length;
//1
console.warn(
  `
    Folosind o bucla for afiseaza proprietatea
    surname a tuturor obiectelor din arrayul friends.
  `,
);
for (var i = 0; i < friendsCount; i++) {
  console.log(friends[i].surname);
}

//2
console.warn(
  `
    Afiseaza numele complet inversat al tuturor prietenilor,
    insa o data ce l-ai gasit pe steven, opreste
    bucla cu ajutorul keywordului break si afiseaza propozitia: “M-am oprit la Stevenson Steven.”.
  `,
);

for (var i = 0; i < friendsCount; i++) {
  var friend = friends[i];
  var fullName = friend.surname + ' ' + friend.name;

  if (friend.name === 'Steven') {
    console.log('M-am oprit la ' + fullName + '.');

    break;
  }

  console.log(fullName);
}

//3
console.warn(
  `
    Folosind keywordul continue, afiseaza numele complet inversat al prietenilor,
    doar daca numarul de caractere total al numelor lor este mai mare de 13
    sub forma de propozitii “Prenume Nume are mai mult de 13 caractere.”.
  `,
);
for (var i = 0; i < friendsCount; i++) {
  var friend = friends[i];
  var fullName = friend.surname + ' ' + friend.name;

  if (fullName.replaceAll(' ', '').length <= 13) {
    continue;
  }

  console.log(fullName + ' are mai mult de 13 caractere.');
}

//4
console.warn(`Folosind o bucla for afiseaza proprietatea name a tuturor obiectelor din arrayul friends.
`);
for (var i = 0; i < friendsCount; i++) {
  var name = friends[i].name;
  console.log(name);
}

//5
console.warn(`Afiseaza numele complet al tuturor prietenilor.
`);
for (var i = 0; i < friendsCount; i++) {
  var fullName = friends[i].name + ' ' + friends[i].surname;
  console.log(fullName);
}

//5
console.warn(`Folosind keywordul break, afiseaza numele complet al prietenilor dar opeste bucla la primul surname care are numarul de caractere mai mare sau egal decat 9 si afiseaz-l intr-o propozitie de forma “M-am oprit la Nume Prenume.”.

`);
for (var i = 0; i < friendsCount; i++) {
  var friend = friends[i];
  var fullName = friend.surname + ' ' + friend.name;

  if (friend.surname >= '9') {
    console.log('M-am oprit la ' + fullName + '.');

    break;
  }

  console.log(fullName);
}
