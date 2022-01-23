const createFile = (e) => {
  e.preventDefault();

  let userToken = '';
  if (localStorage.getItem('token')) {
    userToken = localStorage.getItem('token');
  } else {
    window.location.href = 'signin.html';
  }

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const userFile = document.querySelector('input[type="file"]');

  const url = 'http://localhost:3000/api/v1/upload/new';

  //   const fileData = new FormData();
  //   fileData.append('mFile', userFile.files);
  //   fileData.append('title', title);
  //   fileData.append('description', description);

  const fileData = {
    title: title,
    description: description,
    mFile: userFile.files,
  };

  document.getElementById(
    'errorlog'
  ).innerHTML = `<img src="./public/img/loading.gif">`;
  fetch(url, {
    method: 'POST',
    // mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': userToken,
    },
    body: JSON.stringify(fileData),
  }).then((res) => console.log(res));
  // .then((body) => {
  //   if (body.status === 201) {
  //     window.location.href = 'dashboard.html';
  //   } else {
  //     document.getElementById('errorlog').innerHTML = Object.values(body);
  //   }
  // });
};
const createFileBtn = document.getElementById('createFileId');
createFileBtn.addEventListener('click', createFile);
