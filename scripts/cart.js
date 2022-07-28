const content = document.getElementById('content');

function cartControl() {
  let validationOk = false;
  validationOk = validateUser(localStorage.getItem('user'), localStorage.getItem('pass'));
  if (validationOk) {
    content.innerHTML = `<section id="login-ok">
			<div>
				<h2>Login Correcto!</h2>
			</div>
		</section>`;
    console.log('Login Ok');
  } else {
    content.innerHTML = `<section id="login-error">
			<div>
				<a href="../index.html">Ir a iniciar sesión.</a>
			</div>
		</section>`;
    console.log('Login Error');
  }
}

cartControl();
