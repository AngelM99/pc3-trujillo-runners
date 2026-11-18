import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductoCard from '../components/ProductoCard'
import CarreraCard from '../components/CarreraCard'
import EstadoCarga from '../components/EstadoCarga'
import { obtenerDatos } from '../services/api'

function Home({ onAgregar }) {
  const [productos, setProductos] = useState([])
  const [carreras, setCarreras] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  // al abrir la pagina traemos productos y carreras
  useEffect(() => {
    async function cargarDatos() {
      try {
        const listaProductos = await obtenerDatos('productos')
        const listaCarreras = await obtenerDatos('carreras')
        setProductos(listaProductos)
        setCarreras(listaCarreras)
      } catch (e) {
        setError('No se pudo conectar con el servidor. ¿Prendiste JSON Server? (npm run api)')
      }
      setCargando(false)
    }

    cargarDatos()
  }, [])

  return (
    <div>
      <Hero
        titulo="CORRE TRUJILLO. SUPERA TUS LÍMITES."
        subtitulo="Carreras 5K, 10K y 12K y todo el equipo que necesitas para correr, en un solo lugar."
        textoBoton="Ver productos"
        enlace="/productos"
        imagen="/img/hero.jpg"
      />

      <div className="max-w-6xl mx-auto px-4">
        <EstadoCarga cargando={cargando} error={error} />

        {/* carreras */}
        <h2 className="text-2xl font-bold border-l-8 border-naranja pl-3 mt-10 mb-5">
          Nuestras carreras
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {carreras.map((carrera) => (
            <CarreraCard key={carrera.id} carrera={carrera} />
          ))}
        </div>

        {/* productos destacados (los primeros 4) */}
        <h2 className="text-2xl font-bold border-l-8 border-naranja pl-3 mt-10 mb-5">
          Productos destacados
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productos.slice(0, 4).map((producto) => (
            <ProductoCard key={producto.id} producto={producto} onAgregar={onAgregar} />
          ))}
        </div>

        {/* llamado a la accion */}
        <section className="bg-naranja text-white rounded-lg text-center p-8 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">¿Listo para tu próxima carrera?</h2>
          <p className="mb-4">Inscríbete hoy y únete a la comunidad de corredores de Trujillo.</p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-naranja font-bold px-6 py-3 rounded hover:bg-gray-100"
          >
            Quiero inscribirme
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Home
