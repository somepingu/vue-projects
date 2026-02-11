import { createMemoryHistory, createRouter } from 'vue-router'
import routes from './routes'
// import groceryRoutes from '../domains/groceries/routes'



export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router

// const routes = [
//   ...groceryRoutes,
// ]

// export const router = createRouter({
//   history: createMemoryHistory(),
//   routes,
// });