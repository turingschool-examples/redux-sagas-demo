import { call, put, takeLatest } from 'redux-saga/effects'
import * as API from '../api'
import * as actions from '../actions'

export function* loginUserSaga(action) {
  try {
    const user = yield call(API.postLoginUser, action.user.email, action.user.password)
    yield put(actions.loginUser(user))
  } catch(err) {
    yield put(actions.loginError(err.message))
  }
}

export function* listenForSubmitUserLogin() {
  yield takeLatest("SUBMIT_USER_LOGIN", loginUserSaga)
}
