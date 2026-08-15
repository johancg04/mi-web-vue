<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

function toggleLanguage() {
  locale.value = locale.value === "es" ? "en" : "es";
  localStorage.setItem("locale", locale.value);
}

const labelButtonToolbarCenter = [
  { key: "nav.proyectos" },
  { key: "nav.trayectoria" },
  { key: "nav.cursos" },
  { key: "nav.contacto" },
];

const isDarkMode = ref(false);

function applyTheme(dark) {
  const link = document.getElementById("theme-link");
  if (!link) return;
  link.href = dark
    ? "/themes/lara-dark-blue/theme.css"
    : "/themes/lara-light-blue/theme.css";
  document.documentElement.classList.toggle("dark", dark);
}

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  applyTheme(isDarkMode.value);
  localStorage.setItem("darkMode", isDarkMode.value ? "1" : "0");
}

onMounted(() => {
  isDarkMode.value = localStorage.getItem("darkMode") === "1";
  applyTheme(isDarkMode.value);
});

const labelButtonToolbarEnd = [
  { id: "cv", icon: "pi pi-download" },
  { id: "lang", icon: "pi pi-language", command: toggleLanguage },
  { id: "theme", icon: "pi pi-moon", command: toggleDarkMode },
];

function iconoBoton(button) {
  if (button.id === "theme") return isDarkMode.value ? "pi pi-sun" : "pi pi-moon";
  return button.icon;
}

function labelBoton(button) {
  if (button.id === "cv") return t("botones.cv");
  if (button.id === "lang") return locale.value === "es" ? "EN" : "ES";
  if (button.id === "theme")
    return isDarkMode.value ? t("botones.claro") : t("botones.oscuro");
  return "";
}

</script>

<template>
  <Toolbar style="padding: 1rem 1rem 1rem 1rem">
    <template #start>
      <div class="inline-flex">
        <span class="inline-flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
          <img src="/johan-dev-logo.png" alt="Johan.Dev" class="h-7 w-auto" />
          Johan.Dev
        </span>
      </div>
    </template>
    <template #center>
      <div class="flex flex-wrap items-center justify-center gap-2">
        <Button
          v-for="button in labelButtonToolbarCenter"
          :key="button.key"
          :label="$t(button.key)"
          text plain
          class="rounded-md px-3 py-1.5 font-mono text-xs text-muted-foreground transitions-colors hover:bg-gray-200 hover:text-foreground focus:outline-none focus:ring-0"
          />
      </div>
    </template>

    <template #end>
      <div class="flex align-items-center gap-2">
        <Button
          v-for="button in labelButtonToolbarEnd"
          :key="button.id"
          :icon="iconoBoton(button)"
          :label="labelBoton(button)"
          severity="contrast"
          size="small"
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:bg-blue-400 hover:text-white h-8 px-2 sm:px-3 rounded-full font-mono text-xs"
          @click="button.command && button.command()"
        ></Button>
      </div>
    </template>
  </Toolbar>
</template>

<style scoped>

</style>
