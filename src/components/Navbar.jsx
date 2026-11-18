import { NavLink } from 'react-router-dom'
import { useState } from 'react'

// Menu de navegacion (se abre y cierra en celular)
function Navbar({ cantidadCarrito }) {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const enlaces = [
    { texto: 'Inicio', ruta: '/' },
    { texto: 'Productos', ruta: '/productos' },
    { texto: 'Carreras', ruta: '/carreras' },
    { texto: 'Contacto', ruta: '/contacto' },
  ]

  // estilo del enlace segun si esta activo o no
  const claseEnlace = ({ isActive }) =>
    isActive
      ? 'block px-3 py-2 rounded text-naranja font-bold'
      : 'block px-3 py-2 rounded text-white hover:text-naranja'

  return (
    <nav>
      {/* boton hamburguesa (solo se ve en celular) */}
      <button
        onClick={() => setMenuAbierto(!menuAbierto)}
        className="md:hidden text-white text-3xl"
        aria-label="Abrir menú"
      >
        {menuAbierto ? '✕' : '☰'}
      </button>

      <ul
        className={
          (menuAbierto ? 'block' : 'hidden') +
          ' absolute left-0 right-0 top-full bg-negro p-4 md:static md:flex md:items-center md:gap-2 md:p-0'
        }
      >
        {enlaces.map((enlace) => (
          <li key={enlace.ruta}>
            <NavLink
              to={enlace.ruta}
              className={claseEnlace}
              onClick={() => setMenuAbierto(false)}
            >
              {enlace.texto}
            </NavLink>
          </li>
        ))}
        <li>
          <span className="inline-block mt-2 md:mt-0 bg-naranja text-white px-3 py-1 rounded-full text-sm">
            🛒 {cantidadCarrito}
          </span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
