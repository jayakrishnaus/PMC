import './assets/main.css'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import { loadFonts } from './plugins/webfontloader'
import router from "./router"
import store from "./store/index"
import {createApp} from "vue"

loadFonts()

createApp(App)
.use(vuetify)
.use(router)
.use(store)
.mount("#app")
