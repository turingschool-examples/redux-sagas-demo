export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
})

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
})

export const submitLoginUser = (email, password) => ({
  type: 'SUBMIT_LOGIN_USER',
  email,
  password
})
