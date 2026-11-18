// Muestra "Cargando..." o un mensaje de error
function EstadoCarga({ cargando, error }) {
  if (cargando) {
    return (
      <p className="text-center text-gray-500 py-8">⏳ Cargando información...</p>
    )
  }

  if (error) {
    return (
      <p className="text-center bg-red-100 text-red-700 border border-red-300 rounded p-4 my-4">
        ❌ {error}
      </p>
    )
  }

  return null
}

export default EstadoCarga
