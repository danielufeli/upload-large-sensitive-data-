const signForm = () => {
  const userEmail = document.getElementById('email').value;
  const userPassword = document.getElementById('password').value;

  const url = '/api/v1/auth/signin';

  const signInData = {
    email: userEmail,
    password: userPassword,
  };
  document.getElementById('errorlog').innerHTML =
    '<img src="./public/img/loading.gif">';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signInData),
  })
    .then((res) => res.json())
    .then((body) => {
      if (body.status === 'success') {
        localStorage.setItem('token', body.token);
        window.location.href = 'dashboard.html';
      } else {
        const msg = body.errors.map((m) => {
          if (m.msg) return m.msg;
          if (m.email) return m.email;
        });
        document.getElementById('errorlog').innerHTML = msg;
      }
    });
};
const signBtn = document.getElementById('loginBtn');
signBtn.addEventListener('click', signForm);
