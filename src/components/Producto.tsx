import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// Redux
import { useDispatch } from "react-redux";
import { eliminarProductoAction } from "../actions/productoActions";

const Producto = ({ producto }: any) => {
  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();

  // Confirmar si desea eliminar
  const confirmEliminarProducto = (id: number) => {
    // Preguntar al usuario
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Un producto eliminado no se puede recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Pasarlo al action
        dispatch(eliminarProductoAction(id));
      }
    });
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">s/. {precio}</span>
      </td>
      <td className="acciones">
        <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">
          Editar
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
