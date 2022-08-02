const content =
  document.getElementById('content');

function validationSessionStorage() {
  const login = JSON.parse(
    sessionStorage.getItem('login')
  );

  if (login === true) {
    content.innerHTML = `<h2>Logueado correctamente</h2>`;
  } else {
    content.innerHTML = `<h2>Debe Loguearse</h2>`;
  }
}

validationSessionStorage();
