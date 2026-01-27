import { pintarCirculos } from "../logic/api";
import { colores_esp } from "../logic/api";
const Jugar = () => {
  return (
    <>
      {pintarCirculos("black", "black", "black", "black")}
      <div>
        {colores_esp.map((c, i) => (
          <div
            key={i}
            className="boton"
            style={{ backgroundColor: c, border: "2px solid black" }}
          ></div>
        ))}
      </div>
    </>
  );
};
export default Jugar;
