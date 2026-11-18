import { Link } from 'react-router-dom'

// Pagina 404
function NotFound() {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-8xl font-bold text-naranja">404</h1>
      <h2 className="text-2xl font-bold mt-2">¡Ups! Te saliste de la ruta 🏃</h2>
      <p className="text-gray-500 mb-6">La página que buscas no existe.</p>
      <Link
        to="/"
        className="bg-naranja hover:bg-naranja-oscuro text-white font-bold px-6 py-3 rounded"
      >
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound
