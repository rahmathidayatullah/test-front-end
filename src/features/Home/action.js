import { SUKSES_GET_DATA } from "./constans";

import { getData } from "../../api/home";

export const fetchData = () => {
  return async (dispatch, getState) => {
    try {
      let { data } = await getData();
      dispatch(successFetchData(data));
    } catch (error) {
      console.log("error fetch", error);
    }
  };
};

export const successFetchData = (data) => {
  return {
    type: SUKSES_GET_DATA,
    data,
  };
};
