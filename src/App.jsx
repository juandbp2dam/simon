import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { loadApplication, usuarios } from "./logic/api";
import Login from "./components/Login";
import { AppContext, valoresDefecto } from "./AppContext";
function App() {
  const [count, setCount] = useState(0);
  loadApplication();

  return (
    <AppContext.Provider value={valoresDefecto}>
      <Login usuarios={usuarios} />
    </AppContext.Provider>
  );
}

export default App;
