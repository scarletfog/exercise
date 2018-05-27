import {
  FETCH_CATALOG_INIT,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE
} from '../actions/catalogActions';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function productReducer(state = initialState, action) {
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
