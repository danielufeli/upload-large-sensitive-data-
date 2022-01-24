const signUpForm = (e) => {
  e.preventDefault();
  const userEmail = document.getElementById('email').value;
  const userPassword = document.getElementById('password').value;
  const userName = document.getElementById('name').value;

  const url = '/api/v1/auth/signup';

  const signUpData = {
    email: userEmail,
    password: userPassword,
    name: userName,
  };
  document.getElementById('errorlog').innerHTML =
    '<img src="./public/img/loading.gif">';
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signUpData),
  })
    .then((res) => res.json())
    .then((body) => {
      if (body.status === 'success') {
        localStorage.setItem('token', body.token);
        window.location.href = 'dashboard.html';
      } else {
        const msg = body.errors.map((m) => {
          if (m.msg) return m.msg;
          if (m.email) return '<br>' + m.email + ' Please Check your email';
          if (m.password)
            return (
              '<br>' +
              m.password +
              ' Please Check your Password it must be 6 letters'
            );
          if (m.name) return '<br>' + m.name + ' Please Check your Name';
        });
        console.log(body.errors.map((m) => m.msg));
        document.getElementById('errorlog').innerHTML = msg;
      }
    });
};
const signupBtn = document.getElementById('signupBtn');
signupBtn.addEventListener('click', signUpForm);
