# Johan.Dev — Portfolio Web

> 🇪🇸 [Español](#-español) · 🇬🇧 [English](#-english)

---

## 🇪🇸 Español

### Descripción

**Johan.Dev** es un sitio web de portafolio personal desarrollado con Vue 3.
Presenta proyectos destacados, trayectoria profesional, cursos y certificaciones,
y una sección de contacto. La interfaz es completamente **bilingüe (Español / Inglés)**
y cuenta con **modo claro y oscuro**, ambos conmutables desde la barra de navegación.

### Características

- 🌗 **Modo claro / oscuro** — intercambia el tema de PrimeVue en caliente y recuerda tu preferencia (`localStorage`).
- 🌐 **Internacionalización (i18n)** — todos los textos disponibles en Español e Inglés, con cambio instantáneo y persistente.
- 🧩 **Componentes de PrimeVue** — barra de herramientas, botones e iconos consistentes.
- 🎨 **Estilos con Tailwind CSS** — diseño rápido mediante clases utilitarias.
- ⚡ **Vite** — arranque y recarga en caliente muy veloces.

### Stack tecnológico

| Herramienta | Uso |
|-------------|-----|
| [Vue 3](https://vuejs.org/) | Framework de UI (Composition API, `<script setup>`) |
| [Vite](https://vite.dev/) | Bundler y servidor de desarrollo |
| [PrimeVue 3](https://primevue.org/) | Librería de componentes (tema Lara) |
| [PrimeIcons](https://primevue.org/icons/) | Iconografía |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilos utilitarios |
| [vue-i18n](https://vue-i18n.intlify.dev/) | Internacionalización ES / EN |
| [Font Awesome](https://fontawesome.com/) | Iconos adicionales |

### Estructura del proyecto

```
mi-web/
├── public/
│   ├── johan-dev-logo.png       # Logo de marca (favicon y toolbar)
│   └── themes/                  # Temas de PrimeVue servidos como CSS (light/dark)
│       ├── lara-light-blue/
│       └── lara-dark-blue/
├── src/
│   ├── assets/
│   │   └── images/              # Imágenes (banner, etc.)
│   ├── components/
│   │   ├── MyToolbar.vue                # Barra de navegación: idioma + tema
│   │   ├── MyPresentation.vue           # Presentación / hero
│   │   ├── MyProjects.vue               # Proyectos destacados
│   │   ├── MyJourney.vue                # Trayectoria (timeline)
│   │   ├── MyCoursesCertifications.vue  # Cursos y certificaciones (con filtro)
│   │   ├── MyContactForm.vue            # Contacto: redes + formulario
│   │   └── MyFooter.vue                 # Pie de página
│   ├── App.vue
│   ├── main.js                  # Registro de Vue, PrimeVue e i18n
│   ├── i18n.js                  # Diccionarios ES / EN
│   └── style.css               # Tailwind
├── index.html                   # Incluye <link id="theme-link"> para el modo oscuro
└── package.json
```

### Requisitos

- Node.js `^22.18.0` o `>=24.12.0`
- npm

### Instalación y uso

```sh
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo (recarga en caliente)
npm run dev

# 3. Compilar para producción
npm run build

# 4. Previsualizar el build de producción
npm run preview
```

### Cómo funcionan las funciones clave

**Modo oscuro** — El `index.html` incluye `<link id="theme-link">` apuntando al tema
claro. Al pulsar el botón de tema se cambia su `href` al tema oscuro (o viceversa) y
la preferencia se guarda en `localStorage`.

**Idioma** — `vue-i18n` mantiene un `locale` reactivo. Los textos se leen con `$t("clave")`
desde `src/i18n.js`, y el botón de idioma alterna entre `es` y `en` guardando la elección.

---

## 🇬🇧 English

### Overview

**Johan.Dev** is a personal portfolio website built with Vue 3.
It showcases featured projects, professional experience, courses and certifications,
and a contact section. The interface is fully **bilingual (Spanish / English)** and
supports **light and dark mode**, both toggled from the navigation bar.

### Features

- 🌗 **Light / dark mode** — hot-swaps the PrimeVue theme and remembers your choice (`localStorage`).
- 🌐 **Internationalization (i18n)** — all copy available in Spanish and English, switched instantly and persisted.
- 🧩 **PrimeVue components** — consistent toolbar, buttons and icons.
- 🎨 **Tailwind CSS styling** — fast design via utility classes.
- ⚡ **Vite** — very fast startup and hot reload.

### Tech stack

| Tool | Purpose |
|------|---------|
| [Vue 3](https://vuejs.org/) | UI framework (Composition API, `<script setup>`) |
| [Vite](https://vite.dev/) | Bundler and dev server |
| [PrimeVue 3](https://primevue.org/) | Component library (Lara theme) |
| [PrimeIcons](https://primevue.org/icons/) | Iconography |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [vue-i18n](https://vue-i18n.intlify.dev/) | ES / EN internationalization |
| [Font Awesome](https://fontawesome.com/) | Additional icons |

### Project structure

```
mi-web/
├── public/
│   ├── johan-dev-logo.png       # Brand logo (favicon and toolbar)
│   └── themes/                  # PrimeVue themes served as CSS (light/dark)
│       ├── lara-light-blue/
│       └── lara-dark-blue/
├── src/
│   ├── assets/
│   │   └── images/              # Images (banner, etc.)
│   ├── components/
│   │   ├── MyToolbar.vue                # Navigation bar: language + theme
│   │   ├── MyPresentation.vue           # Hero / intro
│   │   ├── MyProjects.vue               # Featured projects
│   │   ├── MyJourney.vue                # Experience (timeline)
│   │   ├── MyCoursesCertifications.vue  # Courses and certifications (with filter)
│   │   ├── MyContactForm.vue            # Contact: social links + form
│   │   └── MyFooter.vue                 # Footer
│   ├── App.vue
│   ├── main.js                  # Vue, PrimeVue and i18n registration
│   ├── i18n.js                  # ES / EN dictionaries
│   └── style.css               # Tailwind
├── index.html                   # Includes <link id="theme-link"> for dark mode
└── package.json
```

### Requirements

- Node.js `^22.18.0` or `>=24.12.0`
- npm

### Setup and usage

```sh
# 1. Install dependencies
npm install

# 2. Development server (hot reload)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

### How the key features work

**Dark mode** — `index.html` includes `<link id="theme-link">` pointing to the light
theme. Clicking the theme button swaps its `href` to the dark theme (or back) and the
preference is saved to `localStorage`.

**Language** — `vue-i18n` keeps a reactive `locale`. Copy is read with `$t("key")` from
`src/i18n.js`, and the language button toggles between `es` and `en`, persisting the choice.

---

_Hecho por / Made by **Johan** · Johan.Dev_
