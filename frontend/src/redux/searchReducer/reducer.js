import { SEARCH_GET_FAILURE, SEARCH_GET_REQUEST, SEARCH_GET_SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_GET_REQUEST:
      return { ...state, isLoading: true };
    case SEARCH_GET_SUCCESS:
      return { ...state, isLoading: false,products:payload.data };
    case SEARCH_GET_FAILURE:
      return { ...state, isLoading: false ,isError:true};
    default:
      return state;
  }
};
