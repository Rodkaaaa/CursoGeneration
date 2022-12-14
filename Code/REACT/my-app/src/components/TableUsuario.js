import React from "react";

const TableUsuarioComponent = ({ usuarios, deleteUser, setUsuarioEditado }) => {
  // para auto incrementar id
  var i = 1;
  return (
    <div class="container">
      <table class="table table-dark table-sm container ">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Correo</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr>
              {/* autoincremento el id */}
              <th scope="row">{usuario.id}</th>
              <td>{usuario.name}</td>
              <td>{usuario.lastName}</td>
              <td>{usuario.correo}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    deleteUser(usuario.id);
                  }}
                >
                  Eliminar
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setUsuarioEditado(usuario);
                  }}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
    </div>
  );
};

export default TableUsuarioComponent;
