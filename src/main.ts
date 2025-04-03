import App from './App.vue'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routes/router'
import './style.css'

const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPluginPersistedState)
app.use(router)
app.use(pinia)

app.mount('#app')
