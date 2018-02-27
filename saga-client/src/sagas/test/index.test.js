import * as sagas from '../index'
import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../../api'
import * as actions from '../../actions'

describe('the sagas', () => {
  describe('listenForSubmitLoginUser', () => {
    const generator = sagas.listenForSubmitLoginUser()

    it('should takeLatest SUBMIT_LOGIN_USER', () => {
      const value = generator.next().value
      const expected = takeLatest('SUBMIT_LOGIN_USER', sagas.submitLoginUser)
      expect(value).toEqual(expected)
    })

    it('should be done', () => {
      const done = generator.next().done
      expect(done).toBe(true)
    })
  })

  describe('submitLoginUser', () => {
    const mockAction = {
      type: 'SUBMIT_LOGIN_USER',
      email: 'will@turing.io',
      password: 'password'
    }
    const generator = sagas.submitLoginUser(mockAction)

    it('should call the api', () => {
      const value = generator.next().value
      const expected = call(api.postLoginUser, mockAction.email, mockAction.password)
      expect(value).toEqual(expected)
    })

    it('should put the next action into place', () => {
      const mockUser = {
        id: 0,
        email: 'will@turing.io'
      }
      const value = generator.next(mockUser).value
      const expected = put(actions.loginUser(mockUser))
      expect(value).toEqual(expected)
    })

    it('should be done', () => {
      const done = generator.next().done
      expect(done).toBe(true)
    })
  })

  describe('submitLoginUser on error', () => {
    const mockAction = {
      type: 'SUBMIT_LOGIN_USER',
      email: 'will@turing.io',
      password: 'password'
    }

    const generator = sagas.submitLoginUser(mockAction)
    generator.next()

    it('should yield an error on error', () => {
      const value = generator.throw(Error('an error')).value
      const expected = 'an error'
      expect(value).toEqual(expected)
    })
  })
})
