<script setup>
    import { ref, computed } from "vue";

    const certifications = [
        {
            nombre: 'Python-Fundamentos de Programacion',
            enlace: 'https://drive.google.com/file/d/15eNXdiS7vP4vg1OZBxFegkiiXsaxlm2W/view?usp=sharing',
            universidad: 'Universidad Nacional de Ingenieria',
            anio: '2023'
        },
        {
            nombre: 'Algoritmos y estrutura de datos avanzado',
            enlace: 'https://drive.google.com/file/d/1d7EK-mH89rQIMcWsiH3YiOAdgAR3k8TE/view?usp=sharing',
            universidad: 'Universidad Nacional de Ingenieria',
            anio: '2025'
        },
        {
            nombre: 'Algoritmos y estrutura de datos basico',
            enlace: 'https://drive.google.com/file/d/1C4rd3sCCF8ULIT0bdXBLE1XzVH4Ksf9-/view?usp=sharing',
            universidad: 'Universidad Nacional de Ingenieria',
            anio: '2025'
        },
        {
            nombre: 'C++ Basico',
            enlace: 'https://drive.google.com/file/d/1m__JAOrBuzCTglMYpsjHP3u9WDD4z83Z/view?usp=sharing',
            universidad: 'Platzi',
            anio: '2024'
        },
        {
            nombre: 'Curso definitivo de HTML y CSS',
            enlace: 'https://drive.google.com/file/d/1enprx3kEFu1GdHia7jbgtS4KlV9uE83F/view?usp=sharing',
            universidad: 'Platzi',
            anio: '2024',
        },
        {
            nombre: 'Desarrollo Web con Python',
            enlace: 'https://drive.google.com/file/d/1mYDyqWqCBN1cfIjxiWycfbNPC_qjays5/view?usp=sharing',
            universidad: 'Pontificia Universidad Catolica del Peru',
            anio: '2023',
        },
        {
            nombre: 'Web Scraping con Python',
            enlace: 'https://drive.google.com/file/d/1e-c1VCjp_Un5CVM-OTIfuc0Z1FtqDBHE/view?usp=sharing',
            universidad: 'Pontificia Universidad Catolica del Peru',
            anio: '2025',
        },
        {
            nombre: 'Fundamentos de programacion orientada a objetos',
            enlace: 'https://drive.google.com/drive/u/0/folders/1fgYnsugjmoxAHVYdsEF6ZXSZm0V9M6RP',
            universidad: 'Universidad Nacional de Ingenieria',
            anio: '2025',
        },
        {
            nombre: 'Programming for Everybody (Getting Started with Python)',
            enlace: 'https://drive.google.com/file/d/1K8zAxV8ZgzqGbcZgZyl_rx9uDJPKMd-D/view?usp=sharing',
            universidad: 'University of Michigan - Coursera',
            anio: '2025',
        }
    ]

    const institutions = []

    for (let i = 0; i < certifications.length; i++) {
        let existe = false

        for (let j = 0; j < institutions.length; j++) {
            if (institutions[j] == certifications[i].universidad) {
                existe = true
                break
            }
        }

        if (!existe) {
            institutions.push(certifications[i].universidad)
        }
    }

    const filtroActivo = ref("Todas")

    function seleccionar(institucion) {
        filtroActivo.value = institucion
    }

    const certificacionesFiltradas = computed(() =>
        filtroActivo.value === "Todas"
            ? certifications
            : certifications.filter(c => c.universidad === filtroActivo.value)
    )

</script>

<template>
    <div class="mx-auto max-w-5xl scroll-mt-16 px-6 pb-12">
        <div class="text-2xl font-semibold tracking-tight sm:text-3xl pb-4 border-t border-border pt-12">
            <span>Cursos y Certificaciones</span>
        </div>
        <div class="mt-2 flex flex-wrap gap-2">
            <button class="cursor-pointer ml-2" @click="seleccionar('Todas')">
                <Chip
                    label="Todas"
                    class="px-3 py-1 justify-center font-normal text-[11px]"
                    :class="filtroActivo === 'Todas' ? 'bg-green-500 text-white' : ''"
                />
            </button>
            <button
                class="cursor-pointer ml-2"
                v-for="institution in institutions"
                :key="institution"
                @click="seleccionar(institution)"
            >
                <Chip
                    :label="institution"
                    class="px-3 py-1 justify-center font-normal text-[11px]"
                    :class="filtroActivo === institution ? 'bg-green-500 text-white' : ''"
                />
            </button>
        </div>
        <div class="flex flex-wrap justify-center gap-7 mt-5">
            <a v-for="certification in certificacionesFiltradas" :key="certification.enlace" :href="certification.enlace" target="_blank">
                <Card style="width: 25rem; overflow: hidden" class="group flex h-full flex-col rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-green-500 hover:card-glow">
                    <template #title>
                        <span class="text-lg">
                            {{ certification.nombre }} - {{ certification.anio }}
                        </span>
                    </template>
                    <template #content>
                        <p class="mt-2 text-sm text-muted-foreground">
                            {{ certification.universidad }}
                        </p>
                    </template>
                    <template #footer>
                        <div class="mt-3 text-xs text-primary text-green-500">
                            <span class="font-mono">Ver certificado</span>
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