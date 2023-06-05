import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'

import './assets/main.css'

const vue = createApp(App)

vue.use(autoAnimatePlugin)

vue.mount('#app')
