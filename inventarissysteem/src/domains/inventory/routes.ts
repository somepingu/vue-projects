import OverviewView from './pages/Overview.vue';
import TestView from './pages/Testview.vue';
import AddItemView from './pages/AddItemView.vue';
import OrderView from './pages/OrderView.vue';
import EditView from './pages/EditView.vue';

export const inventoryRoutes = [
    {path: '/', component: OverviewView},
    {path: '/test', component: TestView},
    {path: '/add-item', component: AddItemView},
    {path: '/order', component: OrderView},
    {path: '/edit/:id', component: EditView, props: (route: any) => ({id: Number(route.params.id)})}, // TO FIX: route should not be any
];
