<script setup>
const description = "Estudiante de Ingeniería de Software apasionado por el desarrollo de software y el aprendizaje continuo. Actualmente fortaleciendo mis conocimientos en Python, Java, C#, JavaScript, Vue, Angular, SQL, MongoDB y Docker, mientras desarrollo proyectos que me permiten aplicar buenas prácticas y seguir creciendo como desarrollador. Siempre estoy abierto a nuevos retos, tecnologías y oportunidades de aprendizaje. Puedes contactarme en j.contreras.granados.04@gmail.com."
const name = "Johan Alexis Contreras Granados"
const university = "Universidad Peruana de Ciencias Aplicadas"
const location = 'Lima, Perú'
</script>

<template>
  <div class="flex justify-center grid grid-flow auto-rows-auto mx-auto gap-4 max-w-5xl">
    <img src="../assets/images/banner.png" alt="Profile Image" class=" w-75 h-48 mx-auto mb-4 ml-0 mt-5" />
    <span class="text-green-500 font-mono text-xs text-primary tracking-[0.3em] flex">
        <span class="pi pi-code "></span>
        ESTUDIANTE DE INGENIERIA DE SOFTWARE
    </span>
    <h1 class="leading-tight font-bold text-4xl mt-5 tracking-light sm:text-6xl">{{ name }}</h1>
    <div>
      <p class="mt-5 max-w-4xl text-base text-muted-foreground sm:text-lg font-mono">{{ description }}</p>
    </div>
    <div class="mt-7 flex flex-wrap gap-3">
        <Button icon="pi pi-download" label="Descargar CV" class="border-1 border-green-500 text-white bg-green-500 inline-flex items-center justify-center gap-2 font-medium cursor-pointer font-mono rounded-md h-9 px-4 py-2 text-xs"></Button>
        <Button icon="pi pi-envelope" label="Contáctame" class="border-1 border-gray-500 rounded-md hover:bg-blue-500 hover:text-white inline-flex items-center justify-center gap-2 font-medium cursor-pointer font-mono h-9 px-4 py-2 text-xs"></Button>
    </div>
    <div class="mt-7 flex flex-wrap items-center gap-3 font-mono text-sm text-muted-foreground">
        <span icon="pi pi-download" class="inline-flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5">
            <span class="pi pi-graduation-cap"></span>
            {{ university }}
        </span>
        <span class="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5">
            <span class="pi pi-map-marker"></span>
            {{ location }}
        </span>
    </div>
  </div>
</template>

<style scoped></style>
