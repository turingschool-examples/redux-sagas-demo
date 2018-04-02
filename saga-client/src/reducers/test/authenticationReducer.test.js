import authenticationReducer from '../authenticationReducer'
import * as actions from '../../actions'

describe('authenticationReducer', () => {
  it('returns the default state', () => {
    const expected = {
      loggedIn: false,
    }
    expect(authenticationReducer(undefined, {})).toEqual(expected)
  })

  it('logs in a user', () => {
    const mockUser = {
      id: 0,
      email: 'wvmitchell@gmail.com'
    }
    const expected = {
      loggedIn: true,
      user: mockUser,
    }
    expect(authenticationReducer(undefined, actions.loginUser(mockUser))).toEqual(expected)
  })

  it('logs out a user', () => {
    const initalState = {
      loggedIn: true,
      user: {
        id: 0,
        email: 'wvmitchell@gmail.com'
      }
    }
    const expected = {
      loggedIn: false
    }
    expect(authenticationReducer(initalState, actions.logoutUser())).toEqual(expected)
  })

  it('sets an error', () => {
    const initalState = {
      loggedIn: false
    }
    const expected = {
      loggedIn: false,
      loginError: 'An error occured'
    }
    expect(authenticationReducer(initalState, actions.loginError('An error occured'))).toEqual(expected)
  })
})
