import { Launch } from "./../types/types";
import { FETCH_SUCCESS, SINGLE_FETCH_SUCCESS } from "./ActionTypes";
const INITIAL_STATE = {
  launches: [],
  flight: {},
};
export const reducer = (state = INITIAL_STATE, action: any) => {
  console.log(typeof action.payload);
  console.log(action.payload);
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        launches: action.payload,
      };
    case SINGLE_FETCH_SUCCESS:
      return {
        ...state,
        flight: action.payload,
      };
    default:
      return state;
  }
};
