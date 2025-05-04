<template>
    <NavBar/>

    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 class="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
        <p class="mt-4 text-lg text-gray-700">The page you are looking for does not exist.</p>
        <router-link to="/" class="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Go back to Home
        </router-link>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
    components: {
        NavBar,
    },
};
</script>