<script>

import AppJumbo from '../components/AppJumbo.vue';
import Recensioni from '../components/Recensioni.vue';
import ListaRistoranti from '../components/ListaRistoranti.vue';



export default {
    name: 'HomePage',
    components: {
        AppJumbo,
        Recensioni,
        ListaRistoranti,
    }
}
</script>
<template lang="">
    <AppJumbo></AppJumbo>
    <ListaRistoranti></ListaRistoranti>
    <Recensioni></Recensioni>
</template>
<style lang="scss" scoped>
.main {
    width: 100%;
}
</style>