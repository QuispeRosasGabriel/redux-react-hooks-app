import clienteAxios from "../config/axios";
import { Producto } from "../interfaces/IProducto";
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
} from "../types";

// Crear nuevos productos
export const crearNuevoProductoAction = (producto: Producto) => {
  return async (dispatch: any) => {
    dispatch(agregarProducto());
    try {
      // Insertar en la api
      await clienteAxios.post("/productos", producto);
      // Si todo sale bien, actualiza state
      dispatch(agregarProductoExito(producto));
    } catch (error) {
      console.log(error);
      // Si hay un error cambiar el state
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
