import { Link } from 'react-router-dom'
import Navbar from './Navbar'

// Cabecera con el logo y el menu
function Header({ cantidadCarrito }) {
  return (
    <header className="bg-negro sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between relative">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg">
          <img src="/img/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full" />
          <span>
            Trujillo <span className="text-naranja">Runners</span> Hub
          </span>
        </Link>

        <Navbar cantidadCarrito={cantidadCarrito} />
      </div>
    </header>
  )
}

export default Header
