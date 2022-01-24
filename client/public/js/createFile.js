const createFile = (e) => {
  e.preventDefault();
  console.log(e);

  let userToken = '';
  if (localStorage.getItem('token')) {
    userToken = localStorage.getItem('token');
  } else {
    window.location.href = 'signin.html';
  }

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  // const userFile = document.querySelector('input[type="file"]');
  const input = document.getElementById('mFileId');

  const url = '/api/v1/upload/newa';

  const uploadFile = (file) => {
    // add file to FormData object
    const fd = new FormData();
    fd.append('mFile', file);
    fd.append('title', title);
    fd.append('description', description);

    // send `POST` request
    fetch(url, {
      method: 'POST',
      headers: {
        'x-auth-token': userToken,
      },
      body: fd,
    })
      .then((res) => res.json())
      .then((body) => {
        console.log(body)
        if (body.status === 'success') {
          window.location.href = 'dashboard.html';
        }
      })
      .catch((err) => console.error(err));
  };

  uploadFile(input.files[0]);
};
const createFileBtn = document.getElementById('createFileId');
createFileBtn.addEventListener('click', createFile);
