<script setup>
    const journey = [
        {
            'year': 2023,
            'title': 'Primeros pasos en programación',
            'description': 'Fundamentos de Python en la UNI y desarrollo web con Python en la PUCP.'
        },
                {
            'year': 2024,
            'title': 'Bases del desarrollo web y C++',
            'description': 'HTML, CSS y C++ básico; primeros proyectos personales publicados.'
        },
                {
            'year': 2025,
            'title': 'Algoritmos, estructuras de datos y POO',
            'description': 'Nivel básico y avanzado en la UNI, POO, web scraping y Coursera (University of Michigan).'
        },
                {
            'year': 2026,
            'title': 'Ingeniería de Software en la UPC',
            'description': 'Enfocado en backend, datos y buenas prácticas de ingeniería; abierto a prácticas.'
        }
    ]
</script>

<template>
    <div class="mx-auto max-w-5xl scroll-mt-16 px-6 pb-4 pt-10">
        <div class="text-2xl font-semibold tracking-tight sm:text-3xl pb-7 border-t border-border pt-12">
            <h2>Trayectoria</h2>
        </div>
        <div class="flex justify-center grid grid-flow auto-rows-auto mx-auto gap-4 max-w-5xl pb-12">
            <ol class="relative border-s border-green-500">                  
                <li class="mb-10 ms-4" v-for="value in journey">
                    <div class="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-green-500"></div>
                    <time class="text-sm font-mono leading-none text-body text-green-500">{{ value.year }}</time>
                    <h3 class="text-lg font-semibold text-heading my-2">{{ value.title }}</h3>
                    <p class="mb-4 text-base font-normal text-body">{{ value.description }}</p>
                </li>
            </ol>
        </div>
    </div>
</template>

<style scoped>
</style>