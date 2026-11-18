# Trujillo Runners Hub – PC3 (React + Tailwind)

Avance del proyecto del curso **Javascript Avanzado**. Es la continuación de las PC1 y PC2, ahora hecho con React, Vite y Tailwind CSS.

## Tecnologías

- React 19 + Vite
- Tailwind CSS 4
- React Router
- JSON Server

## Cómo ejecutarlo

```
npm install
npm run api     # terminal 1: JSON Server en el puerto 3000
npm run dev     # terminal 2: la página en http://localhost:5173
```

## Páginas

| Ruta           | Página                          |
| -------------- | ------------------------------- |
| `/`            | Inicio                          |
| `/productos`   | Productos con buscador y filtro |
| `/carreras`    | Carreras                        |
| `/contacto`    | Contacto con formulario         |
| cualquier otra | 404                             |

## Estructura

```
src/
  components/  Header, Navbar, Hero, Footer, ProductoCard, CarreraCard, Buscador, EstadoCarga, FormularioContacto
  pages/       Home, Productos, Carreras, Contacto, NotFound
  services/    api.js
db.json        productos y carreras
```

## Integrante

- Miguel Angel Marquez Cipriano
