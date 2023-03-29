<script>

import RicercaCat from '../components/RicercaCat.vue';
import AppJumbo from '../components/AppJumbo.vue';
import Recensioni from '../components/Recensioni.vue';
import ListaRistoranti from '../components/ListaRistoranti.vue';

export default {
    name: 'HomePage',
    components: {
        RicercaCat,
        AppJumbo,
        Recensioni,
        ListaRistoranti,
    }
}
</script>
<template lang="">
    <AppJumbo></AppJumbo>
    <RicercaCat></RicercaCat>
    <router-link :to="{ name: 'dishes'}" class="login-button">
        VAI A ELENCO PIATTI
    </router-link>
    <ListaRistoranti></ListaRistoranti>
    <Recensioni></Recensioni>
</template>
<style lang="">
    
</style>