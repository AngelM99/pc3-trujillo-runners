// Funciones para traer los datos de la API
// En mi PC se usa JSON Server (localhost:3000).
// Cuando esta subido a internet no hay JSON Server, asi que se lee el archivo /db.json

export async function obtenerDatos(recurso) {
  const estaEnLocal = window.location.hostname === 'localhost'

  if (estaEnLocal) {
    try {
      const respuesta = await fetch('http://localhost:3000/' + recurso)
      if (respuesta.ok) {
        return await respuesta.json()
      }
    } catch (error) {
      // si json-server no esta prendido seguimos con db.json
    }
  }

  const respuesta = await fetch('/db.json')
  if (!respuesta.ok) {
    throw new Error('No se pudo cargar la información')
  }
  const datos = await respuesta.json()
  return datos[recurso]
}
