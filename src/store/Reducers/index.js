import {combineReducers} from "redux";
import {ADD_DISH, EDIT_DISH, DELETE_DISH} from "../Types";

const INITIAL_STATE = {dishes: []};

const dish = (state=INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_DISH:
            const arr = state.dishes.concat(action.payload)
            return {dishes: arr};
        case EDIT_DISH:
            return {dishes: action.payload};
        case DELETE_DISH:
            return {dishes: action.payload};
        default:
            return state
    }
}

export default combineReducers({
    dish
})