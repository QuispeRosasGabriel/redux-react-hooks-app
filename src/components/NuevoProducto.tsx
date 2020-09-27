import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions de redux
import { crearNuevoProductoAction } from "../actions/productoActions";
import { Producto } from "../interfaces/IProducto";

const NuevoProducto = () => {
  // State del componente
  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState(0);

  // Utilizar usedispatch crea una funcion
  const dispatch = useDispatch();

  // Acceder al state del store
  const cargando = useSelector((state: any) => state.productos.loading);
  const error = useSelector((state: any) => state.productos.error);

  // usa el dispatch para comunicarse con las acciones => Manda a llamar el action
  const agregarProducto = (producto: Producto) =>
    dispatch(crearNuevoProductoAction(producto));

  const handleSubmitNuevoProducto = (e: any) => {
    e.preventDefault();
    //Validar formulario
    if (nombre.trim() === "" || precio <= 0) {
      return;
    }

    //Crear el nuevo producto
    agregarProducto({
      nombre,
      precio,
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <form onSubmit={handleSubmitNuevoProducto}>
              <div className="form-group">
                <label>Nombre Producto: </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => guardarNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto: </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => guardarPrecio(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
            {cargando && <p>Cargando...</p>}
            {error && (
              <p className="alert alert-danger p-2 mt-4 text-center">
                Hubo un error...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
