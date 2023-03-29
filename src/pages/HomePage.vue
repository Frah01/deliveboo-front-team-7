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
    <ListaRistoranti></ListaRistoranti>
    <Recensioni></Recensioni>
</template>
<style lang="">
    
</style>