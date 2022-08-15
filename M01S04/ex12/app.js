//1
var globalVariable = 'Ma aflu in contextul global.';

function contextTest() {
  var localVariable = 'Ma aflu in contextul local';
  var globalVariable = 'Nu ma aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
  // console.log(noVariable);
}

contextTest();
console.log(globalVariable);

//2
console.warn(`Ce se intampla daca afisezi in
consola variabila localVariable imediat inainte de invocarea functiei contextTest?
`);

//3
console.warn(`Dar daca afisezi variabila globalVariable?
`);
