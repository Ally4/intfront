import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from "../types/login";
import axios from "axios";

export const loginAction = (data,history) => async (dispatch) => {

    try {
    dispatch(loginRequest());
    const res = await axios.post("https://intmvend.herokuapp.com/api/v1/login", data);

    const user = await res.data;
    localStorage.setItem("token", user.token);

    history.push('/logged')
    dispatch(loginSuccess(user));

    
    } catch (error) {
      if (error.response) {
        const errorMessage = await error.response.data.message;
        dispatch(loginFails(errorMessage))
    }
    else{
        dispatch(loginFails("Error, please check your connection and try again!"))
    }
    }
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};
export const loginFails = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
};

