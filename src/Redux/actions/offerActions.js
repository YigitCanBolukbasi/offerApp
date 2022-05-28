import {
  GET_CASEONE_OFFER,
  CASEONE_ERROR,
  GET_CASETWO_OFFER,
  CASETWO_ERROR,
} from "../type";
import axios from "axios";

export const getOffer = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://snetmyapp.herokuapp.com/case1`);
    dispatch({
      type: GET_CASEONE_OFFER,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: CASEONE_ERROR,
      payload: console.log(e),
    });
  }
};
export const getOfferTwo = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://snetmyapp.herokuapp.com/case2`);
    dispatch({
      type: GET_CASETWO_OFFER,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: CASETWO_ERROR,
      payload: console.log(e),
    });
  }
};
