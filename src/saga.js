import {call, put, takeEvery, all} from 'redux-saga/effects';

const url = 'https://jsonplaceholder.typicode.com/users';

 const fetchUsers = () => {
    return fetch(url, {
        method: "GET",
    })
    .then(response=>response.json())
    .catch(error=>{throw error})
}

function* handleUser() {
    try{
        const users = yield call(fetchUsers);
        yield put({type: "GET_USER_SUCCESS", users: users})
    } catch(err){
        yield put({type: "GET_USER_ERROR", message: err.message})
    }
}

export function* watchUserSaga() {
    yield takeEvery("GET_USER_REQUEST", handleUser )
}

export default function* rootSaga() {
    yield all([watchUserSaga()]);
}
