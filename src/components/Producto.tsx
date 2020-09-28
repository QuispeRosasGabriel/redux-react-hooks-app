import React from "react";
import { Link } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
import { eliminarProductoAction } from "../actions/productoActions";

const Producto = ({ producto }: any) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();

  // Confirmar si desea eliminar
  const confirmEliminarProducto = (id: number) => {
    // Preguntar al usuario

    // Pasarlo al action
    dispatch(eliminarProductoAction(id));
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">s/. {precio}</span>
      </td>
      <td className="acciones">
        <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">
          Editar{" "}
        </Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
