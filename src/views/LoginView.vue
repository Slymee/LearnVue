<template>
    <div class="flex flex-col items-center justify-center h-screen bg-[#cfcfcf]">
        <div class="flex flex-col md:flex-row bg-[#fafafa] shadow-lg rounded-lg w-4/5 md:w-full max-w-7xl">
            <div class="hidden md:block md:w-1/2">
                Image
            </div>

            <div class="w-full md:w-1/2 p-8">
                <h2 class="font-bold text-[#725AC1] text-2xl mb-6 text-center">Login Account</h2>
                <form @submit.prevent="handleSubmit">
                    <InputField label="Username" name="username" v-model="username" placeholder="Enter Username" :error="usernameError"/>
                    <InputField label="Password" type="password" name="password" v-model="password"
                        placeholder="Enter Password" :error="passwordError"/>

                    <ButtonComponent text="Login" color="#3358ff" 
                    @click="handleSubmit"
                    />

                    <div v-if="formError" class="text-red-500 text-center mt-4">{{ formError }}</div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import InputField from '@/components/InputField.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
    components: {
        InputField,
        ButtonComponent,
    },
    data() {
        return {
            username: '',
            password: '',
            usernameError: '',
            passwordError: '',
            formError: '',
        };
    },
    methods: {
        handleSubmit() {
            // Reset errors
            this.usernameError = '';
            this.passwordError = '';
            this.formError = '';

            // Validate inputs
            if (!this.username) {
                this.usernameError = 'Username is required.';
            }
            if (!this.password) {
                this.passwordError = 'Password is required.';
            }

            // If there are no errors, proceed with form submission
            if (!this.usernameError && !this.passwordError) {
                console.log('Username:', this.username);
                console.log('Password:', this.password);
                // Here you can add your login logic (e.g., API call)
            } else {
                this.formError = 'Please fix the errors above.';
            }
        },
    },
};
</script>