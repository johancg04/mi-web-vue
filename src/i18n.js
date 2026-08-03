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
    presentacion: {
      etiqueta: "ESTUDIANTE DE INGENERIA DE SOFTWARE",
      descripcion: "Estudiante de Ingeniería de Software apasionado por el desarrollo de software y el aprendizaje continuo. Actualmente fortaleciendo mis conocimientos en Python, Java, C#, JavaScript, Vue, Angular, SQL, MongoDB y Docker, mientras desarrollo proyectos que me permiten aplicar buenas prácticas y seguir creciendo como desarrollador. Siempre estoy abierto a nuevos retos, tecnologías y oportunidades de aprendizaje. Puedes contactarme en j.contreras.granados.04{'@'}gmail.com.",
      botonesPresentation: {
        descargarCV: "Descargar CV",
        contactame: "Contáctame",
      },
      universidad: "Universiddad Peruana de Ciencias Aplicadas",
      detalles:{
        certificaciones: "Certificaciones",
        instituciones: "Instituciones",
        ultimoAnio: "Último año",
        universidadDetail: "Universidad",
      },
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
    presentacion: {
      etiqueta: "SOFTWARE ENGINEERING STUDENT",
      descripcion: "Software Engineering student passionate about software development and continuous learning. I am currently strengthening my skills in Python, Java, C#, JavaScript, Vue, Angular, SQL, MongoDB, and Docker, while working on projects that allow me to apply best practices and continue growing as a developer. I am always open to new challenges, technologies, and learning opportunities. You can contact me at j.contreras.granados.04{'@'}gmail.com.",
      botonesPresentation: {
        descargarCV: "Download CV",
        contactame: "Contact me",
      },
      universidad: "Peruvian University of Applied Sciences",
      detalles:{
        certificaciones: "Certifications",
        instituciones: "Institutions",
        ultimoAnio: "Last year",
        universidadDetail: "University",
      },
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") || "es",
  fallbackLocale: "es",
  messages,
});
