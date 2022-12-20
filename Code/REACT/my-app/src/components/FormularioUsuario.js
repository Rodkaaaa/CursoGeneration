import React, { useState, useEffect } from "react";
import "./fomulary.css";

const initialUsuario = {
  id: "",
  name: "",
  lastName: "",
  correo: "",
};

const FormularioUsuarioComponent = ({
  userAdd,
  usuarioEditado,
  setUsuarioEditado,
  userEdit,
}) => {
  const [usuario, setUsuario] = useState(initialUsuario);
  const { id, name, lastName, correo } = usuario;

  useEffect(() => {
    //el hook useEffect siemrpe esta pendiente de si la variable que tiene dentro de sus corchetes cambia
    //el debera hacer todo lo que tiene en su funcion
    //el useeffect siempre corre al menos 1 vez cuando inicia la pagina
    if (usuarioEditado !== null) {
      setUsuario(usuarioEditado);
    } else {
      setUsuario({
        id: "",
        name: "",
        lastName: "",
        correo: "",
      });
    }
  }, [usuarioEditado]);

  const handleInputChange = (e) => {
    //esta funcion se llama cada vez que nosotros escribimos algo en un input de nuestra pagina
    const changedFormValue = {
      ...usuario,
      [e.target.name]: e.target.value,
    };
    setUsuario(changedFormValue);
  };

  return (
    <div class="container container-sm  border border-dark p-3 bg-secondary bg-gradient contenedor ">
      {usuarioEditado !== null ? (
        <h1>Editar Usuario</h1>
      ) : (
        <h1>Agregar Usuario</h1>
      )}
      <form>
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            #ID
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            name="id"
            value={id}
            onChange={handleInputChange}
            disabled
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Nombre
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            name="name"
            value={name}
            onChange={handleInputChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Apellido
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            name="correo"
            value={correo}
            onChange={handleInputChange}
            aria-describedby="emailHelp"
          />
        </div>
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userEdit(usuario)}
          >
            Editar usuario
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userAdd(usuario)}
          >
            Ingresar usuario
          </button>
        )}

        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setUsuarioEditado(null)}
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

export default FormularioUsuarioComponent;
