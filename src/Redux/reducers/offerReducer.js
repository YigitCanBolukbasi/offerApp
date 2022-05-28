/* eslint-disable import/no-anonymous-default-export */
import { GET_CASEONE_OFFER, GET_CASETWO_OFFER, DELETE_OFFER } from "../type";

const initialState = {
  offerList: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CASEONE_OFFER:
      return {
        offerList: action.payload,
        loading: false,
      };
    case GET_CASETWO_OFFER:
      return {
        offerList: action.payload,
        loading: false,
      };
    case DELETE_OFFER:
      return {
        offerList: [],
        loading: true,
      };

    default:
      return state;
  }
}
