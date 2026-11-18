import { useState } from 'react'

// Formulario de contacto con validaciones
function FormularioContacto() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [asunto, setAsunto] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  // revisa los campos y devuelve un objeto con los errores
  function validar() {
    const nuevosErrores = {}

    if (nombre.trim().length < 3) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 3 letras.'
    }
    if (!correo.includes('@') || !correo.includes('.')) {
      nuevosErrores.correo = 'Ingresa un correo válido.'
    }
    if (asunto === '') {
      nuevosErrores.asunto = 'Selecciona un asunto.'
    }
    if (mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
    }

    return nuevosErrores
  }

  function enviarFormulario(e) {
    e.preventDefault()

    const nuevosErrores = validar()
    setErrores(nuevosErrores)

    // si no hay errores, "enviamos" el mensaje
    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(true)
      setNombre('')
      setCorreo('')
      setAsunto('')
      setMensaje('')
    } else {
      setEnviado(false)
    }
  }

  const claseInput = 'border border-gray-300 rounded px-3 py-2 w-full bg-white'
  const claseError = 'text-red-600 text-sm mt-1'

  return (
    <form onSubmit={enviarFormulario} className="bg-white rounded-lg shadow p-6 space-y-4" noValidate>
      <div>
        <label className="block font-semibold mb-1">Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className={claseInput}
        />
        {errores.nombre && <p className={claseError}>{errores.nombre}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Correo</label>
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className={claseInput}
        />
        {errores.correo && <p className={claseError}>{errores.correo}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Asunto</label>
        <select value={asunto} onChange={(e) => setAsunto(e.target.value)} className={claseInput}>
          <option value="">Selecciona...</option>
          <option value="Inscripción a carreras">Inscripción a carreras</option>
          <option value="Compra de productos">Compra de productos</option>
          <option value="Otro">Otro</option>
        </select>
        {errores.asunto && <p className={claseError}>{errores.asunto}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Mensaje</label>
        <textarea
          rows="4"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className={claseInput}
        ></textarea>
        {errores.mensaje && <p className={claseError}>{errores.mensaje}</p>}
      </div>

      {enviado && (
        <p className="bg-green-100 text-green-700 border border-green-300 rounded p-3">
          ✅ ¡Mensaje enviado! Te responderemos pronto.
        </p>
      )}

      <button
        type="submit"
        className="bg-naranja hover:bg-naranja-oscuro text-white font-bold px-6 py-2 rounded"
      >
        Enviar mensaje
      </button>
    </form>
  )
}

export default FormularioContacto
