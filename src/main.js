import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// ref: https://next.vuetifyjs.com/en/getting-started/installation/#manual-steps
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// icons
// import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify).mount('#app')
