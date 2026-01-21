import { useState } from "react";
import { AppContext } from "../AppContext";
import { useContext } from "react";
import Inicio from "./Inicio";
const Login = (props) => {
  const contexto = useContext(AppContext);
  const [nombreUsu, setNombreUsu] = useState("");
  const [passUsu, setPassUsu] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const cambioEntrada = (event) => {
    if (event.target.type === "text") setNombreUsu(event.target.value);
    else if (event.target.type === "password") setPassUsu(event.target.value);
  };
  const envioForm = (event) => {
    event.preventDefault();
    // Aquí tengo que comprobar si el usuario está en la BD
    const usuarioLogin = props.usuarios.find((u) => u._nombre == nombreUsu);
    if (usuarioLogin) {
      // Comprobamos si la contraseña es correcta
      if (usuarioLogin._clave != passUsu) {
        alert("La contraseña no es correcta");
      } else {
        alert("El usuario ha sido autenticado correctamente");
        contexto.nombreUsuario = nombreUsu;
        setAutenticado(true);
      }
    } else {
      alert("El usuario no existe");
    }
  };
  // Si el usuario ya está autenticado, mostrar su nombre
  // y si no, el formulario de entrada
  if (!autenticado)
    return (
      <form onSubmit={envioForm}>
        <label>Introduzca usuario y contraseña</label>
        <br />
        <label>Usuario: </label>
        <input type="text" id="nombreUsu" onChange={cambioEntrada}></input>
        <br />
        <label>Contraseña: </label>
        <input type="password" id="passUsu" onChange={cambioEntrada}></input>
        <br />
        <button type="submit">Enviar</button>
      </form>
    );
  else
    return (
      <>
        <p>Está autenticado como {contexto.nombreUsuario}</p>
        <Inicio></Inicio>
      </>
    );
};
export default Login;
