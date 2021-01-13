import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:5000/countries/";

export function getCountries() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
