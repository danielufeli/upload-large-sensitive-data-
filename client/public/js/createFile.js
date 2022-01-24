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

  const url = '/api/v1/upload/new';

    const fileData = new FormData();
    fileData.append('mFile', userFile.files);

  console.log(userFile.files);

//   const fileData = {
//     title: title,
//     description: description,
//     mFile: userFile,
//   };

  document.getElementById(
    'errorlog'
  ).innerHTML = `<img src="./public/img/loading.gif">`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': userToken,
    },
    body: fileData,
  })
    .then((res) => res.json())
    .then((body) => {
      if (body.status === 201) {
        window.location.href = 'dashboard.html';
      } else {
        document.getElementById('errorlog').innerHTML = Object.values(body);
      }
    });
};
const createFileBtn = document.getElementById('createFileId');
createFileBtn.addEventListener('click', createFile);
