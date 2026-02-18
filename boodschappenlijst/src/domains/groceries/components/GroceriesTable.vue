<!-- Page displaying all groceries -->

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
    groceries: {
        type: Array,
        required: true
    },
});

const subTotal = computed(() => {
  const subTotalList = props.groceries.map(item => item.price * item.quantity);
  return subTotalList;

});

const total = computed(() => {
  return subTotal.value.reduce((total, subTotal) => total + subTotal, 0)
});

const emit = defineEmits(['removeGrocery']);

const emitEvent = (groceryToRemove) => {
  emit('removeGrocery', groceryToRemove);
};
</script>

<template>
  <h2>Boodschappenlijst</h2>
  <table class="grocery-table">
    <thead>
      <tr>
        <th>Product</th>
        <th>Prijs</th>
        <th>Aantal</th>
        <th>Subtotaal</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in props.groceries" :key="item.id">
        <td>{{ item.name }}</td>
        <td class="price">€{{ item.price.toFixed(2) }}</td>
        <td>{{ item.quantity }}</td>
        <td class="price">€{{ subTotal[index].toFixed(2) }}</td>
        <td><button @click="() => router.push(`/edit/${item.id}`)">Bewerken</button></td>
        <td><button @click="emitEvent(item)">Verwijderen</button></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="total-label">Totaal:</td>
        <td class="total-price">€{{  total.toFixed(2) }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped>
.grocery-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.5rem;
  margin-left: 6rem;
}
.grocery-table th,
.grocery-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}
.grocery-table thead th {
  background: #f5f5f5;
}
.grocery-table input[type="number"] {
  width: 4rem;
}
.grocery-table .price {
  text-align: right;
}
.grocery-table .total-label,
.grocery-table .total-price {
  text-align: right;
  font-weight: 700;
}

.grocery-table button {
  padding: 4px 8px;
  font-size: 0.875rem;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
}

.grocery-table button:hover {
  background-color: #e0e0e0;
}

.grocery-table td button {
  width: 100%;
}

.grocery-table td:has(button) {
  padding: 2px;
  width: auto;
  max-width: 90px;
}
</style>
