const person = {
  getName: function () {
    return 'Dragos Iordache';
  },
  getAge: function () {
    return 35;
  },
};

// forced example
function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return person[methodName]();
}

console.log(accessor('Name'));

//1
console.warn(
  `
    Folosind accesorul salveaza numele mic al
    persoanei intr-o variabila si foloseste-l
    in propozitia: “Eu sunt xxx.”
  `,
);
const firstName = accessor('Name');
console.log(`Eu sunt ${firstName}.`);

//2
console.warn(
  `
    Afiseaza anul de nastere al persoanei
    folosind anul curent.
  `,
);
const currentYear = new Date().getFullYear();
const birthYear = currentYear - accessor('Age');
console.log(birthYear.toString());

//3
console.warn(
  `
    Afiseaza propozitia
    “Ma numesc xxx yyy, am aa ani si m-am nascut in anul aaaa.”
  `,
);
console.log(
  `Ma numesc ${accessor('Name')}, am ${accessor(
    'Age',
  )} ani si m-am nascut in anul ${birthYear}.`,
);

//5
console.warn(
  `
  Folosind accesorul afiseaza numele persoanei.
  `,
);
const first5Name = accessor('Name');
console.log(`${first5Name}.`);

//6
console.warn(
  `
  Afiseaza varsta persoanei.
  `,
);

const agePerson = accessor('Age');
console.log(`${agePerson}.`);

//7
console.warn(
  `
  Afiseaza anul de nastere al persoanei folosind anul curent. Intr-o propozitie de forma “M-am nascut in 1987.”
  `,
);

console.log(`M-am nascut in ${birthYear}.`);

//8
console.warn(
  `
  Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”
  `,
);
console.log(`Ma numesc ${accessor('Name')} si am ${accessor('Age')} ani!`);
