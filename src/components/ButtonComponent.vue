<template>
    <div>
        <button
        class="block w-full border border-gray-300 rounded-md p-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-transparent text-[#725AC1] hover:bg-[#f0f0f0] hover:text-white"
        @click="handleClick">
            <slot>{{ text }}</slot>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props: {
        text: {
            type: String,
            default: 'Click Me',
        },
        color: {
            type: String,
            default: '#3358ff',
        },
        isDisabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
            handleClick() {
                if (!this.isDisabled) {
                    this.$emit('click');
                }
            },
        },
};
</script>

<style scoped>
button {
  position: relative;
  display: inline-block;
  padding: 8px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #725AC1;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.5s;
  border: 2px solid #725AC1;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #725AC1;
}

button:hover {
  color: white;
  box-shadow: inset 0 -100px 0 0 #725AC1;
}

button:active {
  transform: scale(0.9);
}
</style>