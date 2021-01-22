import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED } from '../types/register';

const initialState = {
    loading: 'none',
    data: [],
    error: '',
}

const reducerRegister = (state = initialState, action) => {
    switch (action.type){
        case REGISTER_REQUEST:
            return {
                ...state,
                loading:'block'
            };
        case REGISTER_SUCCESS:
            return {
                loading:'none',
                data:action.payload,
                error: ''
            };
        case REGISTER_FAILED:
            return {
                loading:'none',
                data:[],
            };
        default:
            return state;
    }
}

export default reducerRegister;