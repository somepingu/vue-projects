<!-- Component for displaying the inventory table. -->

<!-- REMEMBER TO CHECK THAT NO GROCERY THINGS REMAIN -->

<script setup lang="ts">
import {useRouter} from 'vue-router';
import type {InventoryItem} from '../models';
import type {PropType} from 'vue';
import SafeNumberInput from './SafeNumberInput.vue';
const router = useRouter();

const props = defineProps({
    items: {
        type: Array as PropType<InventoryItem[]>,
        required: true,
    },
});

// const subTotal = computed(() => {
//     const subTotalList = props.items.map(item => item.price * item.quantity);
//     return subTotalList;
// });

// const total = computed(() => {
//     return subTotal.value.reduce((total, subTotal) => total + subTotal, 0);
// });

// const emit = defineEmits(['removeGrocery']);

// const emitEvent = groceryToRemove => {
//     emit('removeGrocery', groceryToRemove);
// };
</script>

<template>
    <h2>Inventaris</h2>
    <table class="grocery-table">
        <thead>
            <tr>
                <th>Productnaam</th>
                <th>Huidig aantal</th>
                <th>Minimum aantal</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in props.items" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.actualAmount }}</td>
                <!-- REMOVE LATER BUT KEEP FOR NOW FOR DEBUGGING -->
                <SafeNumberInput v-model="item.actualAmount" :min="0" />
                <td>{{ item.minimumAmount }}</td>
                <td><button @click="() => router.push(`/edit/${item.id}`)">Bewerken</button></td>
                <!-- <td><button @click="emitEvent(item)">Verwijderen</button></td>  -->
            </tr>
        </tbody>
    </table>
</template>

<style scoped></style>
