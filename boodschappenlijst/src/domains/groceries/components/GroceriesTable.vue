<script setup>
import { computed } from 'vue'

const props = defineProps({
    list: {
        type: Array,
        required: true
    },
});

const subTotal = computed(() => {
  const subTotalList = props.list.map(item => item.price * item.quantity);
  return subTotalList;

});

const total = computed(() => {
  return subTotal.value.reduce((total, subTotal) => total + subTotal, 0)
});
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
      <tr v-for="(item, index) in props.list" :key="index">
        <td>{{ item.name }}</td>
        <td class="price">€{{ item.price.toFixed(2) }}</td>
        <td><input v-model.number="item.quantity" type="number" min="0" /></td>
        <td class="price">€{{ subTotal[index].toFixed(2) }}</td>
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
</style>
