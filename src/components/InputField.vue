<template>
    <div class="mb-4">
        <label :for="name" class="block text-sm font-medium text-gray-700 mb-1">{{ label }}</label>
        <input :type="type" :name="name" :value="modelValue" @input="updateValue($event.target.value)"
            :placeholder="placeholder"
            class="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" />
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
    },
    methods: {
        updateValue(value) {
            this.$emit('update:modelValue', value);
        },
    },
};
</script>
