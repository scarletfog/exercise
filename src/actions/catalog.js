
import { FETCH_CATALOG_INIT,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE
} from 'constants/action-types';

export const fetchInit = () => ({
  type: FETCH_CATALOG_INIT
});

export const fetchCatalogSuccess = catalog => ({
  type: FETCH_CATALOG_SUCCESS,
  payload: { catalog }
});

export const fetchCatalogError = error => ({
  type: FETCH_CATALOG_FAILURE,
  payload: { error }
});

// Handle HTTP errors
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchCategories() {
  return dispatch => {
    dispatch(fetchInit());
    return fetch('/categories')
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchCatalogSuccess(json.products));
        return json.products;
      })
      .catch(error => dispatch(fetchCatalogError(error)));
  };
}
