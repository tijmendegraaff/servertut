import Axios from "axios";
import { FETCH_USER } from "./types";

const fetchUser = () => {
  return function(dispatch) {
    axios
      .get("/api/current_user")
      .then(res => dispatch({ FETCH_USER, payload: res }));
  };
};
