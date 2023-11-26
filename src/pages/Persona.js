import { useParams } from "react-router-dom";
import Personas from "./Personas.json";

export default function Persona() {
  const { id } = useParams();
  const persona = Personas.find((p) => p.id === id);

  if (!persona) {
    return <div className="Error">No se encontró la persona solicitada</div>;
  }

  return (
    <div className="DetallesPersona">
      <h2>{`Apellido: ${persona.apellido}`}</h2>
      <h2>{`Nombre: ${persona.nombre}`}</h2>
      <h2>{`Email: ${persona.email}`}</h2>
      <h2>{`Edad: ${persona.edad}`}</h2>
    </div>
  );
}
