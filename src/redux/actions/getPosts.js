import { GETPOST_REQUEST, GETPOST_SUCCESS, GETPOST_FAILED } from "../types/getPosts";
import axios from "axios";

export const getPostsAction = (data,history) => async (dispatch) => {

    try {
    dispatch(getPostsRequest());
    const token = await localStorage.getItem('token')
    const res = await axios.get('https://intmvend.herokuapp.com/api/v1/get-posts', {
        headers: {
            'Authorization': token
        }
    });

    dispatch(getPostsSuccess(res));
    
    } catch (error) {
      if (error.response) {
        const errorMessage = await error.response.data.message;
        dispatch(getPostsFails(errorMessage))
    }
    else{
        dispatch(getPostsFails("bad connection"))
    }
    }
};

export const getPostsRequest = () => {
  return {
    type: GETPOST_REQUEST,
  };
};

export const getPostsSuccess = (data) => {
  return {
    type: GETPOST_SUCCESS,
    payload: data,
  };
};
export const getPostsFails = (error) => {
  return {
    type: GETPOST_FAILED,
    payload: error,
  };
};

