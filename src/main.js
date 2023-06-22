import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { register } from 'swiper/element/bundle'
import VueScrollTo from 'vue-scrollto'

import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(register)
app.use(VueScrollTo)

router.isReady().then(() => app.mount('#app'))
