<script>

import RicercaCat from '../components/RicercaCat.vue';
import AppJumbo from '../components/AppJumbo.vue';
import Recensioni from '../components/Recensioni.vue';
import ListaRistoranti from '../components/ListaRistoranti.vue';
import AppFooter from '../components/AppFooter.vue';


export default {
    name: 'HomePage',
    components: {
        RicercaCat,
        AppJumbo,
        Recensioni,
        ListaRistoranti,
        AppFooter,
    }
}
</script>
<template lang="">
    <AppJumbo></AppJumbo>
    <RicercaCat></RicercaCat>
    <ListaRistoranti></ListaRistoranti>
    <Recensioni></Recensioni>
    <AppFooter></AppFooter>
</template>
<style lang="">
    
</style>