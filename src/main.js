import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Custom styles
import './assets/styles/custom.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import { useAuthStore } from '@/stores/auth.js'
const authStore = useAuthStore()
authStore.initAuth()

app.mount('#app')

// Initialize scroll-triggered reveal animations
import { initGlobalRevealAnimations } from '@/composables/useReveal.js'
initGlobalRevealAnimations()