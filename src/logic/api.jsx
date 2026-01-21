import { Usuario, Jugada } from "./DataObjects";
export let usuarios = [];
let jugadas = [];
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
