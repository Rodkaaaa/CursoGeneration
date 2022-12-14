import React from "react";

const Dropdown = ({ handleOnClick}) => {
  return (
    <div class="btn-group">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Acciones
      </button>
      <ul class="dropdown-menu">
        <li>
          <button class="dropdown-item" >
            Editar
          </button>
        </li>
        <li>
          <button
            class="dropdown-item"
            onClick={() => {
              handleOnClick();
            }}
          >
            Borrar
          </button>
        </li>
        <li>
          <button class="dropdown-item">
            Mover
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
