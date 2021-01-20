import { GETPOST_REQUEST, GETPOST_SUCCESS, GETPOST_FAILED } from "../types/getPosts";
import axios from "axios";

export const getPostsAction = (data,history) => async (dispatch) => {

    try {
    dispatch(getPostsRequest());
    const res = await axios.post("https://intmvend.herokuapp.com/api/v1/get-posts", data);

    const user = await res.data;
    localStorage.setItem("token", user.token);
    localStorage.setItem('user-data', JSON.stringify(user));

    history.push('/dashboard')
    dispatch(getPostsSuccess(user));

    
    } catch (error) {
      if (error.response) {
        const errorMessage = await error.response.data.message;
        dispatch(getPostsFails(errorMessage))
    }
    else{
        dispatch(getPostsFails("Error, please check your connection and try again!"))
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

