import { useState } from "react";
import { AppContext } from "../AppContext";
//import "../css/estilos.css";
import { pintarAleatorios, pintarCirculos } from "../logic/api";
import { useContext } from "react";

const Inicio = () => {
  //  Math.floor(Math.random() * max)
  const contexto = useContext(AppContext);
  if (contexto.nombreUsuario != "") {
    return (
      <>
        <h1>SIMÓN</h1>
        <h2>Hola, {contexto.nombreUsuario}, memoriza la combinación</h2>
        {pintarAleatorios()}
      </>
    );
  } else {
    <>
      <p>No autenticado</p>
    </>;
  }
};
export default Inicio;
