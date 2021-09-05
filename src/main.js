import { createApp } from 'vue';
import App from './App.vue';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

import Primevue from "primevue/config";
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const app = createApp(App);

app.use(Primevue);
app.component('Button', Button);
app.component('InputText', InputText);

app.mount('#app')
