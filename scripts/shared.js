function validateUser(user, pass) {
  const USERS = [
    { user: 'maria@maria.maria', pass: 'maria' },
    { user: 'juan@juan.juan', pass: 'juan' },
  ];
  // Solución con notación funcional utilizando some
  let validation = USERS.some(
    u => u.user === user && u.pass === pass
  );
  if (validation) {
    sessionStorage.setItem('user', user);
    sessionStorage.setItem('pass', pass);
  }
  return validation;
}
