// Tarjeta de una carrera
function CarreraCard({ carrera }) {
  return (
    <article className="bg-white rounded-lg shadow overflow-hidden text-center">
      <div
        className="text-white text-4xl font-bold py-6"
        style={{ backgroundColor: carrera.color }}
      >
        {carrera.distancia}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{carrera.nombre}</h3>
        <p className="text-gray-500 text-sm">📅 {carrera.fecha}</p>
        <p className="text-gray-500 text-sm mb-2">📍 {carrera.lugar}</p>
        <p className="font-bold">Inscripción: S/. {carrera.precio}</p>
      </div>
    </article>
  )
}

export default CarreraCard
