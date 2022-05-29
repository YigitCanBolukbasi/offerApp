/* eslint-disable import/no-anonymous-default-export */
import {
  GET_CASEONE_OFFER,
  GET_CASETWO_OFFER,
  CASETHREE_ERROR,
  GET_CASETHREE_OFFER,
} from "../type";

const initialState = {
  caseOneOfferList: [],
  caseTwoOfferList: [],
  caseThreeOffer: {},
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CASEONE_OFFER:
      return {
        ...state,
        caseOneOfferList: action.payload,
        loading: false,
      };
    case GET_CASETWO_OFFER:
      return {
        ...state,
        caseTwoOfferList: action.payload,
        loading: false,
      };
    case GET_CASETHREE_OFFER:
      return {
        ...state,
        caseThreeOffer: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
