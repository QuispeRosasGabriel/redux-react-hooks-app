import { Dispatch } from "redux";
import { Producto } from "../interfaces/IProducto";
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
} from "../types";

// Crear nuevos productos
export const crearNuevoProductoAction = (producto: Producto) => {
  return (dispatch: any) => {
    dispatch(agregarProducto());
    try {
      dispatch(agregarProductoExito(producto));
    } catch (error) {
      dispatch(agregarProductoError(true));
    }
  };
};

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  paylaod: true,
});

// Producto se guarda en la base de datos
const agregarProductoExito = (producto: Producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

// Hubo un error en el producto
const agregarProductoError = (value: boolean) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: value,
});
