//@ts-nocheck
<template>
    <ChildComponent :message="defPropTopText" @updateMessage="handleMessage" v-model="sharedMessage" />
    <p>current message: {{ mainMessage }}</p>
    <p>flexible message: {{ sharedMessage }}</p>
</template>

<script setup>
import {ref} from 'vue';
import ChildComponent from './components/ChildComponent.vue';

const mainMessage = ref('Bomb');

const handleMessage = newMessage => {
    mainMessage.value = newMessage;
};

const defPropTopText = 'I AM ABOVE ALL';

const sharedMessage = ref('you can edit this');
</script>
