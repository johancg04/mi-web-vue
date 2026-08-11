<script setup>
 import { ref } from "vue";

 const value = ref("");

 const profiles = [
    {
        name: "GITHUB",
        description: "github.com/johancg04",
        link: "https://github.com/johancg04",
        icon: "pi pi-github"
    },
    {
        name: "LINKEDIN",
        description: "linkedin.com/in/johan-alexis-contreras-granados-abb06b341/",
        link: "https://www.linkedin.com/in/johan-alexis-contreras-granados-abb06b341/",
        icon: "pi pi-linkedin"
    },
        {
        name: "INSTAGRAM",
        description: "@johancontreras2004",
        link: "https://www.instagram.com/johancontreras2004/",
        icon: "pi pi-instagram"
    },
        {
        name: "CORREO",
        description: "j.contreras.granados.04@gmail.com",
        link: "mailto:j.contreras.granados.04@gmail.com",
        icon: "pi pi-envelope"
    }
 ]
</script>

<template>
    <div class="mx-auto max-w-5xl scroll-mt-16 px-6 pb-4 mb-15">
        <div class="mb-5">
            <div class="text-2xl font-semibold tracking-tight sm:text-3xl pb-4 border-t border-border pt-12">
                Contactame
            </div>
            <p class="text-sm text-muted-foreground">
                ¿Colaboración, prácticas o dudas técnicas? Escríbeme por cualquiera de estos canales o déjame un mensaje.
            </p>
            <div class="flex flex-wrap justify-center gap-7 mt-5">
                <a v-for="profile in profiles" :href="profile.link" target="_blank">
                    <Card style="width: 25rem; overflow: hidden" class="group flex h-full flex-col rounded-xl border border-border bg-card p-3 transition-all hover:-translate-y-0.5 hover:border-green-500 hover:card-glow">
                        <template #title>
                            <span class="text-lg">{{ profile.name }}</span>
                        </template>
                        <template #header>
                            <span :class="profile.icon" class="text-lg text-primary block text-center"></span>
                        </template>
                        <template #content>
                            <p class="mt-2 text-xs text-muted-foreground">
                                {{ profile.description }}
                            </p>
                        </template>
                    </Card>
                </a>
            </div>
        </div>
        <div class="mt-15">
            <form class="border border-border px-15 py-10 rounded-md">
                <p class="font-mono mb-7">ENVIAME UN MENSAJE</p>
                <div class="grid gap-6 mb-6 sm:grid-cols-2">
                    <div>
                    <label for="first_name" class="block mb-2.5 text-sm font-medium text-heading">Nombre</label>
                    <input type="text" id="first_name"
                        class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                        placeholder="Johan" required />
                    </div>
                    <div>
                    <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Correo</label>
                    <input type="email" id="email"
                        class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                        placeholder="usuario@gmail.com" required />
                    </div>
                </div>
                <div class="mb-6">
                    <label for="message" class="block mb-2.5 text-sm font-medium text-heading">Mensaje</label>
                    <Textarea
                        v-model="value"
                        id="message"
                        rows="5"
                        class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                    />
                </div>
                <button type="submit"
                    class="bg-green-500 box-border border border-green-500 hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none inline-flex items-center gap-2 text-white">
                    <span class="pi pi-send"></span>
                    Enviar mensaje
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>