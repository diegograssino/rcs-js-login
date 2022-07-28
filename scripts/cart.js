const content =
  document.getElementById('content');

function cartControl() {
  let validationOk = false;
  validationOk = validateUser(
    sessionStorage.getItem('user'),
    sessionStorage.getItem('pass')
  );
  if (validationOk) {
    content.innerHTML = `<section id="login-ok">
			<div>
				<h2>Login Correcto!</h2>
			</div>
		</section>`;
  } else {
    content.innerHTML = `<section id="login-error">
			<div>
				<a href="../index.html">Ir a iniciar sesión.</a>
			</div>
		</section>`;
  }
}

cartControl();
