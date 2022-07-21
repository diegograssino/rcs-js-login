// 1: Controlo todos los elementos del DOM con los que voy a interactuar

const user = document.getElementById('user');
const pass = document.getElementById('pass');
const message = document.getElementById('footer');
const button = document
  .getElementById('button')
  .addEventListener('click', e => handleClick(e));

// 2: Creo funciones para manejar los eventos

function handleClick(event) {
  event.preventDefault();

  const USERS = [
    { user: 'maria@maria.maria', pass: 'maria' },
    { user: 'juan@juan.juan', pass: 'juan' },
  ];

  message.innerHTML = `Validando ...`;
  setTimeout(() => {
    console.log(user.value);
    console.log(pass.value);
    console.log(message.innerHTML);

    let validationOk = false;

    // Solución con for
    // for (let i = 0; i < USERS.length; i++) {
    //   console.log(USERS[i]);

    //   if (
    //     USERS[i].user === user.value &&
    //     USERS[i].pass === pass.value
    //   ) {
    //     validationOk = true;
    //   }
    // }

    // Solución con notación funcional utilizando some
    validationOk = USERS.some(
      u =>
        u.user === user.value &&
        u.pass === pass.value
    );

    if (validationOk) {
      window.location.href = '/main.html';
    } else {
      message.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Usuario o contraseña incorrecto`;
    }
  }, 2000);
}
