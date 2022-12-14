import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormularioAutoComponent,
  TableAutoComponent,
  Boton,
} from "../components";

//constante agregasndo usuarios constantemente
const auto1 = [
  {
    marca: "auto1",
    modelo: "modelo1",
    anio: "1000",
    color: "rojo",
  },
  {
    marca: "auto2",
    modelo: "modelo2",
    anio: "1001",
    color: "rojo1",
  },
  {
    marca: "auto3",
    modelo: "modelo3",
    anio: "1002",
    color: "rojo2",
  },
  {
    marca: "auto4",
    modelo: "modelo4",
    anio: "1003",
    color: "roj3",
  },
  {
    marca: "auto5",
    modelo: "modelo5",
    anio: "1005",
    color: "rojo5",
  },
];

const AutoPage = () => {
  const navigate = useNavigate();

  const handleOnClick = useCallback(() => navigate("/", {}, [navigate]));
  const [state, setState] = useState(auto1);
  const [autoEditado, setAutoEditado] = useState(null);

  const autoDelete = (marcaAuto) => {
    const changeAuto = state.filter(
      (auto) => auto.marca !== marcaAuto
    );
    setState(changeAuto);
  };

  const autoAdd = (auto) => {
    const addAuto = [
      //mantenme los usuarios que tengo en state y agrega lo siguiente
      ...state,
      auto, // 3 puntos es para mantener pero solo funciona como state
    ];
    setState(addAuto);
  };

  const autoEdit = (autoEditado) => {
    const editAuto = state.map(auto => (auto.marca === autoEditado.marca ? autoEditado : auto));

    setState(editAuto);
  };
  return (
    <div>
      <Boton infoBoton={"Volver"} handleOnClick={handleOnClick} />
      <FormularioAutoComponent 
       autoAdd={autoAdd}
       autoEditado={autoEditado}
       setAutoEditado={setAutoEditado}
       autoEdit={autoEdit}/>
      <TableAutoComponent
      autos={state}
      deleteAuto={autoDelete}
      setAutoEditado={setAutoEditado} 
      />
    </div>
  );
};

export { AutoPage };
