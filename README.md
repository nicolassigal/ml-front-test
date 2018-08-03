# mercado libre front-end test 
para este ejercicio se solicito armar el buscador de productos, listar el resultado y navegar al detalle de un producto.

el Stack tecnológico elegido fue separado en dos proyectos:

## /api
NodeJS (v8.9.3)
ExpressJS

entre otras dependencias.

## /app
Para la app se utilizo **ReactJS SSR (Server Side Rendering)** para cumplir con las consignas de SEO , Performance y usabilidad.
de esta manera al usuario se le presenta toda la información de una sola vez.
en la carpeta **/src/client** se encuentra todo el código relativo a cada página, mientras que en la carpeta **/server**, se encuentra la lógica que va a tomar la ruta visitada y renderizar todo a un archivo de html estático que volverá como respuesta.
en la carpeta **/src/shared** se encuentra todo el código compartido (app universal) como los componentes, el archivo que contiene la información de donde se debe renderizar (hidratar) la app < App />, y archivo utils con funciones que pueden ser solicitadas tanto como desde el render-server como desde las páginas.

Aunque cada proyecto es generado de manera independiente para no ser dependientes, los comandos para correr cada proyectos son iguales.

Para correr el proyecto en modo Prod:
```
npm start
```
Para correr el proyecto en modo Dev:

```
npm run dev
```

Para correr los tests:

```
npm test
```

Para correr los test con coverage:

```
npm run coverage
```

## Autor
Nicolás Emiliano Sigal - 2018

