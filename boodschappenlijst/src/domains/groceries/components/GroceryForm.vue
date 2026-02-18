<!-- Form for adding new groceries -->

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
    groceries: {
        type: Array,
        required: true
    },
    grocery: {
        type: Object,
        required: true
    },
    mode: {
        type: String,
        required: true,
        validator: (value) => {
            return ['add', 'edit'].includes(value);
        }
    }
});

const buttonLabels = {
  add: 'Toevoegen',
  edit: 'Bijwerken',
};

const emit = defineEmits(['addGrocery', 'updateGrocery']);

const emitEvent = () => {
    if (props.mode === 'edit') {
        emit('updateGrocery', props.grocery);
    } else if (props.mode === 'add') {
        emit('addGrocery', props.grocery);
    }
    router.push('/') // Return to overview
};

</script>

<template>
    <h2>Grocery Form</h2>
    <form @submit.prevent="emitEvent">
        <div class="form-group">
            <label>Productnaam</label>
            <input v-model="grocery.name" type="text" placeholder="Productnaam" required />
        </div>
        <div class="form-group">
            <label>Prijs</label>
            <input v-model.number="grocery.price" type="number" step="0.01" placeholder="Prijs" required />
        </div>
        <div class="form-group">
            <label>Aantal</label>
            <input v-model.number="grocery.quantity" type="number" min="1" placeholder="Aantal" required />
        </div>
        <div class="form-group">
            <label>&nbsp;</label>
            <button type="submit">{{ buttonLabels[props.mode] }}</button>
        </div>
    </form>
</template>

<style scoped>
form {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group label {
  text-align: center;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group button {
  padding: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.form-group button {
  background-color: #f5f5f5;
  cursor: pointer;
}

.form-group button:hover {
  background-color: #e0e0e0;
}
</style>