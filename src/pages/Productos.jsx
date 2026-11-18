import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Buscador from '../components/Buscador'
import ProductoCard from '../components/ProductoCard'
import EstadoCarga from '../components/EstadoCarga'
import { obtenerDatos } from '../services/api'

function Productos({ onAgregar }) {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  const [texto, setTexto] = useState('')
  const [categoria, setCategoria] = useState('Todas')

  useEffect(() => {
    obtenerDatos('productos')
      .then((datos) => {
        setProductos(datos)
        setCargando(false)
      })
      .catch(() => {
        setError('No se pudo conectar con el servidor. ¿Prendiste JSON Server? (npm run api)')
        setCargando(false)
      })
  }, [])

  // sacamos las categorias sin repetir
  const categorias = []
  productos.forEach((p) => {
    if (!categorias.includes(p.categoria)) {
      categorias.push(p.categoria)
    }
  })

  // filtramos por texto y por categoria
  const productosFiltrados = productos.filter((p) => {
    const coincideTexto = p.nombre.toLowerCase().includes(texto.toLowerCase())
    const coincideCategoria = categoria === 'Todas' || p.categoria === categoria
    return coincideTexto && coincideCategoria
  })

  return (
    <div>
      <Hero titulo="Productos" subtitulo="Todo lo que necesitas para tu próxima carrera." />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Buscador
          texto={texto}
          categoria={categoria}
          categorias={categorias}
          onCambiarTexto={setTexto}
          onCambiarCategoria={setCategoria}
        />

        <EstadoCarga cargando={cargando} error={error} />

        <p className="text-sm text-gray-500 mb-4">
          Mostrando {productosFiltrados.length} de {productos.length} productos
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productosFiltrados.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} onAgregar={onAgregar} />
          ))}
        </div>

        {!cargando && !error && productosFiltrados.length === 0 && (
          <p className="text-center text-gray-500 py-8">No se encontraron productos.</p>
        )}
      </div>
    </div>
  )
}

export default Productos
