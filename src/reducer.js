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

export const reducer = combineReducers({petCounter});

