<script setup>

</script>

<template>
    <div class="mx-auto max-w-5xl scroll-mt-16 px-6 pb-4">
        <div class="border-t border-border pt-12">
            <h2 class="text-2xl font-semibold tracking-tight sm:text-3xl">{{ $t('proyectos.titulo') }}</h2>
            <p class="mt-3 max-w-2xl text-sm text-muted-foreground">{{ $t('proyectos.enunciado') }}</p>
        </div>
        <div class="flex justify-center gap-10 mt-5">
            <Card style="width: 25rem; overflow: hidden" class="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:card-glow">
                <template #title>Example 1</template>
                <template #subtitle>Example subtitle</template>
                <template #content>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </template>
                <template #footer>
                    <div class="flex gap-3 mt-1">
                        <Chip label="Apple" icon="pi pi-apple" />
                        <Chip label="Apple" icon="pi pi-apple" />
                        <Chip label="Apple" icon="pi pi-apple" />
                    </div>
                    <span>Ver repositorio</span>
                </template>
            </Card>
            <Card style="width: 25rem; overflow: hidden" class="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:card-glow">
                <template #title>Example 2</template>
                <template #subtitle>Example subtitle</template>
                <template #content>
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                        quas!
                    </p>
                </template>
                <template #footer>
                    <div class="flex gap-3 mt-1">
                        <Chip label="Apple" icon="pi pi-apple" />
                        <Chip label="Apple" icon="pi pi-apple" />
                        <Chip label="Apple" icon="pi pi-apple" />
                    </div>
                    <span>Ver repositorio</span>
                </template>
            </Card>
        </div>
    </div>
</template>

<style scoped>

</style>