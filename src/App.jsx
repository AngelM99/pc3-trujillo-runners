import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Carreras from './pages/Carreras'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

function App() {
  // el carrito se guarda aqui para que lo vean el Header y las paginas
  const [carrito, setCarrito] = useState([])

  function agregarAlCarrito(producto) {
    setCarrito([...carrito, producto])
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header cantidadCarrito={carrito.length} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onAgregar={agregarAlCarrito} />} />
          <Route path="/productos" element={<Productos onAgregar={agregarAlCarrito} />} />
          <Route path="/carreras" element={<Carreras />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* cualquier otra ruta muestra el 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
