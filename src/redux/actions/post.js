import { POST_REQUEST, POST_SUCCESS, POST_FAILED } from "../types/post";
import axios from "axios";

export const postAction = (data,history) => async (dispatch) => {

    try {
    dispatch(postRequest());
    const res = await axios.post("http://localhost:3333/api/v1/create-post", data);

    const user = await res.data;
    localStorage.setItem("token", user.token);

    
    
    dispatch(postSuccess(user));
    history.push('/logged')

    } catch (error) {
      if (error.response) {
        const errorMessage = await error.response.data.message;
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

