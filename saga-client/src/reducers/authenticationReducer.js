const initialState = {
  loggedIn: false
}

const authenticationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return { loggedIn: true, user: action.user }
    case 'LOGOUT_USER':
      return initialState
    case 'LOGIN_ERROR':
      return {...state, loginError: action.error}
    default:
      return state
  }
}

export default authenticationReducer
