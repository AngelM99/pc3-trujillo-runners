import { Link } from 'react-router-dom'

// Pie de pagina
function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="bg-negro text-gray-300 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-white font-bold text-lg">
            Trujillo <span className="text-naranja">Runners</span> Hub
          </h3>
          <p className="text-sm mt-2">Cada kilómetro es una victoria. Corre con nosotros.</p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-2">Enlaces</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/productos" className="hover:text-naranja">Productos</Link></li>
            <li><Link to="/carreras" className="hover:text-naranja">Carreras</Link></li>
            <li><Link to="/contacto" className="hover:text-naranja">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-2">Síguenos</h4>
          <div className="flex gap-4 text-sm">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-naranja">Instagram</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="hover:text-naranja">Facebook</a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="hover:text-naranja">TikTok</a>
          </div>
        </div>
      </div>

      <p className="text-center text-xs py-4 border-t border-gray-700">
        © {anio} Trujillo Runners Hub · Trujillo, Perú
      </p>
    </footer>
  )
}

export default Footer
