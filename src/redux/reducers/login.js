import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../types/login';

const initialState = {
    loading: 'none',
    data: [],
    error: '',
}

const reducerLogin = (state = initialState, action) => {
    switch (action.type){
        case LOGIN_REQUEST:
            return {
                ...state,
                loading:'block'
            };
        case LOGIN_SUCCESS:
            return {
                loading:'block',
                data:action.payload,
                error: ''
            };
        case LOGIN_FAILED:
            return {
                loading:'none',
                data:[],
            };
        default:
            return state;
    }
}

export default reducerLogin;
