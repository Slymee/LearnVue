<template>
    <NavBar/>
    <BannerComponent/>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import BannerComponent from '@/components/BannerComponent.vue';

export default {
    components: {
        NavBar, BannerComponent,
    },
};
</script>