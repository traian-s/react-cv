import {SAVE_CV} from "./actionTypes";

const initialState = {
    stylesPDF: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_CV: {
            return {
                stylesPDF: !state.stylesPDF
            }
        }
        default:
            return state;
    }
}