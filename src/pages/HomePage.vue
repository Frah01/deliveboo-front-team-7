<script>

import RicercaCat from '../components/RicercaCat.vue';
import AppJumbo from '../components/AppJumbo.vue';
import ListaRistoranti from '../components/ListaRistoranti.vue';
export default {
    name: 'HomePage',
    components:{
        RicercaCat,
        AppJumbo, 
        ListaRistoranti,
    }
}
</script>
<template lang="">

<AppJumbo></AppJumbo>
     <div class="container">
            <div class="row" >
                <div class="col-12 mt-5">
                    <RicercaCat></RicercaCat>
                    <ListaRistoranti></ListaRistoranti>
                </div>
            </div>
        </div>
</template>
<style lang="">
    
</style>