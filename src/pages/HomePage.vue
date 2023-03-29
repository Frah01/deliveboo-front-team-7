<script>

import RicercaCat from '../components/RicercaCat.vue';
import AppJumbo from '../components/AppJumbo.vue';

export default {
    name: 'HomePage',
    components: {
        RicercaCat,
        AppJumbo
    }
}
</script>
<template lang="">
    <AppJumbo></AppJumbo>
    <RicercaCat></RicercaCat>
    <router-link :to="{ name: 'dishes'}" class="login-button">
        VAI A ELENCO PIATTI
    </router-link>
</template>
<style lang="">
    
</style>