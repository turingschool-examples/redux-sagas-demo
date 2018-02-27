import { call, put, takeLatest } from 'redux-saga/effects'
import * as api from '../api'

function* submitLoginUser(action) {
  console.log(action)
}

function* listenForSubmitLoginUser() {
  yield takeLatest('SUBMIT_LOGIN_USER', submitLoginUser)
}

export default listenForSubmitLoginUser
