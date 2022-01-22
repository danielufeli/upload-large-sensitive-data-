const logout = () => {
  if (localStorage.getItem('token')) {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
  } else {
    window.location.href = 'index.html';
  }
};
const logoutBtn = document.getElementById('logBtn');
logoutBtn.addEventListener('click', logout);
