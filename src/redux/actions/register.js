import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED } from "../types/register";
import axios from "axios";

export const registerAction = (data,history) => async (dispatch) => {

    try {
    dispatch(registerRequest());
    const res = await axios.post("https://intmvend.herokuapp.com/api/v1/register", data);

    const user = await res.data;

    dispatch(registerSuccess(user));
    history.push('/')

    
    } catch (error) {
      if (error.response) {
        const errorMessage = await error.response.data.message;
        dispatch(registerFails(errorMessage))
    }
    else{
        dispatch(registerFails("bad connection"))
    }
    }
};

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};
export const registerFails = (error) => {
  return {
    type: REGISTER_FAILED,
    payload: error,
  };
};

