import { takeLatest } from 'redux-saga/effects';
import  fetchMeSaga  from './fetchMeSaga';
import loginSaga from './loginSaga';

export default function* saga() {
 yield takeLatest('SIMPLE_ACTION', fetchMeSaga);
 yield takeLatest('LOGIN_ACTION', loginSaga);

}
