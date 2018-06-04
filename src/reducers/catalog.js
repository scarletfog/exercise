import {
  FETCH_CATALOG_INIT,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE
} from '../actions/catalog';

const initialState = {
  items: [],
  loading: false,
  error: null
};
// TO DO
export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATALOG_INIT:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CATALOG_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.categories
      };

    case FETCH_CATALOG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}
