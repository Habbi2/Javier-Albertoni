import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with your user ID (public key)
emailjs.init("V9EF7LaENOBJNwFaS")

createApp(App).use(router).mount('#app')