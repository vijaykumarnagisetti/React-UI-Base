import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../utility/api';

export default function* loginSaga() {


  try {
    console.log('LOGIN SAGA');
    const res = yield call(callFetchApi, 'https://reqres.in/api/users', '', 'POST',{
        name: "paul rudd",
        movies: ["I Love You Man", "Role Models"]
    });


    const response = { data: res };

    yield put({
      type: 'LOGIN_ACTION_SUCCESS',
      response: response.data,
    });
  } catch (error) {
    console.log('ERROR IN LOGINNNNNNNNNNNNNNNNN');
    yield put({
      type: 'LOGIN_ACTION_FAILURE',
      error: error,
    });
  }
}
