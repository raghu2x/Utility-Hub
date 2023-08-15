import { createApp } from 'vue'
import './css/app.css'
import './css/style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// mount application
app.mount('#app')
