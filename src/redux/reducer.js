const INC_VALUE = 'counter/reducer/INC_VALUE';
const RESET_VALUE = 'counter/reducer/RESET_VALUE';
const CHANGE_MAX_VALUE = 'counter/reducer/CHANGE_MAX_VALUE';
const CHANGE_MIN_VALUE = 'counter/reducer/CHANGE_MIN_VALUE';
const SET_SETTING = 'counter/reducer/SET_SETTING';
const VALUE_ERROR = 'counter/reducer/VALUE_ERROR';

let initialState = {
    value: 0,
    startValue: 0,
    maxValue: 8,
    isDisable: true,
    inputError: false,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case VALUE_ERROR: {
            let error = action.value < 0 || isNaN(action.value) || action.value === action.stateValue ||
                isNaN(action.stateValue) || action.stateValue === null || action.stateValue <= -1;
            return {
                ...state,
                inputError: error,
                isDisable: error
            }
        }
        case INC_VALUE: {
            return {...state, value: ++action.inc}
        }
        case RESET_VALUE: {
            return {...state, value: state.startValue}
        }
        case CHANGE_MAX_VALUE: {
            return {...state, maxValue: action.value, value: state.startValue}
        }
        case CHANGE_MIN_VALUE: {
            return {...state, startValue: action.value, value: action.value}
        }
        case SET_SETTING: {
            return {...state, isDisable: true}
        }
        default:
            return state;
    }
};

export const incValueAC = (inc) => ({type: INC_VALUE, inc});
export const resetValue = () => ({type: RESET_VALUE});
export const changeMaxValue = (value) => ({type: CHANGE_MAX_VALUE, value});
export const changeMinValue = (value) => ({type: CHANGE_MIN_VALUE, value});
export const setSettings = () => ({type: SET_SETTING});
export const valueErrorAC = (value, stateValue) => ({type: VALUE_ERROR, value, stateValue});