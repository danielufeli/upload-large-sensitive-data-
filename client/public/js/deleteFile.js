const deleteFile = () => {
  if (localStorage.getItem('token')) {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
  } else {
    window.location.href = 'index.html';
  }
};
const logoutBtn = document.getElementById('delFile');
logoutBtn.addEventListener('click', deleteFile);
