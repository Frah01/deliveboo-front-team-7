<script>

import RicercaCat from '../components/RicercaCat.vue';
import AppJumbo from '../components/AppJumbo.vue';
import AppDishes from '../components/AppDishes.vue';

export default {
    name: 'HomePage',
    components: {
        RicercaCat,
        AppJumbo,
        AppDishes
    }
}
</script>
<template lang="">
    <AppJumbo></AppJumbo>
    <RicercaCat></RicercaCat>
    <div class="container">
        <div class="row" >
            <div class="col-12 mt-5">
                <AppDishes/>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>