import { API_URL } from '../constants';
import axios from "axios";


export async function auth(params) {
  const response = await axios.post( API_URL, params)
  const data = await response;

  return data;
}
