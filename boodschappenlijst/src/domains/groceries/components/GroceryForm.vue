<script setup>

const props = defineProps({
    groceries: {
        type: Array,
        required: true
    },
    grocery: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['addGrocery']);

const emitEvent = () => {
    emit('addGrocery', props.grocery);
};

</script>

<template>
    <h2>Grocery Form</h2>
    <form @submit.prevent="emitEvent">
        <input v-model="grocery.name" type="text" placeholder="Productnaam" required />
        <input v-model.number="grocery.price" type="number" step="0.01" placeholder="Prijs" required />
        <input v-model.number="grocery.quantity" type="number" min="1" placeholder="Aantal" required />
        <button type="submit">Toevoegen</button>
    </form>
</template>
