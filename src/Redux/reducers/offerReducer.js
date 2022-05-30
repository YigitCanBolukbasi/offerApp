/* eslint-disable import/no-anonymous-default-export */
import {
  GET_CASE_ONE_OFFER_LİST,
  GET_CASE_TWO_OFFER_LİST,
  GET_CASE_THREE_OFFER_LİST,
  DELETE_CASE_THREE_OFFER_LİST,
} from "../type";

const initialState = {
  caseOneOfferList: [],
  caseTwoOfferList: [],
  caseThreeOfferList: [],
  offerCount: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CASE_ONE_OFFER_LİST:
      return {
        ...state,
        caseOneOfferList: action.payload,
        loading: false,
      };
    case GET_CASE_TWO_OFFER_LİST:
      return {
        ...state,
        caseTwoOfferList: action.payload,
        loading: false,
      };
    case GET_CASE_THREE_OFFER_LİST:
      return {
        ...state,
        caseThreeOfferList: [...state.caseThreeOfferList, action.payload],
        loading: false,
      };
    case DELETE_CASE_THREE_OFFER_LİST:
      return {
        ...state,
        caseThreeOfferList: [],
        loading: true,
      };
    default:
      return state;
  }
}
