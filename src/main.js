import { createApp } from 'vue'
import App from './App.vue'
import plugins from './plugins'

const app = createApp(App)

app.use(plugins)

// mount application
app.mount('#app')
