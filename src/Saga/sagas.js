//https://jsonplaceholder.typicode.com/todos?_limit=10
import { takeLatest, call,put } from "redux-saga/effects";


const Api = "https://jsonplaceholder.typicode.com/todos?_limit=10";

export function* watcherFetchData() {
  yield takeLatest("REQUEST_TASK", workerFetchTask);
}

function FetchTask() {
  return fetch(Api)
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
}

function* workerFetchTask() {
    try {
        var res=yield call(FetchTask);
        yield put({type:"FETCHTASK_SUCCESS",res});
    } catch (err) {
        yield put({type:"FETCHTASK_FAIL",err});
    }
}
