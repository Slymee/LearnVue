<template>
    <nav class="flex justify-between items-center p-4 bg-gray-100">
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

</script>