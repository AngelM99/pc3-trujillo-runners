import { Link } from 'react-router-dom'

// Seccion principal. Se usa en el Home (con imagen) y en las otras paginas (solo texto).
function Hero({ titulo, subtitulo, textoBoton, enlace, imagen }) {
  const estiloFondo = imagen
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${imagen})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {}

  return (
    <section
      style={estiloFondo}
      className={
        'text-white flex items-center ' +
        (imagen ? 'min-h-[420px] md:min-h-[500px]' : 'bg-negro py-12')
      }
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{titulo}</h1>
        <p className="text-gray-200 text-base md:text-xl mb-6 max-w-2xl">{subtitulo}</p>

        {/* el boton solo aparece si le mandamos texto */}
        {textoBoton && (
          <Link
            to={enlace}
            className="inline-block bg-naranja hover:bg-naranja-oscuro text-white font-bold px-6 py-3 rounded"
          >
            {textoBoton}
          </Link>
        )}
      </div>
    </section>
  )
}

export default Hero
