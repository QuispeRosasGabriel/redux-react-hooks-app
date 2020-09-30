import { Producto } from "../interfaces/IProducto";
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  COMENZAR_DESCARGA_PRODUCTOS,
  COMENZAR_EDICION_PRODUCTO,
  DESCARGA_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS_EXITO,
  OBTENER_PRODUCTO_EDITAR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_ERROR,
  PRODUCTO_ELIMINADO_EXITO,
} from "../types";

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";
import productosReducer from "../reducers/productosReducer";

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

    try {
      const respuesta = await clienteAxios.get("/productos");
      const { data } = respuesta;
      dispatch(descargarProductosExitosa(data));
    } catch (error) {
      dispatch(descargarProductosError(true));
    }
  };
};

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true,
});

const descargarProductosExitosa = (productos: any) => ({
  type: DESCARGA_PRODUCTOS_EXITO,
  payload: productos,
});

const descargarProductosError = (value: boolean) => ({
  type: DESCARGA_PRODUCTOS_ERROR,
  payload: value,
});

//  Selecciona y elimina un producto =============================
export const eliminarProductoAction = (id: number) => {
  return async (dispatch: any) => {
    dispatch(obtenerProductoEliminar(id));
    try {
      const resultado = await clienteAxios.delete(`/productos/${id}`);
      dispatch(eliminarProductoExito());

      // Si se elimina, mostrar alerta
      Swal.fire("Eliminado!", "Archivo eliminado con éxito.", "success");
    } catch (error) {
      eliminarProductoError(true);
    }
  };
};

const obtenerProductoEliminar = (id: number) => ({
  type: OBTENER_PRODUCTO_ELIMINAR,
  payload: id,
});

const eliminarProductoExito = () => ({
  type: PRODUCTO_ELIMINADO_EXITO,
});

const eliminarProductoError = (value: boolean) => ({
  type: PRODUCTO_ELIMINADO_ERROR,
  payload: value,
});

// Colocar producto en edicion ===================

export const obtenerProductoEditar = (producto: any) => {
  return (dispatch: any) => {
    dispatch(obtenerProductoEditarAction(producto));
  };
};

const obtenerProductoEditarAction = (producto: any) => ({
  type: OBTENER_PRODUCTO_EDITAR,
  payload: producto,
});

// Edita y registra en la api y el state =====
export const editarProductoAction = (producto: any) => {
  return async (dispatch: any) => {
    dispatch(editarProducto(producto));

    try {
      const resultado = await clienteAxios.put(
        `/productos/${producto.id}`,
        producto
      );
    } catch (error) {}
  };
};

const editarProducto = (producto: any) => ({
  type: COMENZAR_EDICION_PRODUCTO,
  payload: producto,
});
