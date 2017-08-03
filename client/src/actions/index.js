import axios from "axios";
import { FETCH_USER } from "./types";

// check to see if user is logged in
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};