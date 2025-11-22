import { Links, Meta, Outlet, Scripts } from "react-router";
import Header from './components/header/Header'
 
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Meta de React Router */}
        <Meta />
        {/* Links de React Router */}
        <Links />

        {/* Charset: define la codificación de caracteres */}
        <meta charSet="UTF-8" />

        {/* Viewport: ajusta la escala en móviles */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Compatibilidad con IE */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* SEO básico: descripción del sitio */}
        <meta name="description" content="Descripción corta de tu página web con palabras clave importantes." />

        {/* SEO básico: palabras clave */}
        <meta name="keywords" content="palabra1, palabra2, palabra3" />

        {/* Autor del sitio */}
        <meta name="author" content="Matias Alvarez" />

        {/* Robots: permite indexar la página y seguir enlaces */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph: título y descripción para redes sociales */}
        <meta property="og:title" content="Mi App" />
        <meta property="og:description" content="Descripción de la app para redes sociales" />
        <meta property="og:image" content="URL-de-tu-imagen.jpg" />
        <meta property="og:url" content="https://miapp.com" />
        <meta property="og:type" content="website" />

        {/* Favicon y iconos */}
        <link rel="icon" href="/logoMat.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body suppressHydrationWarning={true}>
        {/* Contenedor principal de la app */}
        <div id="app-root" data-client="true">
          {children}
        </div>

        {/* Scripts de React Router */}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <>
    <Header />

    <Outlet />

  </>
}
