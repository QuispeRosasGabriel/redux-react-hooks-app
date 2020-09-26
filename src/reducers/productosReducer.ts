import { Action } from "redux";

//CADA REDUCER TIENE SU PROPIO STATE
const initialState = {
  productos: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
