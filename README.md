## Facturación de Productos - Progressive Web App (PWA)
Este proyecto es una aplicación web de facturación convertida en una **Progressive Web App (PWA). Permite registrar clientes y productos, generar facturas y acceder a ellas incluso sin conexión a Internet.
## Funcionalidades
    -  Registro de clientes.
    -  Registro de productos con precio.
    -  Generación de facturas seleccionando cliente, producto y cantidad.
    -  Visualización de todas las facturas generadas.
    -  Funcionalidad offline (modo sin conexión) gracias a Service Worker.
    -  Instalación como app en móviles y computadoras.
## Estructura del Proyecto
    facturacion-pwa/
    ├── index.html
    ├── manifest.json
    ├── sw.js
    ├── icon-192.png
    ├── icon-512.png
    ├── /css/
    │ └── style.css
    └── /js/
    └── app.js
## Instalación Local
    1. Asegurarse de tener [Node.js](https://nodejs.org/) instalado.
    2. Abrir una terminal en la carpeta del proyecto.
    3. Ejecutar un servidor local:
        npx http-server
    4.	Abre tu navegador en http://localhost:8080 (o la URL indicada).
    5.	Verás un botón o ícono para instalar la app como una aplicación.

## Compatibilidad
•	Funciona en navegadores modernos con soporte para PWA:
Google Chrome
Microsoft Edge
Android WebView

## Archivos Clave
•	index.html: Interfaz principal de la aplicación.
•	app.js: Lógica de registro y visualización de datos en localStorage.
•	sw.js: Service Worker que cachea archivos para funcionamiento offline.
•	manifest.json: Define metadatos de la aplicación para su instalación.
•	icon-192.png y icon-512.png: Íconos de la app.

## Información General
Asignatura: Programación Web
Carrera: Tecnologías de la Información
Desarrollado por: Esteban Muñiz P.
