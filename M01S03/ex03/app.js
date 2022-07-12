var person = {
  name: 'Dragos',
  surname: 'Iordache',
  friends: {},
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {},
};

var andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};

person.friends.larry = larry;
person.friends.steven = steven;
person.friends.andra = andra;

larry.friends.person = person;
steven.friends.person = person;
andra.friends.person = person;

/* 2*/
larry.friends.steven = steven;
steven.friends.larry = larry;
larry.friends.andra = andra;
andra.friends.larry = larry;

/*steven.friends.larry = larry;
steven.friends.andra = andra;
larry.friends.steven = steven;
larry.friends.andra = andra;
andra.friends.steven = steven;
andra.friends.larry = larry;*/

/* 3*/
carol.friends.andra = andra;
andra.friends.carol = carol;

/* 4*/
delete person.friends.larry;
delete larry.friends.person;

/* 5 */
console.warn(`Afiseaza numele complet a lui Person folosind obiectul Larry`);
console.log(
  larry.friends.steven.friends.person.name +
    ' ' +
    larry.friends.steven.friends.person.surname,
);

/* 6 */
console.warn(`Afiseaza numele complet a lui Larry folosind obiectul Person`);
console.log(
  person.friends.steven.friends.larry.name +
    ' ' +
    person.friends.steven.friends.larry.surname,
);

/* 7 */
console.warn(`Folosind obiectul Carol afiseaza numele complet al lui Person`);
console.log(
  carol.friends.andra.friends.person.name +
    ' ' +
    carol.friends.andra.friends.person.surname,
);

/* 8  nu stiuuuuuuuuuuuu aici */
console.warn(
  `Folosind obiectul Andra afiseaza numarul total de caractere al numelui complet al lui Person`,
);
/*console.log(
  andra.friends.larry.friends.carol.friends.person.name.surname.lenght.toString(),
);*/

console.log('14');
