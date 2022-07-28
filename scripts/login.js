// 1: Controlo todos los elementos del DOM con los que voy a interactuar

const user = document.getElementById('user');
const pass = document.getElementById('pass');
const message = document.getElementById('footer');
const button = document
  .getElementById('button')
  .addEventListener('click', e => handleClick(e));

// 3: Para reutilizar la validación en otras partes del sitio y que funcione correctamente, sacamos todo ese algoritmo y lo ponemos en una función aparte.

// 2: Creo funciones para manejar los eventos

function handleClick(event) {
  event.preventDefault();
  message.innerHTML = `Validando ...`;

  setTimeout(() => {
    let validationOk = false;
    validationOk = validateUser(user.value, pass.value);
    if (validationOk) {
      window.location.href = '/cart';
    } else {
      message.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Usuario o contraseña incorrecto`;
    }
  }, 2000);
}

function loginControl() {
  let validationOk = false;
  validationOk = validateUser(localStorage.getItem('user'), localStorage.getItem('pass'));
  if (validationOk) {
    window.location.href = '/cart';
  }
}

loginControl();
