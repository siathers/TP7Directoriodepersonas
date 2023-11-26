export default function Contact() {
  return (
    <div style={{ padding: '20px' }}>
      <h2 className="TituloForm">Contactanos</h2>
      
      <form>
          <input type="text" placeholder="Nombre:" className="u-full-width" style={{ marginBottom: '20px' }} />
          <input type="text" placeholder="Apellido:" className="u-full-width" style={{ marginBottom: '20px' }} />
          <input type="number" placeholder="Edad:" className="u-full-width" style={{ marginBottom: '20px' }} />
          <input type="text" placeholder="Email:" className="u-full-width" style={{ marginBottom: '20px' }} />
          <button className="pixel2" type="submit">Enviar</button>
      </form>
    </div>
  );
}
