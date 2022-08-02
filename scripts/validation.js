// 1: Tomar control con JS de los elementos del DOM que vamos a manejar.

const user = document.getElementById('user');
const password =
  document.getElementById('password');
const message =
  document.getElementById('message');

// 2: Escuchar los eventos que van a dispara la acción
const btn = document
  .getElementById('btn')
  .addEventListener('click', e => handleClick(e));

// 3: Creamos la función con la lógica
function handleClick(event) {
  // A los botones de los formularios, para controlarlos por completo, tengo que quitarles su funcion por defecto
  event.preventDefault();

  // Verifico que pueda capturar los valores de los input
  // console.log(user.value);
  // console.log(password.value);

  // Creo usuarios para comparar si el logueo es correcto o no
  const USERS = [
    { user: 'juan', password: 'juan' },
    { user: 'maria', password: 'maria' },
  ];

  // Vamos a simular la demora de la consulta a un backend utilizando funciones de tiempo
  message.innerHTML = 'Validando ...';

  setTimeout(() => {
    // Creo un flag o bandera para que controle si muestro el error o redireccion en caso de validar
    let validationOk = false;

    for (let i = 0; i < USERS.length; i++) {
      // Version clasica con for
      if (
        USERS[i].user === user.value &&
        USERS[i].password === password.value
      ) {
        validationOk = true;
        sessionStorage.setItem('login', 'true');
        // i = USERS.length <--- Opcion si quiero salir
      }
    }

    // Opcion con notacion funcional usando some
    // validationOk = USERS.some(
    //   u =>
    //     u.user === user.value &&
    //     u.password === password.value
    // );
    // console.log(validationOk);

    if (validationOk) {
      console.log('Validado');
      location.href = '/main.html';
    } else {
      message.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i>Usuario o contraseña incorrectos`;
    }
  }, 2000);

  // Agrego el valor del mensaje de error con template literals, usando backticks
}

function validationSessionStorage() {
  const login = JSON.parse(
    sessionStorage.getItem('login')
  );
  console.log(login);
  if (login === true) {
    location.href = '/main.html';
  }
}

validationSessionStorage();

// let original = {
//   breed: 'Turtle',
//   occupation: 'Ninja',
// };

// console.log('Objeto original');
// console.log(original);

// let stringify = JSON.stringify(original);

// console.log('Objeto despues del stringify');
// console.log(stringify);

// console.log('Objeto reconvertido con parse');

// let parse = JSON.parse(stringify);
// console.log(parse);
