import {
  GET_CASE_ONE_OFFER_LİST,
  GET_CASE_TWO_OFFER_LİST,
  GET_CASE_THREE_OFFER_LİST,
  CASE_ONE_ERROR,
  CASE_TWO_ERROR,
  CASE_THREE_ERROR,
} from "../type";
import axios from "axios";

export const getOffer = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://snetmyapp.herokuapp.com/case1`);
    dispatch({
      type: GET_CASE_ONE_OFFER_LİST,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: CASE_ONE_ERROR,
      payload: console.log(e),
    });
  }
};
export const getOfferTwo = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://snetmyapp.herokuapp.com/case2`);
    dispatch({
      type: GET_CASE_TWO_OFFER_LİST,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: CASE_TWO_ERROR,
      payload: console.log(e),
    });
  }
};
export const getOfferThree = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://snetmyapp.herokuapp.com/case3`);
    dispatch({
      type: GET_CASE_THREE_OFFER_LİST,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: CASE_THREE_ERROR,
      payload: console.log(e),
    });
  }
};
