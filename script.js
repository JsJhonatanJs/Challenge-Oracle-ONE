function encriptar() {
  let cambiar = textTarea.value;
  let buscar = cambiar.search(/^[a-z\u00f1\s]+$/);
  let numero_0 = 0;
  let numero_1 = 1;

  if (0 === buscar) {
    for (let i = 2; i <= vocales.length; i = i + 2) {
      cambiar = cambiar.replaceAll(vocales[numero_0], vocales[numero_1]);
      numero_0 = numero_0 + 2;
      numero_1 = numero_1 + 2;
    }
    cambiar = cambiar.toLowerCase();
    titulo.innerHTML = "Mensaje encriptado";
    textTarea_2.value = cambiar;
  } else {
    alerta(470, 3000, "error", "Solo se permite letras en minúsculas");
    titulo.innerHTML = "Mensaje";
  }
}

function desencriptar() {
  let cambiar = textTarea.value;
  let buscar = cambiar.search(/^[a-z\u00f1\s]+$/);
  let numero_0 = 0;
  let numero_1 = 1;

  if (0 === buscar) {
    for (let i = 2; i <= vocales_1.length; i = i + 2) {
      cambiar = cambiar.replaceAll(vocales_1[numero_0], vocales_1[numero_1]);
      numero_0 = numero_0 + 2;
      numero_1 = numero_1 + 2;
    }
    cambiar = cambiar.toLowerCase();
    titulo.innerHTML = "Mensaje desencriptado";
    textTarea_2.value = cambiar;
  } else {
    alerta(470, 3000, "error", "Solo se permite letras en minúsculas");
    titulo.innerHTML = "Mensaje";
  }
}

function copio() {
  let contenido = textTarea_2.value;
  navigator.clipboard.writeText(contenido).catch(() => {
    nube = textTarea_2.value;
    textTarea_2.select();
    document.execCommand("copy");
    pegar.focus();
  });
  alerta(210, 1500, "success", "Copiado");
}

function pego() {
  navigator.clipboard
    .readText()
    .then((almacen) => (textTarea.value = almacen))
    .catch(() => {
      textTarea.value = nube;
    });
}

function borrado() {
  textTarea.value = "";
}

function borrado1() {
  textTarea_2.value = "";
}

function alerta(tamaño, tiempo, icono, palabra) {
  const Toast = Swal.mixin({
    toast: true,
    width: tamaño,
    position: "top",
    showConfirmButton: false,
    timer: tiempo,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icono,
    title: palabra,
  });
}

let vocales = ["a", "AI", "e", "ENTER", "i", "IMES", "o", "OBER", "u", "UFAT"];
let vocales_1 = [
  "ai",
  "A",
  "enter",
  "E",
  "imes",
  "I",
  "ober",
  "O",
  "ufat",
  "U",
];

let nube;

let titulo = document.querySelector("#titulo_2");

let textTarea = document.querySelector("#textTarea");
let textTarea_2 = document.querySelector("#textTarea_2");

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
borrar.onclick = borrado;
borrar1.onclick = borrado1;

/*
  La letra "e" es convertida para "enter"
  La letra "i" es convertida para "imes"
  La letra "a" es convertida para "ai"
  La letra "o" es convertida para "ober"
  La letra "u" es convertida para "ufat"
  */
