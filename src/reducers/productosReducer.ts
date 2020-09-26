import { Action } from "redux";
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
} from "../types";

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
