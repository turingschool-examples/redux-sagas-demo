import { call, put, takeLatest } from 'redux-saga/effects'
import * as API from '../api'
import * as actions from '../actions'

export function* submitUserLogin(action) {
  try {
    const user = yield call(API.postLoginUser, action.email, action.password)
    yield put(actions.loginUser(user))
  } catch(error) {
    yield put(actions.loginError(error.message))
  }
}

export function* listenForSubmitUserLogin() {
  yield takeLatest('SUBMIT_USER_LOGIN', submitUserLogin)
}

export default listenForSubmitUserLogin
