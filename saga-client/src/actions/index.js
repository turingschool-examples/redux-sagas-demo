export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
})

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
})

export const loginError = (error) => ({
  type: 'LOGIN_ERROR',
  error
})
