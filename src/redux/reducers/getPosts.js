import { GETPOST_REQUEST, GETPOST_SUCCESS, GETPOST_FAILED } from '../types/getPosts';

const initialState = {
    loading: 'none',
    data: [],
    error: '',
}

const reducerGETPOST = (state = initialState, action) => {
    switch (action.type){
        case GETPOST_REQUEST:
            return {
                ...state,
                loading:'block'
            };
        case GETPOST_SUCCESS:
            return {
                loading:'block',
                data:action.payload,
                error: ''
            };
        case GETPOST_FAILED:
            return {
                loading:'none',
                data:[],
            };
        default:
            return state;
    }
}

export default reducerGETPOST;


