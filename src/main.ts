import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './language'
import ripple from '@/directives/ripple'
import './index.css'

import './assets/style/index.scss'

createApp(App)
    .use(store)
    .use(router)
    .use(i18n)
    .directive('ripple', ripple)
    .mount('#app')
