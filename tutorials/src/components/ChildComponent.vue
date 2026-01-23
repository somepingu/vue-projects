<template>
    <p>--------------------[start of child component]--------------------</p>
    <div>
        <h3>{{ message }}</h3>
    </div>

    <div>
        <button @click="emitEvent">Explode</button>
    </div>

    <div>
        <button @click="emitEvent2">Un-Explode</button>
    </div>

    <div>
        <input v-model="flexMessage" placeholder="taipen hiero" />
    </div>

    <div>
        <button @click="changeFlex">Change the flex message</button>
    </div>
    <p>--------------------[end of child component]--------------------</p>
</template>

<script setup>
defineProps({
    message: String,
});

const emit = defineEmits(['updateMessage']);

const emitEvent = () => {
    emit('updateMessage', 'BOOM');
};

const emitEvent2 = () => {
    emit('updateMessage', 'Unexploded bomb');
};

const changeFlex = () => {
    flexMessage.value = 'it change';
};

const flexMessage = defineModel();
</script>
