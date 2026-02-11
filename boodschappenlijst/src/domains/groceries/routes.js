import OverviewView from './pages/Overview.vue'
import CreateView from './pages/Create.vue'
import EditView from './pages/Edit.vue'

export const groceryRoutes = [
  { path: '/', component: OverviewView },
  { path: '/create', component: CreateView },
  { path: '/edit', component: EditView },
]

// export const groceryRoutes = [
//   { path: '/', component: OverviewView },
//   { path: '/create', component: CreateView },
// ]