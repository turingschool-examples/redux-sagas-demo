import * as sagas from './index'
import * as actions from '../actions'
import { call, put, takeLatest } from 'redux-saga/effects'
import * as API from '../api'

describe('sagas', () => {
  describe('listenForSubmitUserLogin', () => {

    let iterator

    beforeAll(() => {
      iterator = sagas.listenForSubmitUserLogin()
    })

    it('should yield takeLatest with the correct params', () => {
      const value = iterator.next().value
      const expected = takeLatest('SUBMIT_USER_LOGIN', sagas.submitUserLogin) 
      expect(value).toEqual(expected)
    })

    it('should be done', () => {
      const done = iterator.next().done
      expect(done).toBe(true)
    })
  })

  describe('submitUserLogin happy path', () => {
    let iterator
    let mockAction

    beforeAll(() => {
      mockAction = {
        type: 'SUBMIT_USER_LOGIN',
        email: 'will@email.com',
        password: 'password'
      }

      iterator = sagas.submitUserLogin(mockAction)
    })

    it('should yield call with the correct API fn and params', () => {
      const expected = call(API.postLoginUser, mockAction.email, mockAction.password)
      const value = iterator.next().value
      expect(value).toEqual(expected)
    })

    it('should yield put with the LOGIN_USER action', () => {
      const mockUser = {
        email: 'my@email.com',
        id: 0
      }

      const expected = put(actions.loginUser(mockUser))  
      const value = iterator.next(mockUser).value

      expect(value).toEqual(expected)
    })

    it('should be done', () => {
      const done = iterator.next().done
      expect(done).toBe(true)
    })
  })

  describe('submitUserLogin on error', () => {
    let iterator
    let mockAction

    beforeAll(() => {
      mockAction = {
        type: 'SUBMIT_USER_LOGIN',
        email: 'will@email.com',
        password: 'password'
      }

      iterator = sagas.submitUserLogin(mockAction)
      iterator.next()
    })

    it('should yield an error on error', () => {
      const expected = put(actions.loginError('shit\'s on fire!'))
      const value = iterator.throw(Error('shit\'s on fire!')).value
      expect(value).toEqual(expected)
    })

    it('should be done', () => {
      const done = iterator.next().done
      expect(done).toBe(true)
    })
  })
})
