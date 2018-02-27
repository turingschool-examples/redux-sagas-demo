import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../api'
import * as actions from '../actions'

function* submitLoginUser(action) {
  try {
    const user = yield call(api.postLoginUser, action.email, action.password)
    yield put(actions.loginUser(user))
  } catch(err) {
    // What should we put here? Turn and talk
  }
}

function* listenForSubmitLoginUser() {
  yield takeLatest('SUBMIT_LOGIN_USER', submitLoginUser)
}

export default listenForSubmitLoginUser
