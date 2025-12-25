import '@/core/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './core/router'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
