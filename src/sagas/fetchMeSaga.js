import { put, call } from 'redux-saga/effects';
import { callFetchApi } from '../utility/api';

export default function* fetchMeSaga() {


  try {
    console.log('FETCH ME SAGA');
    const res = yield call(callFetchApi, 'https://jsonplaceholder.typicode.com/todos/1', '', 'GET');


    const response = { data: res };

    yield put({
      type: 'SIMPLE_ACTION_SUCCESS',
      response: response.data,
    });
  } catch (error) {
    console.log('ERRORRRRRRRRRRRRRRRRRRRRRRRRRR');
    yield put({
      type: 'SIMPLE_ACTION_FAILURE',
      error: error,
    });
  }
}
