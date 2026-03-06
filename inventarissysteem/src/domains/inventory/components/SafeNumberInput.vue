<script setup lang="ts">
interface Props {
    modelValue: number;
    min?: number;
    max?: number;
    label?: string;
}

const props = withDefaults(defineProps<Props>(), {
    min: 0,
    max: Infinity,
    label: '',
});

const emit = defineEmits(['update:modelValue']);

const handleValidation = (event: Event) => {
    const target = event.target as HTMLInputElement;

    // check if target is a safeNumberInput
    if (!target.dataset.safeNumberInput) {
        return;
    }

    let value = parseInt(target.value); // swap to parseFloat if you want to allow decimals

    // 1. Check for empty or non-number inputs
    if (isNaN(value)) {
        value = props.min;
    }

    // 2. Clamp the value between min and max
    const clampedValue = Math.min(Math.max(value, props.min), props.max);

    // 3. Sync back to the parent
    emit('update:modelValue', clampedValue);

    // 4. Force the actual DOM element to show the clamped value
    // (In case the parent value didn't "change" from the previous valid state)
    target.value = clampedValue.toString();
};
</script>

<template>
    <div class="numeric-input-wrapper">
        <label v-if="label">{{ label }}</label>
        <input
            type="number"
            data-safe-number-input="true"
            :value="modelValue"
            :min="min"
            :max="max"
            step="any"
            @blur="handleValidation"
            @keyup.enter="handleValidation"
            class="base-input"
        />
    </div>
</template>

<style scoped>
.base-input:invalid {
    outline: 2px solid #ff4444;
}
.numeric-input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
</style>
