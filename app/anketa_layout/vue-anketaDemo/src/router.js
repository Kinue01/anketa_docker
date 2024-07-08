import { createMemoryHistory, createRouter } from 'vue-router'

import Home from "./components/HomePageComponent.vue"
import QuestionComponent from './components/QuestionComponent.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/questions/:p', component: QuestionComponent },
]

export default createRouter({
    history: createMemoryHistory(),
    routes,
})