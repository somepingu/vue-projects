import {ref, computed} from 'vue';
import type { InventoryItem } from './models';

// State
const items = ref([
    {id: 0, name: 'Rijst', actualAmount: 555, minimumAmount: 100},
    {id: 1, name: 'Broccoli', actualAmount: 200, minimumAmount: 50},
    {id: 2, name: 'Koekjes', actualAmount: 300, minimumAmount: 150},
    {id: 3, name: 'Noten', actualAmount: 60, minimumAmount: 200},
    {id: 4, name: 'Pasta', actualAmount: 5, minimumAmount: 100},
    {id: 5, name: 'Tomatensaus', actualAmount: 150, minimumAmount: 50},
    {id: 6, name: 'Kipfilet', actualAmount: 250, minimumAmount: 100},
    {id: 7, name: 'Melk', actualAmount: 500, minimumAmount: 200},
    {id: 8, name: 'Eieren', actualAmount: 0, minimumAmount: 200},
    {id: 9, name: 'Appels', actualAmount: 100, minimumAmount: 50},
]);

// Getters
export const getAllItems = computed(() => items.value);
export const getItemById = (id: number) => computed(() => items.value.find((item: InventoryItem) => item.id == id));

// Actions
export const addItem = (item: InventoryItem) => items.value.push(item);

export const updateItem = (updatedItem: InventoryItem) => {
    const index = items.value.findIndex((item: InventoryItem) => item.id == updatedItem.id);
    if (index != -1) {
        items.value[index] = updatedItem;
    }
};

export const removeItem = (itemToRemove: InventoryItem) => {
    const index = items.value.findIndex((arrayItem: InventoryItem) => arrayItem.id == itemToRemove.id);
    if (index != -1) {
        items.value.splice(index, 1);
    }
};

export const generateItemId = () => {
    let id = 0;
    while (items.value.some((arrayItem: InventoryItem) => arrayItem.id === id)) {
        id++;
    }
    return id;
};
