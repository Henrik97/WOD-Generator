import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import vuetify from './plugin/vuetify'
import router from './router'


const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app')
