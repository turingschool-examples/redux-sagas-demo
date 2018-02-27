import { call, put, takeLatest } from 'redux-saga/effects'

function* submitLoginUser() {
  console.log("I'm here!")
}

function* listenForSubmitLoginUser() {
  yield takeLatest('SUBMIT_LOGIN_USER', submitLoginUser)
}

export default listenForSubmitLoginUser
