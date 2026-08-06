<script setup>
    const proyectos = [
        {
            'nombre': 'SpotGo',
            'descripcion': "SpotGo es una solución diseñada para optimizar la gestión de estacionamientos con alta demanda mediante la organización eficiente de los espacios según el tipo de usuario, reduciendo el tiempo que los conductores emplean en encontrar un lugar disponible y mejorando tanto la experiencia de los usuarios como la eficiencia del personal administrativo.",
            'tecnologias': ["Java", "SpringBoot", "Angular", "TypeScript", "PostgresSql"],
            'enlace': "https://github.com/axiora-upc"
        },
        {
            'nombre': 'Mi web',
            'descripcion': "Simulacion de servicios de encomiendas - backend, este sitio web presenta mi perfil como estudiante de Ingeniería de Software, donde comparto mi formación académica, habilidades técnicas, proyectos desarrollados y los conocimientos que he adquirido durante mi proceso de aprendizaje.",
            'tecnologias': ["JavaScript", "Vue", "TailwindCss", "PrimeVue3"],
            "enlace": "https://github.com/johancg04/mi-web-vue"
        }
    ]
</script>

<template>
    <div class="mx-auto max-w-5xl scroll-mt-16 px-6 pb-4">
        <div class="border-t border-border pt-12">
            <h2 class="text-2xl font-semibold tracking-tight sm:text-3xl">{{ $t('proyectos.titulo') }}</h2>
            <p class="mt-3 max-w-2xl text-sm text-muted-foreground">{{ $t('proyectos.enunciado') }}</p>
        </div>
        <div class="flex flex-wrap justify-center gap-7 mt-5">
            <a v-for="proyecto in proyectos" :href="proyecto.enlace" target="_blank">
                <Card style="width: 25rem; overflow: hidden" class="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:card-glow">
                    <template #title>{{ proyecto.nombre }}</template>
                    <template #content>
                        <p class="mt-2 text-sm text-muted-foreground">
                            {{ proyecto.descripcion }}
                        </p>
                    </template>
                    <template #footer>
                        <div class="grid grid-cols-3 gap-2 mt-3">
                            <Chip class="px-2.5 py-0.5 justify-center font-normal text-[11px]" :label="tecnologia" v-for="tecnologia in proyecto.tecnologias"/>
                        </div>
                        <div class="mt-4 text-xs text-primary text-green-500">
                            <span class="font-mono">Ver repositorio</span>
                            <span class="ml-1">-></span>
                        </div>
                    </template>
                </Card>
            </a>
        </div>
    </div>
</template>

<style scoped>

</style>