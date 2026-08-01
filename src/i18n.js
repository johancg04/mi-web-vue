import { createI18n } from "vue-i18n";

const messages = {
  es: {
    nav: {
      proyectos: "Proyectos destacados",
      trayectoria: "Trayectoria",
      cursos: "Cursos y Certificaciones",
      contacto: "Contáctame",
    },
    botones: {
      cv: "CV",
      oscuro: "Oscuro",
      claro: "Claro",
    },
  },
  en: {
    nav: {
      proyectos: "Featured Projects",
      trayectoria: "Experience",
      cursos: "Courses & Certifications",
      contacto: "Contact me",
    },
    botones: {
      cv: "CV",
      oscuro: "Dark",
      claro: "Light",
    },
  },
};

export const i18n = createI18n({
  legacy: false, // necesario para Composition API / <script setup>
  locale: localStorage.getItem("locale") || "es",
  fallbackLocale: "es",
  messages,
});
