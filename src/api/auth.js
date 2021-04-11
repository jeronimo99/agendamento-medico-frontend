export const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const getRole = () => {
  const role = localStorage.getItem('role');
  return role;
};

export const setRole = (role) => {
  localStorage.setItem('role', role);
};

export const removeRole = () => {
  localStorage.removeItem('role');
};
