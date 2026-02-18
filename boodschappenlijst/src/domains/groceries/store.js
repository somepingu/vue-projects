import { ref, computed } from 'vue';

// State
const groceries = ref([
  { name: 'Rijst', price: 1.00, quantity: 1, id: 0 },
  { name: 'Broccoli', price: 0.99, quantity: 2, id: 1 },
  { name: 'Koekjes', price: 1.20, quantity: 3, id: 2 },
  { name: 'Noten', price: 2.99, quantity: 4, id: 3 }
]);

// Getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = (id) => computed(() => groceries.value.find(grocery => grocery.id == id));

// Actions
export const addGrocery = (grocery) => groceries.value.push(grocery);

export const updateGrocery = (updatedGrocery) => {
  const index = groceries.value.findIndex(grocery => grocery.id == updatedGrocery.id);
  if (index != -1) {
    groceries.value[index] = updatedGrocery;
  }
}

export const removeGrocery = (groceryToRemove) => {
  const index = groceries.value.findIndex(arrayGrocery => arrayGrocery.id == groceryToRemove.id);
    if (index != -1) {
    groceries.value.splice(index, 1);
  }
}

export const generateGroceryId = () => {
  let id = 0;
  while (groceries.value.some(arrayGrocery => arrayGrocery.id === id)) {
    id++;
  }
  return id;
}