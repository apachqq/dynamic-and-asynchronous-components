import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import components from '@/components'

// App -> AppNews -> AppNewsList

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

// global

app.mount('#app')
