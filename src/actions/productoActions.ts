import { Producto } from "../interfaces/IProducto";
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
} from "../types";

// Crear nuevos productos
export const crearNuevoProductoAction = (producto: Producto) => {
  return () => {
    console.log("ver producto", producto);
  };
};
