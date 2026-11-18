import Hero from '../components/Hero'
import FormularioContacto from '../components/FormularioContacto'

function Contacto() {
  return (
    <div>
      <Hero titulo="Contacto" subtitulo="Estamos aquí para ayudarte en cada paso de tu camino." />

      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3">
        <div className="bg-white rounded-lg shadow p-6 h-fit">
          <h2 className="font-bold text-lg mb-3">Encuéntranos</h2>
          <p className="mb-1">📞 +51 987 654 321</p>
          <p className="mb-1">✉️ info@trujillorunners.pe</p>
          <p>📍 Av. España 1240, Trujillo, La Libertad</p>
        </div>

        <div className="md:col-span-2">
          <FormularioContacto />
        </div>
      </div>
    </div>
  )
}

export default Contacto
