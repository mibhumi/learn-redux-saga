import { combineReducers } from 'redux';

export const petCounter = (state=10, action) => {
    switch(action.type) {
        case "PET_INCREMENT":
            return state + action.payload;
        case "PET_DECREMENT":
            return state - action.payload;
        default:
            return state;
    }
}

const initial = {
    users: [],
    loading: false,
    error: null
}

export const users = (state=initial, action) => {
    switch(action.type) {
        case "GET_USER_REQUEST":
            return {...state, loading: true};
        case "GET_USER_SUCCESS":
            return {...state, loading: false, users: action.users};
        case "GET_USER_ERROR":
            return {...state, loading: false, error: action.message};
        default:
            return state;
    }
}

export const reducer = combineReducers({petCounter, users});

