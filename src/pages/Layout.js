import { Outlet, Link } from "react-router-dom";
import '../index.css';

const Layout = () => {
  return (
    <>
      <nav aria-label="Navegación principal">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/stats">Estadisticas</Link>
          </li>
        </ul>
      </nav>
      <div style={{ marginTop: '20px' }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
