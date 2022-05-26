/* eslint-disable import/no-anonymous-default-export */
import { GET_OFFER } from "../type";

const initialState = {
  offerList: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_OFFER:
      return {
        ...state,
        offerList: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
