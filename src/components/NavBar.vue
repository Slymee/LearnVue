<template>
    <nav class="flex justify-between items-center p-4 bg-gray-100 sticky top-0 transition-opacity duration-300" :style="{ opacity: navbarOpacity }">
        <div class="text-lg font-bold">Logo</div>
        <div>
            <ul class="flex space-x-4">
                <li><router-link to="/" class="hover:text-blue-500 cursor-pointer">Home</router-link></li>
                <li><router-link to="/about" class="hover:text-blue-500 cursor-pointer">About</router-link></li>
                <li><router-link to="/login" class="hover:text-blue-500 cursor-pointer">Login</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            navbarOpacity: 1, // Start with full opacity
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // Check if the user has scrolled down
            this.navbarOpacity = window.scrollY > 0 ? 0.75 : 1; // Set opacity to 0.75 if scrolled down, otherwise 1
        },
    },
};
</script>