//const vypisPozdrav = () => {
  //document.body.innerHTML += "Ahoooooj";
//};

//vypisPozdrav();

//const dvakratAhoj = () => {
  //const ahoj = "Ahoooj";
  
  //return `${ahoj} ${ahoj}`;
//};//

/*const zdvoj = (text) => {
  return `${text}${text}`;
};
document.body.innerHTML += zdvoj ("Ha");*/

//cisla, řetězce,objekty,funkce jsou hodnoty,null/undefined

/*const mojeHodnota = () => {
  return "Ahoj";
};

const predanaHodnota = mojeHodnota;

document.body.innerHTML += predanaHodnota ();*/

/*const pozdrav = () => {
  document.body.innerHTML += 'ČAUuuuuuuuuuuuuuu';
};
setTimeout(pozdrav, 1000);*/

const tlacitko = document.querySelector("#button-order");

const message = document.querySelector("#message");

//const objednat = () => {
//  tlacitko.textContent = "Objednat" 2.úkol
//  }

const order = () => {
  tlacitko.textContent = "Objednáno"
};

tlacitko.addEventListener('click', order);

//html změním kontroluji dostupnost v tom button

//setTimeout(objednat, 2000); -také druhý úkol

/*const messageElm = document.querySelector('#message');
const buttonElm = document.querySelector('#button-order');
const setMessage = () => {
  buttonElm.textContent = 'Objednáno';
};
buttonElm.addEventListener('click', setMessage);
setTimeout(() => {
  buttonElm.textContent = 'Objednat';
  buttonElm.disabled = false;
}, 8000);*/ /*2.úkol*/
