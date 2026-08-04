import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import { i18n } from "./i18n";

import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './style.css'
import Card from 'primevue/card';
import Chip from 'primevue/chip';

const app = createApp(App);

app.use(PrimeVue);
app.use(i18n);
app.component('Button', Button);
app.component('Toolbar', Toolbar);
app.component('Card', Card);
app.component('Chip', Chip)
app.mount('#app')
