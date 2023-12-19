import { Link } from "react-router-dom"
export default function Container({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Inicio</Link>
          <ul>
            <li>
              <Link to="/about">
                Ayuda
              </Link>
            </li>
            <li>
              <Link to="/learn">
                Documentación
              </Link>
            </li>
            <li>
              <Link to="/install">
                Instalación
              </Link>
            </li>
          </ul>
          <button>
            Descargar V1.1
          </button>
        </nav>
      </header>
      {children}
    </div>
  )
}