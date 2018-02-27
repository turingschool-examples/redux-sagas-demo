import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../api'

function* submitLoginUser(action) {
  try {
    const user = yield call(api.postLoginUser, action.email, action.password)
    console.log(user)
  } catch(err) {
  }
}

function* listenForSubmitLoginUser() {
  yield takeLatest('SUBMIT_LOGIN_USER', submitLoginUser)
}

export default listenForSubmitLoginUser
