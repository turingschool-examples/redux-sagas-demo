import * as actions from './index'

describe('actions', () => {
  it('should have a type of LOGIN_USER', () => {
    const mockUser = { id: 0, email: 'wvmitchell@gmail.com' }
    const expected = {
      type: 'LOGIN_USER',
      user: mockUser
    }
    expect(actions.loginUser(mockUser)).toEqual(expected)
  })

  it('should have a type of LOGOUT_USER', () => {
    const expected = {
      type: 'LOGOUT_USER'
    }
    expect(actions.logoutUser()).toEqual(expected)
  })

  it('should have a type of SUBMIT_LOGIN_USER', () => {
    const mockEmail = 'wvmitchell@gmail.com'
    const mockPassword = 'password'
    const expected = {
      type: 'SUBMIT_LOGIN_USER',
      email: mockEmail,
      password: mockPassword,
    }
    expect(actions.submitLoginUser(mockEmail, mockPassword)).toEqual(expected)
  })
})
