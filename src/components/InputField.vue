<template>
    <div class="mb-4">
        <label :for="name" class="block text-sm font-medium text-gray-700 mb-1">{{ label }}</label>
        <input :type="type" :name="name" :id="name" :value="modelValue" @input="updateValue($event.target.value)"
            :placeholder="placeholder"
            class="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#725AC1] focus:border-[#725AC1] transition duration-200" />
        <div v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '',
        },
        modelValue: {
            type: String,
            default: '',
        },
        error: {
            type: String,
            default: '',
        },
    },
    methods: {
        updateValue(value) {
            this.$emit('update:modelValue', value);
        },
    },
};
</script>
