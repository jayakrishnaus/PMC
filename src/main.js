import './assets/main.css'
import App from './App.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import { loadFonts } from './plugins/webfontloader'
import router from "./router"
import store from "./store/index"
import {createApp} from "vue"

loadFonts()

createApp(App)
.use(Vuetify)
.use(router)
.use(store)
.mount("#app")
