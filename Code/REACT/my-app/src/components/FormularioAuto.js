import React, { useState, useEffect } from "react";
import "./fomulary.css";

const initialAuto = {
  marca: "",
  modelo: "",
  anio: null,
  color: "",
};

const FormularioAutoComponent = ({
  autoAdd,
  autoEditado,
  setAutoEditado,
  autoEdit,
}) => {
  const [auto, setAuto] = useState(initialAuto);
  const { marca, modelo, anio, color } = auto;

  useEffect(() => {
    if (autoEditado !== null) {
      setAuto(autoEditado);
    } else {
      setAuto({
        marca: "",
        modelo: "",
        anio: "",
        color: "",
      });
    }
  }, [autoEditado]);

  const handleInputChange = (e) => {
    const changedFormValue = {
      ...auto,
      [e.target.name]: e.target.value,
    };
    setAuto(changedFormValue);
  };

  return (
    <div class="container container-sm border border- p-3 aling-center bg-secondary bg-gradient ">
      {autoEditado !== null ? (
        <h1>Editar Auto</h1>
      ) : (
        <h1>Agregar Auto</h1>
      )}
      <form class="forma">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Marca
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            name="marca"
            value={marca}
            onChange={handleInputChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Modelo
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            name="modelo"
            value={modelo}
            onChange={handleInputChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Año
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            name="anio"
            value={anio}
            onChange={handleInputChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Color
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            name="color"
            value={color}
            onChange={handleInputChange}
            aria-describedby="emailHelp"
          />
        </div>
        {autoEditado !== null ? (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => autoEdit(auto)}
          >
            Editar usuario
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => autoAdd(auto)}
          >
            Ingresar usuario
          </button>
        )}
        {autoEditado !== null ? (
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setAutoEditado(null)}
          >
            Cancelar
          </button>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};

export default FormularioAutoComponent;
