// dovršiti u vue3 vježbi, ne radi u vue2
// https://www.youtube.com/watch?v=ar1fJECxbyU 2:50

import { createApp } from "vue";
import App from "./App.vue";
import MyPlugin from "./MyPlugin";

const app = createApp(App)

app.use(MyPlugin)

app.mount('#app')