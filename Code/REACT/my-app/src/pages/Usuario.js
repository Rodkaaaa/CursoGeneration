import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormularioUsuarioComponent,
  TableUsuarioComponent,
  Boton,
} from "../components";
import { getAllUser, addUser, updateUser, delUser } from "../service/User";


//constante agregasndo usuarios constantemente
const usuario1 = [
  {
    nombre: "Joseph",
    apellido: "Joestar",
    numero: "345232",
    email: "jojo@gmail.com",
  },
  {
    nombre: "Josuke",
    apellido: "Higashikata",
    numero: "123213",
    email: "jo.jo@gmail.com",
  },
  {
    nombre: "Jotaro",
    apellido: "Kujo",
    numero: "123213",
    email: "jo.jo@gmail.com",
  },
  {
    nombre: "Giorno",
    apellido: "Giovana",
    numero: "123213",
    email: "jo.jo@gmail.com",
  },
  {
    nombre: "Jolyne",
    apellido: "Kujo",
    numero: "123213",
    email: "jo.jo@gmail.com",
  },
];

const usuario2 = {
  nombre: "Josuke",
  apellido: "Higashikata",
  numero: "123213",
  email: "jo.jo@gmail.com",
};

const UsuarioPage = () => {
  const navigate = useNavigate();

  const handleOnClick = useCallback(() => navigate("/", {}, [navigate]));
  //en este momento state vale  lo mismo que usuario1
  //genera una funcion setteadora que me va permitir a modificar los atos de usuario 1 sin afectarlos directamente
  const [state, setState] = useState(usuario1);
  //state para editar usuario
  const [usuarioEditado, setUsuarioEditado] = useState(null);

  useEffect(()=>{
    getUser();
  },[])

  const getUser = async()=>{
    const usuarioBD = await getAllUser();
    setState(usuarioBD)
  }

/*   const userDelete = (nombreUsuario) => {
    const changeUser = state.filter(
      (usuario) => usuario.nombre !== nombreUsuario
    );
    setState(changeUser);
  }; */

  const userDelete = async(idUsuario) =>{
    const usuarioDB = await delUser(idUsuario);
    getUser();
  }

/*   const userAdd = (usuario) => {
    const addUsuario = [
      //mantenme los usuarios que tengo en state y agrega lo siguiente
      ...state,
      usuario, // 3 puntos es para mantener pero solo funciona como state
    ];
    setState(addUsuario);
  }; */

  const userAdd = async(usuarioAgregado)=>{
    const usuarioDB = await addUser(usuarioAgregado);
    getUser();
  }

 /*  const userEdit =(usuarioEditado)=>{
    const editUser = state.map(usuario => (usuario.nombre === usuarioEditado.nombre ? usuarioEditado : usuario))

    setState(editUser);
  } */

  const userEdit = async(updateeUser) => {
    const usuarioDB = await updateUser(updateeUser)
    getUser();
  }


  return (
    <div>
      <Boton infoBoton={"Volver"} handleOnClick={handleOnClick} />
      <FormularioUsuarioComponent
        userAdd={userAdd}
        usuarioEditado={usuarioEditado}
        setUsuarioEditado={setUsuarioEditado}
        userEdit={userEdit}
      />
      <TableUsuarioComponent
        usuarios={state}
        deleteUser={userDelete}
        setUsuarioEditado={setUsuarioEditado}
      />
    </div>
  );
};

export { UsuarioPage };
