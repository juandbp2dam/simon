import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { loadApplication, usuarios } from "./logic/api";
import Login from "./components/Login";
import { AppContext, valoresDefecto } from "./AppContext";
import Inicio from "./components/Inicio";
import { useContext } from "react";
function App() {
  //const [count, setCount] = useState(0);
  const contexto = useContext(AppContext);
  const [autenticado, setAutenticado] = useState(false);

  loadApplication();
  return (
    <AppContext.Provider value={valoresDefecto}>
      <div className="App">
        <Login usuarios={usuarios} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
