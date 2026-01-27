import { useState } from "react";
import { AppContext } from "../AppContext";
import { pintarAleatorios } from "../logic/api";
import { useContext } from "react";
import Jugar from "./jugar";

const Inicio = () => {
  const jugarEvt = (event) => {
    setVisible(false);
    console.log(contexto.combinacion);
  };
  const contexto = useContext(AppContext);
  const [visible, setVisible] = useState(true);
  if (contexto.nombreUsuario != "") {
    if (visible)
      return (
        <>
          <h1>SIMÓN</h1>
          <h2>Hola, {contexto.nombreUsuario}, memoriza la combinación</h2>
          <div>{pintarAleatorios()}</div>
          <br></br>
          <button onClick={jugarEvt}>Jugar</button>
        </>
      );
    else
      return (
        <>
          <Jugar></Jugar>
        </>
      );
  } else {
    <>
      <p>No autenticado</p>
    </>;
  }
};
export default Inicio;
