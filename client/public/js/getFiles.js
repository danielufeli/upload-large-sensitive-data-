const getFiles = () => {
  const url = 'http://localhost:3000/api/v1/upload/all';

  let userToken = '';
  if (localStorage.getItem('token')) {
    userToken = localStorage.getItem('token');
  } else {
    window.location.href = 'signin.html';
  }
  document.getElementById(
    'userFiles'
  ).innerHTML = `<img src="./public/img/loading.gif">`;
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': userToken,
    },
  })
    .then((res) => res.json())
    .then((body) => {
      if (body.status === 'success') {
        console.log(body.allFiles);
        let result = '';
        body.allFiles.forEach((files) => {
        //   const fDate = moment(meetups.happeningon).format(
        //     'dddd MMM YYYY HH:mm:ss'
        //   );
          result += `<table>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>File Type</th>
          <th>File Size</th>
          <th>Tiny Link</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>${files.title}</td>
          <td>${files.description}</td>
          <td>${files.type}</td>
          <td>${files.size}</td>
          <td><a href=${files.fileUrl}>Tiny URL</td>
          <td><button id="delFile">delete</button></td>
        </tr>
      </table>`;
        });
        document.getElementById('userFiles').innerHTML = result;
      } else {
        document.getElementById('userFiles').innerHTML = Object.values(body);
      }
    });
};

getFiles();
