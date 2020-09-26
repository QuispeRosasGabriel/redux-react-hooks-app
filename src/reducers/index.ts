// SE PUEDE COMBINAR REDUCERS SIEMPRE Y CUANDO TENGAS UNO
import { combineReducers } from "redux";
import productosReducer from "./productosReducer";

export default combineReducers({
  productos: productosReducer,
});
