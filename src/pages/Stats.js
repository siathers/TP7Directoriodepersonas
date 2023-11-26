import Personas from "./Personas.json";

export default function Stats() {
  let cantidadMayores = 0;
  let edadMayor = -Infinity;
  let mayores = [];
  let edadMenor = Infinity;
  let menores = [];

  Personas.forEach((persona) => {
    if (persona.edad > 35) {
      cantidadMayores += 1;
    }

    if (persona.edad > edadMayor) {
      mayores = [persona.nombre + " " + persona.apellido];
      edadMayor = persona.edad;
    } else if (persona.edad === edadMayor) {
      mayores.push(persona.nombre + " " + persona.apellido);
    }

    if (persona.edad < edadMenor) {
      menores = [persona.nombre + " " + persona.apellido];
      edadMenor = persona.edad;
    } else if (persona.edad === edadMenor) {
      menores.push(persona.nombre + " " + persona.apellido);
    }
  });

  return (
    <div className="StatsPersona">
      <h2>Cantidad de personas mayores: {cantidadMayores}</h2>
      <h2>Personas mayores: </h2>
      <p>{mayores.join(', ')}</p>
      <h2>Personas menores:</h2>
      <p>{menores.join(', ')}</p>
    </div>
  );
}
