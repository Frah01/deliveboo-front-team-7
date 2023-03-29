<script>

import RicercaCat from '../components/RicercaCat.vue';
import AppJumbo from '../components/AppJumbo.vue';
import ListaRistoranti from '../components/ListaRistoranti.vue';

export default {
    name: 'HomePage',
    components: {
        RicercaCat,
        AppJumbo, 
        ListaRistoranti,
    }
}
</script>
<template lang="">
    <AppJumbo></AppJumbo>
    <RicercaCat></RicercaCat>
    <ListaRistoranti></ListaRistoranti>
    <router-link :to="{ name: 'dishes'}" class="login-button">
        VAI A ELENCO PIATTI
    </router-link>
</template>
<style lang="">
    
</style>