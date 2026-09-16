function login(username, password) {
  if (username === 'admin' && password === '123') {
    return true;
  }
  return false;
}

// Cho phép dùng trong Node.js (Jest) lẫn trình duyệt
if (typeof module !== 'undefined' && module.exports) {
  module.exports = login;
}
