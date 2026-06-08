# Trabajo Práctico N° 3 : React
**Materia:** Programación Visual  
**Grupo:** 19  

## Integrantes
* Mamani, Elias Alberto (Layout y Documentación) - GitHub: @EliasAM-apu
* Farfan, Elio Agustin (Estructura de Componentes) - GitHub: @agustinfarfan90
* Armeya, Efraín (Estado Global y Git) - GitHub: @ArmeyaEfraain

## Descripción del Proyecto
Esta aplicación es un Dashboard de Gestión de Proyectos desarrollado con **React** y **Vite**. En esta segunda etapa, nos enfocamos en la arquitectura de componentes y la comunicación fluida de datos.

## Tecnologías Utilizadas
* **React**
* **Vite** 
* **JavaScript**
* **CSS** 

## Conceptos Clave Aplicados (Parte 2)

### 1. Comunicación entre Componentes (Props)
Implementamos un flujo de datos unidireccional. El componente principal `App.jsx` actúa como el "cerebro", enviando información a través de **props** a los componentes hijos como `ListaProyectos` y `ProyectoCard`.

### 2. Levantamiento de Estado (Lifting State Up)
Para permitir que la acción de "Ver Detalle" en una tarjeta (`ProyectoCard`) abra un componente hermano (`DetalleProyecto`), elevamos el estado al ancestro común más cercano (`App.jsx`).

### 3. Desestructuración de Objetos
Siguiendo las buenas prácticas, utilizamos desestructuración tanto en los argumentos de los componentes como en el manejo de estados, logrando un código más limpio y legible.

### 4. Renderizado Dinámico y Keys
La lista de proyectos se genera dinámicamente mediante el método `.map()`, asignando una `key` única a cada elemento para optimizar el rendimiento del Virtual DOM de React.

## Actualización: TP3 - Parte 3 (Efectos Secundarios y Optimización)

En esta tercera iteración, el **Grupo 19** se enfocó en el ciclo de vida de los componentes, la sincronización con sistemas externos y la refactorización de la UI. 

### 1. Refactorización y Responsabilidad Única
Se extrajo la lógica de creación de proyectos hacia un nuevo componente independiente `<FormularioProyecto />`. Este componente gestiona su propio estado local controlado (inputs) y se comunica con el componente padre mediante una función callback (`onAgregar`), elevando el estado del nuevo objeto creado de forma limpia.

### 2. Control de Efectos Secundarios (`useEffect` y `useRef`)
Implementamos un componente `<RegistroActividad />` para visualizar la fecha de la última modificación en la lista.
* **Sincronización:** Utilizamos `useEffect` con un arreglo de dependencias atado exclusivamente a la longitud del estado `proyectos`, capturando el objeto `Date` solo ante altas o bajas.
* **Control de Montaje Inicial:** Para cumplir con la restricción de no mostrar el registro al cargar la página por primera vez, implementamos el hook `useRef` como una bandera mutable (`flag`). Esto nos permitió saltar el primer renderizado sin provocar re-renderizados innecesarios.

### 3. Aislamiento del Filtro (Estado Derivado)
Al detectar que la función de búsqueda alteraba el estado original y disparaba el efecto de la fecha, aplicamos el patrón de **Estado Derivado**. Eliminamos la mutación del estado `proyectos` durante la búsqueda; en su lugar, filtramos el arreglo original dinámicamente durante la fase de renderizado. Esto garantizó el aislamiento total del filtro, evitando efectos secundarios no deseados.

##  Actualización: Trabajo Práctico N° 3 - Parte 4 (Refactorización a SPA y Material UI)

En esta última fase del proyecto, el Dashboard de Gestión Educativa fue migrado exitosamente de una interfaz estática a una **Single Page Application (SPA)**. Se implementaron cambios profundos en la arquitectura de carpetas, el enrutamiento y el diseño visual para cumplir con los estándares modernos de desarrollo en React.

###  Nuevas Tecnologías Implementadas
* **React Router DOM (v6):** Implementado para gestionar la navegación del lado del cliente sin recargar la página.
* **Material UI (MUI):** Adoptado como framework principal de componentes para modernizar la interfaz gráfica de usuario (UI).

###  Reestructuración Arquitectónica
El código fuente (`src/`) fue reorganizado aplicando el principio de separación de responsabilidades:
* `/views`: Contiene los componentes de nivel de página (pantallas completas) enrutables.
* `/components`: Contiene los bloques de construcción reutilizables y aislados.

###  Funcionalidades y Vistas Agregadas
1. **Enrutamiento Dinámico:**
   * La navegación principal se gestiona a través de componentes `<Link>` en el menú superior, permitiendo transiciones instantáneas.
   * Se implementó el hook `useParams` para la vista `<DetalleProyecto />` (`/proyectos/:id`). Esto permite que el estado de la vista dependa directamente de la URL, permitiendo al usuario compartir el enlace o recargar la página (F5) sin perder el contexto del proyecto.
2. **Nuevas Vistas (Views):**
   * `<Dashboard />` (`/` o `/dashboard`): Pantalla de bienvenida construida con contenedores de MUI que exhibe tarjetas de métricas del sistema.
   * `<PerfilUsuario />` (`/perfil`): Pantalla que muestra elegantemente la información académica y el rol del integrante en el equipo utilizando el componente `Paper` de MUI.
3. **Refactorización Visual (MUI):**
   * **Tarjetas:** Se migró la estructura base a componentes `<Card>` y `<CardContent>`.
   * **Formularios:** Se reemplazaron los inputs nativos por el componente `<TextField>` (incluyendo soporte para selectores).
   * **Notificaciones:** El registro de actividad inferior ahora utiliza el componente `<Alert>` para integrarse armónicamente con el diseño.
   * **Distribución:** Se aplicó el sistema de rejilla (`<Grid>`) para lograr un diseño responsivo en la galería de proyectos.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
