<script>

import AppJumbo from '../components/AppJumbo.vue';
import Recensioni from '../components/Recensioni.vue';
import ListaRistoranti from '../components/ListaRistoranti.vue';
import AppFooter from '../components/AppFooter.vue';


export default {
    name: 'HomePage',
    components: {
        AppJumbo,
        Recensioni,
        ListaRistoranti,
        AppFooter,
    }
}
</script>
<template lang="">
    <AppJumbo></AppJumbo>
    <ListaRistoranti></ListaRistoranti>
    <Recensioni></Recensioni>
    <AppFooter></AppFooter>
</template>
<style lang="scss" scoped>
.main {
    width: 100%;
}
</style>