const login = require('./login');

test('đăng nhập thành công với đúng tài khoản admin/123', () => {
  expect(login('admin', '123')).toBe(true);
});

test('đăng nhập thất bại với sai mật khẩu', () => {
  expect(login('admin', 'wrongpass')).toBe(false);
});

test('đăng nhập thất bại với sai username', () => {
  expect(login('user', '123')).toBe(false);
});
