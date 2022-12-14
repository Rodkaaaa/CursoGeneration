import React from "react";

const TableAutoComponent = ({autos, deleteAuto, setAutoEditado }) => {

  var i = 1
  return (
    <div class="container">
      <table class="table table-dark table-sm container  ">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">año</th>
            <th scope="col">Color</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {autos.map((auto) =>(
            <tr>
            <th scope="row">{i++}</th>
            <td>{auto.marca}</td>
            <td>{auto.modelo}</td>
            <td>{auto.anio}</td>
            <td>{auto.color}</td>
            <td>
            <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    deleteAuto(auto.marca);
                  }}
                >
                  Eliminar
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    setAutoEditado(auto);
                  }}
                >
                  Editar
                </button>
            </td>
          </tr>
          ))
        };
          
        </tbody>
      </table>
    </div>
  );
};

export default TableAutoComponent;
