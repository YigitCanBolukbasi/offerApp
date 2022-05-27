import { GET_OFFER, OFFER_ERROR } from "../type";
import axios from "axios";

export const getOffer = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://snetmyapp.herokuapp.com/case1`);
    dispatch({
      type: GET_OFFER,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: OFFER_ERROR,
      payload: console.log(e),
    });
  }
};
export const getOfferTwo = () => async (dispatch) => {
  try {
    const res = await axios.get(`https://snetmyapp.herokuapp.com/case2`);
    dispatch({
      type: GET_OFFER,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: OFFER_ERROR,
      payload: console.log(e),
    });
  }
};
