import { Launch } from "./../types/types";
import { FETCH_SUCCESS } from "./ActionTypes";
const INITIAL_STATE = {
  launch: [],
};
export const reducer = (state = INITIAL_STATE, action: any) => {
  // console.log(state);
  // console.log(action.type);
  console.log(typeof action.payload);
  console.log(action.payload);
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        launch: action.payload,
      };
    default:
      return state;
  }
};
