import OverviewView from './pages/Overview.vue'
import CreateView from './pages/Create.vue'
import EditView from './pages/Edit.vue'

const routes = [
  { path: '/', component: OverviewView },
  { path: '/create', component: CreateView },
  { path: '/edit', component: EditView },
]

export default routes