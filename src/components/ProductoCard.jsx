// Tarjeta de un producto. Recibe el producto y una funcion para agregar al carrito.
function ProductoCard({ producto, onAgregar }) {
  // color del stock segun cuantas unidades quedan
  let colorStock = 'text-green-600'
  if (producto.stock === 0) {
    colorStock = 'text-red-600'
  } else if (producto.stock <= 5) {
    colorStock = 'text-orange-500'
  }

  return (
    <article className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden flex flex-col">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="h-48 w-full object-cover"
      />

      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded self-start mb-2">
          {producto.categoria}
        </span>
        <h3 className="font-bold text-lg">{producto.nombre}</h3>
        <p className="text-sm text-gray-500 mb-2">{producto.descripcion}</p>
        <p className="text-naranja font-bold text-xl">S/. {producto.precio.toFixed(2)}</p>

        <p className={'text-sm mb-3 ' + colorStock}>
          {producto.stock === 0 ? 'Agotado' : 'Stock: ' + producto.stock}
        </p>

        {/* el boton solo aparece si le pasamos la funcion onAgregar */}
        {onAgregar && (
          <button
            onClick={() => onAgregar(producto)}
            disabled={producto.stock === 0}
            className="mt-auto bg-naranja hover:bg-naranja-oscuro text-white font-bold py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </article>
  )
}

export default ProductoCard
