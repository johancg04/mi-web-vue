<script setup>
    const name = "Johan Alexis Contreras Granados"
    const location = 'Lima, Perú'
    const coursesLabels = [
    "Python",
    "C++",
    "Algoritmos",
    "POO",
    "HTML / CSS",
    "Web Scraping",
    "Desarrollo Web",
    "Vue / Angular",
    "SQL / MongoDB",
    "Docker"
    ]
</script>

<template>
  <div class="flex justify-center grid grid-flow auto-rows-auto mx-auto gap-4 max-w-5xl">
    <img src="../assets/images/banner.png" alt="Profile Image" class=" w-75 h-48 mx-auto mb-4 ml-0 mt-3" />
    <span class="text-green-500 font-mono text-xs text-primary tracking-[0.3em] flex">
        <span class="pi pi-code "></span>
        {{ $t('presentacion.etiqueta') }}
    </span>
    <h1 class="leading-tight font-bold text-4xl mt-2 tracking-light sm:text-6xl">{{ name }}</h1>
    <p class="max-w-5xl text-base text-muted-foreground sm:text-lg font-mono">{{ $t('presentacion.descripcion') }}</p>
    <div class="mt-3 flex flex-wrap gap-3">
        <Button icon="pi pi-download" :label="$t('presentacion.botonesPresentation.descargarCV')" class="border-1 border-green-500 text-white bg-green-500 inline-flex items-center justify-center gap-2 font-medium cursor-pointer font-mono rounded-md h-9 px-4 py-2 text-xs"></Button>
        <Button icon="pi pi-envelope" :label="$t('presentacion.botonesPresentation.contactame')" class="border rounded-md hover:bg-blue-500 hover:text-white inline-flex items-center justify-center gap-2 font-medium cursor-pointer font-mono h-9 px-4 py-2 text-xs"></Button>
    </div>
    <div class="mt-3 flex flex-wrap items-center gap-3 font-mono text-sm text-muted-foreground">
        <span icon="pi pi-download" class="inline-flex items-center gap-2 rounded-md border border-border bg-card px-2 py-1.5">
            <span class="pi pi-graduation-cap"></span>
            {{ $t('presentacion.universidad') }}
        </span>
        <span class="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1.5">
            <span class="pi pi-map-marker"></span>
            {{ location }}
        </span>
    </div>
    <div class="mt-2 gap-2 font-mono flex flex-wrap">
        <div class="border inline-flex items-center gap-2 rounded-md px-2.5 py-0.5 text-xs bg-secondary/40 text-foreground/80" v-for="label in coursesLabels" :key="label">
            {{ label }}
        </div>
    </div>
    <div class="mt-3 gap-8 flex items-center justify-center">
        <div class="border rounded-md inline-flex flex-col gap-2 px-8 py-6">
            <span class="font-mono text[11px] text-muted-foreground uppercase">
                {{ $t('presentacion.detalles.certificaciones') }}
            </span>
            <span class="text-green-500 font-semibold mt-1 text-2xl text-primary">
                9
            </span>
        </div>
        <div class="border rounded-md inline-flex flex-col gap-2 px-8 py-6 font-mono">
            <span class="font-mono text[11px] text-muted-foreground uppercase">
                {{ $t('presentacion.detalles.instituciones') }}
            </span>
            <span class="text-green-500 font-semibold mt-1 text-2xl text-primary">
                4
            </span>
        </div>
        <div class="border rounded-md inline-flex flex-col gap-2 px-8 py-6">
            <span class="font-mono text[11px] text-muted-foreground uppercase">
                {{ $t('presentacion.detalles.ultimoAnio') }}
            </span>
            <span class="text-green-500 font-semibold mt-1 text-2xl text-primary">
                2026
            </span>
        </div>
        <div class="border rounded-md inline-flex flex-col gap-2 px-8 py-6">
            <span class="font-mono text[11px] text-muted-foreground uppercase">
                {{ $t('presentacion.detalles.universidadDetail') }}
            </span>
            <span class="text-green-500 font-semibold mt-1 text-2xl text-primary">
                UPC
            </span>
        </div>
    </div>
  </div>
</template>

<style scoped></style>
