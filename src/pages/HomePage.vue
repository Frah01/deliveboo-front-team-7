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
    <div class="main d-flex">
        <RicercaCat></RicercaCat>
        <ListaRistoranti></ListaRistoranti>
    </div>
  
    <Recensioni></Recensioni>
</template>
<style lang="scss" scoped>
    .main{
        width: 100%;
    }
</style>