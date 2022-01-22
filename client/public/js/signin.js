const signForm = () => {
  const userEmail = document.getElementById('email').value;
  const userPassword = document.getElementById('password').value;

  const url = 'http://localhost:3000/api/v1/auth/signin';

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
        document.getElementById('errorlog').innerHTML = Object.values(body);
      }
    });
};
const signBtn = document.getElementById('loginBtn');
signBtn.addEventListener('click', signForm);
