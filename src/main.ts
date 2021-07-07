import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/main.scss'
import mitter from 'mitt'
import PopTipAlert from './components/alerts/poptip'
import axios from 'axios'
import VueAxios from 'vue-axios'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $alert: any;
    }
  }

axios.defaults.baseURL = "https://api.glamour.seanbaraka.dev"
const app = createApp(App) //  created the app instance

const emitter = mitter() // mitter is used for the global event bus
app.config.globalProperties.$bus = emitter
app.use(VueAxios, axios)
app.use(PopTipAlert)
app.use(store).use(router).mount('#app')
