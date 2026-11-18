// Buscador de texto y filtro por categoria. El estado vive en la pagina que lo usa.
function Buscador({ texto, categoria, categorias, onCambiarTexto, onCambiarCategoria }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 mb-6">
      <input
        type="text"
        value={texto}
        onChange={(e) => onCambiarTexto(e.target.value)}
        placeholder="Buscar producto..."
        className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
      />

      <select
        value={categoria}
        onChange={(e) => onCambiarCategoria(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 w-full bg-white"
      >
        <option value="Todas">Todas las categorías</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Buscador
