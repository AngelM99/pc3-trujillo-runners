import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import CarreraCard from '../components/CarreraCard'
import EstadoCarga from '../components/EstadoCarga'
import { obtenerDatos } from '../services/api'

function Carreras() {
  const [carreras, setCarreras] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    obtenerDatos('carreras')
      .then((datos) => {
        setCarreras(datos)
        setCargando(false)
      })
      .catch(() => {
        setError('No se pudo conectar con el servidor. ¿Prendiste JSON Server? (npm run api)')
        setCargando(false)
      })
  }, [])

  return (
    <div>
      <Hero
        titulo="Carreras 2026"
        subtitulo="Elige tu distancia y demuestra todo lo que eres capaz de lograr."
        textoBoton="Inscribirme"
        enlace="/contacto"
      />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <EstadoCarga cargando={cargando} error={error} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {carreras.map((carrera) => (
            <CarreraCard key={carrera.id} carrera={carrera} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carreras
