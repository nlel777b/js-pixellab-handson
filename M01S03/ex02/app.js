var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 35,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: true,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Steveson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

/* 2*/
console.warn('Afiseaza varsta prietenei Carol');
console.log(person.friends.carol.age.toString());

/* 3*/
console.warn(
  'Folosind anul curent calculeaza si afiseaza anul de nastere a lui Larry',
);
console.log((2022 - person.friends.larry.age).toString());

/* 4*/
console.warn(
  'Calculeaza diferenta si afiseaza propozitia:"Steven este cu xx ani mai mare decat Larry."folosind proprietatile name.',
);
console.log(
  person.friends.steven.name +
    ' este cu ' +
    (person.friends.steven.age - person.friends.larry.age) +
    ' ani mai mare decat ' +
    person.friends.larry.name +
    '.',
);

/* 5*/
console.warn(
  'Afiseaza propozitia: "Prietenul meu Steven Stevenson are xx ani." folosind doar proprietatile',
);
console.log(
  'Prietenul meu' +
    person.friends.steven.name +
    ' ' +
    person.friends.steven.surname +
    ' are ' +
    person.friends.steven.age +
    ' ani .',
);

/* 6*/
console.warn(
  'Afiseaza propozitia: "Prietenii mei sunt:Steven, Carol si Larry."',
);
console.log(
  'Prietenii mei sunt:' +
    person.friends.steven.name +
    ' , ' +
    person.friends.carol.name +
    ' si ' +
    person.friends.larry.name +
    ' . ',
);

/* 7*/
console.warn(
  'Afiseaza numarul de caractere al numelui de familie a lui Steven',
);
console.log(person.friends.steven.surname.length.toString());

/* Pixellab */
console.warn('Prietenul meu Steven Stevenson are 31 ani.');
console.log('Prietenul meu Steven Stevenson are 31 ani.');

console.warn('Prietenii mei sunt: Steven, Carol si Larry.');
console.log('Prietenii mei sunt: Steven, Carol si Larry.');

console.warn('1991');
console.log('1991');

console.warn('Steven este cu 2 ani mai mare decat Carol.');
console.log('Steven este cu 2 ani mai mare decat Carol.');

console.warn('Prietena mea Carol Carolson are 29 ani.');
console.log('Prietena mea Carol Carolson are 29 ani.');

console.warn('Prietenii mei sunt: Larry, Carol si Steven..');
console.log('Prietenii mei sunt: Larry, Carol si Steven.');

console.warn('1');
console.log('1');
