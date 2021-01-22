import { POST_REQUEST, POST_SUCCESS, POST_FAILED } from "../types/post";
import axios from "axios";

export const postAction = (data,history) => async (dispatch) => {

    try {
    dispatch(postRequest());
    const token = localStorage.getItem('token');
    const res = await axios.post("https://intmvend.herokuapp.com/api/v1/create-post", data, {
      headers: {
        'token': token
      }
    });

    dispatch(postSuccess(res));
    history.push('/logged');
    console.log('the post is successfull');

    } catch (error) {
      if (error.response) {
        const errorMessage = await error.response.data.message;
        console.log(error.response.data.message)
        dispatch(postFails(errorMessage))
    }
    else{
        dispatch(postFails("bad connection"))
    }
    }
};

export const postRequest = () => {
  return {
    type: POST_REQUEST,
  };
};

export const postSuccess = (data) => {
  return {
    type: POST_SUCCESS,
    payload: data,
  };
};
export const postFails = (error) => {
  return {
    type: POST_FAILED,
    payload: error,
  };
};

