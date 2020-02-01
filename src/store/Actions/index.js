import {ADD_DISH, DELETE_DISH, EDIT_DISH} from "../Types";

export const addDish = (data) => {
    return({
        type: ADD_DISH,
        payload: data
    })
}

export const editDish = (data) => {
    return({
        type: EDIT_DISH,
        payload: data
    })
}

export const deleteDish = (data) => {
    return({
        type: DELETE_DISH,
        payload: data
    })
}