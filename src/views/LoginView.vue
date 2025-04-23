<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-slate-900 to-slate-700">
        <div class="flex flex-col md:flex-row bg-[#fafafa] shadow-lg rounded-lg w-4/5 md:w-full max-w-7xl">
            <div class="hidden md:block md:w-1/2">
                Image
            </div>

            <div class="w-full md:w-1/2 p-8">
                <h2 class="font-bold text-2xl mb-6 text-left">Login</h2>
                <form action="">
                    <InputField label="Username" name="username" v-model="username" placeholder="Enter Username" />
                    <InputField label="Password" type="password" name="password" v-model="password"
                        placeholder="Enter Password" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import InputField from '@/components/InputField.vue';

export default {
    components: {
        InputField,
    },
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        handleSubmit() {
            console.log('Email:', this.username);
            console.log('Password:', this.password);
        },
    },
};
</script>