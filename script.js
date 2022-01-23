function encriptar() {
  let cambiar = input.value;
  let buscar = cambiar.search("^[a-z\u00f1 ]+$");
  let numero_0 = 0;
  let numero_1 = 1;

  if (0 === buscar) {
    for (let i = 2; i <= vocales.length; i = i + 2) {
      cambiar = cambiar.replaceAll(vocales[numero_0], vocales[numero_1]);
      numero_0 = numero_0 + 2;
      numero_1 = numero_1 + 2;
    }
    cambiar = cambiar.toLowerCase();
    input2.value = cambiar;
  } else {
    alert("Solo se permite letras en minusculas");
  }
}

function desencriptar() {
  let cambiar = input.value;
  let buscar = cambiar.search("^[a-z\u00f1 ]+$");
  let numero_0 = 0;
  let numero_1 = 1;

  if (0 === buscar) {
    for (let i = 2; i <= vocales_1.length; i = i + 2) {
      cambiar = cambiar.replaceAll(vocales_1[numero_0], vocales_1[numero_1]);
      numero_0 = numero_0 + 2;
      numero_1 = numero_1 + 2;
    }
    cambiar = cambiar.toLowerCase();
    input2.value = cambiar;
  } else {
    alert("Solo se permite letras en minusculas");
  }
}

function copio() {
  let contenido = input2.value;
  navigator.clipboard.writeText(contenido)
  .catch(() => {
    nube = input2.value;
    input2.select();
    document.execCommand("copy");
    input2.blur();
  });
}

function pego() {
  navigator.clipboard.readText()
    .then((almacen) => (input.value = almacen))
    .catch(() => {
      input.value = nube;
    });
}

function borrado() {
  
  input.value = "";

}

function borrado1() {
  
  input2.value = "";

}

let vocales = ["a", "AI", "e", "ENTER", "i", "IMES", "o", "OBER", "u", "UFAT"];
let vocales_1 = ["ai", "A", "enter", "E", "imes", "I", "ober", "O", "ufat", "U"];

let nube;

let input = document.querySelector("#input");
let input2 = document.querySelector("#input2");

let boton = document.querySelector("#encriptar");
boton.onclick = encriptar;

let boton2 = document.querySelector("#desencriptar");
boton2.onclick = desencriptar;

let copiar = document.querySelector("#copiar");
copiar.onclick = copio;

let pegar = document.querySelector("#pegar");
pegar.onclick = pego;

let borrar = document.querySelector("#borrar");
let borrar1 = document.querySelector("#borrar1");
borrar.onclick = borrado
borrar1.onclick = borrado1

/*
  La letra "e" es convertida para "enter"
  La letra "i" es convertida para "imes"
  La letra "a" es convertida para "ai"
  La letra "o" es convertida para "ober"
  La letra "u" es convertida para "ufat"
  */
