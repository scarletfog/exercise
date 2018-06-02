
import {
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE,
  API_URL,
  CORS_API_URL,
} from 'constants/action-types';


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

export function createCategory(userLogin, userPassword) {
  const url = `${CORS_API_URL + API_URL}/categories`;
  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      Authorization: `Basic ${btoa(`${userLogin}:${userPassword}`)}`,
    }),
  });
}

export function editCategory(categoryId, userLogin, userPassword) {
  const url = `${CORS_API_URL + API_URL}/categories${categoryId}`;
  return fetch(url, {
    method: 'PUT',
    headers: new Headers({
      Authorization: `Basic ${btoa(`${userLogin}:${userPassword}`)}`,
    }),
  });
}

export function deleteCategory(categoryId, userLogin, userPassword) {
  const url = `${CORS_API_URL + API_URL}/categories${categoryId}`;
  return fetch(url, {
    method: 'DELETE',
    headers: new Headers({
      Authorization: `Basic ${btoa(`${userLogin}:${userPassword}`)}`,
    }),
  });
}

