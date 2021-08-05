import { SUKSES_GET_DATA } from "./constans";

const initialState = {
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SUKSES_GET_DATA:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
}
