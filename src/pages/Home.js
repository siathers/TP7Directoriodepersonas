import { Link } from "react-router-dom";
import Personas from "./Personas.json";

export default function Home() {
  return (
    <div>
      <h2 className="TituloLista">
        Lista de personas
      </h2>
      {Personas.map((persona) => (
        <div key={persona.id} className="Listita">
          <Link to={`/Persona/${persona.id}`} className="NombreLista">
            {persona.nombre} {persona.apellido}
          </Link>
        </div>
      ))}
    </div>
  );
}
