import { Producto } from "../interfaces/IProducto";
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS_EXITO,
} from "../types";

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

// Crear nuevos productos =====================================
export const crearNuevoProductoAction = (producto: Producto) => {
  return async (dispatch: any) => {
    dispatch(agregarProducto());
    try {
      // Insertar en la api
      await clienteAxios.post("/productos", producto);
      // Si todo sale bien, actualiza state
      dispatch(agregarProductoExito(producto));
      // Alerta
      Swal.fire("Correcto", "El producto se agregó correctamente", "success");
    } catch (error) {
      console.log(error);
      // Si hay un error cambiar el state
      dispatch(agregarProductoError(true));

      //Alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
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

// Descargar productos de la base de datos  =================
export const obtenerProductosAction = () => {
  return async (dispatch: any) => {
    dispatch(descargarProductos());
  };
};

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true,
});
