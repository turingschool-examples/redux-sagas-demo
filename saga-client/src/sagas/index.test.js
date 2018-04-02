import { call, put, takeLatest } from 'redux-saga/effects'
import { loginUserSaga, listenForSubmitUserLogin } from './index'
import * as API from '../api'
import * as actions from '../actions'

describe('Sagas', () => {
  describe('listenForSubmitUserLogin', () => {
    let generator

    beforeAll(() => {
      generator = listenForSubmitUserLogin()
    })

    it('should take the latest SUBMIT_USER_LOGIN action', () => {
      expect(generator.next().value).toEqual(takeLatest("SUBMIT_USER_LOGIN", loginUserSaga))
    })

    it('should be done', () => {
      expect(generator.next().done).toBe(true)
    })
  })

  describe('loginUserSaga', () => {
    let generator
    let user
    let mockAction

    beforeAll(() => {
      user = {
        email: 'will@turing.io',
        password: 'password'
      }
      mockAction = {
        type: "SUBMIT_USER_LOGIN",
        user
      }
      generator = loginUserSaga(mockAction)
    })

    it('should call the api', () => {
      const expected = call(API.postLoginUser, user.email, user.password)
      expect(generator.next().value).toEqual(expected)
    })

    it('should put the loginUser action on the stack', () => {
      const expected = put(actions.loginUser(user))
      expect(generator.next(user).value).toEqual(expected)
    })

    it('should be done', () => {
      expect(generator.next().done).toBe(true)
    })

    describe('on error', () => {
      let user = {
        email: 'will@turing.io',
        password: 'password'
      }

      let mockAction = {
        type: "SUBMIT_USER_LOGIN",
        user
      }

      let generator = loginUserSaga(mockAction)
      const expected = put(actions.loginError('an error happened'))

      generator.next()
      expect(generator.throw(Error('an error happened')).value).toEqual(expected)
    })
  })
})
