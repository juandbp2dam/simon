import { Usuario, Jugada } from "./DataObjects";
import { AppContext } from "../AppContext";

export let usuarios = [];
let colores = ["red", "blue", "yellow", "green", "black"];
let jugadas = [];
import "../css/estilos.css";
import { useContext } from "react";
const getUsuariosFromLocal = () => {
  return JSON.parse(localStorage.getItem("Usuarios"));
};

const setUsuariosToLocal = (usuarios) => {
  localStorage.setItem("Usuarios", JSON.stringify(usuarios));
};

const getJugadasFromLocal = () => {
  return JSON.parse(localStorage.getItem("Jugadas"));
};

const setJugadasToLocal = (jugadas) => {
  localStorage.setItem("Jugadas", JSON.stringify(jugadas));
};

export const loadApplication = () => {
  // Dar de alta usuarios
  loadUsuarios();
};

const loadUsuarios = () => {
  if (usuarios.length == 0) {
    usuarios.push(new Usuario(1, "ana", "ana", 0));
    usuarios.push(new Usuario(2, "maria", "maria", 0));
    usuarios.push(new Usuario(3, "paco", "paco", 0));
    usuarios.push(new Usuario(4, "pedro", "pedro", 0));
    setUsuariosToLocal(usuarios);
  }
};
const obtenerAleatorio = (max) => {
  return Math.floor(Math.random() * max);
};

export const pintarAleatorios = () => {
  const contexto = useContext(AppContext);
  contexto.combinacion = [
    colores[obtenerAleatorio(4)],
    colores[obtenerAleatorio(4)],
    colores[obtenerAleatorio(4)],
    colores[obtenerAleatorio(4)],
  ];

  return pintarCirculos(
    contexto.combinacion[0],
    contexto.combinacion[1],
    contexto.combinacion[2],
    contexto.combinacion[3],
  );
};
export const pintarCirculos = (col1, col2, col3, col4) => {
  let colores_arg = [col1, col2, col3, col4];
  if (
    !colores.includes(col1) ||
    !colores.includes(col2) ||
    !colores.includes(col3) ||
    !colores.includes(col4)
  ) {
    return <p>Uno de los colores introducidos, no es válido</p>;
  } else {
    return (
      <div className="circulos">
        {colores_arg.map((c) => (
          <div
            key={c}
            className="circulo"
            style={{ backgroundColor: c, border: "2px solid black" }}
          ></div>
        ))}
      </div>
    );
  }
  /*$colores_arg = [$col1, $col2, $col3, $col4];
        if (!in_array($col1, $colores) || !in_array($col2, $colores) || !in_array($col3, $colores) || !in_array($col4, $colores))
            echo "<br>Uno de los colores introducidos no es válido";
        else{
            echo "<div class='circulos'>";
            foreach($colores_arg as $color){
                echo "<div class='circulo' style='background-color: ".htmlspecialchars($color)."; border: 2px solid black;'></div>";
            }
            echo "</div>";
      }*/
};
