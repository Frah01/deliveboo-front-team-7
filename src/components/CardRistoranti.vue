<script>
import { store } from '../store'
export default {
    name: "CardRestaurant",
    props:{
        restaurant: Object,
    }, 
    data(){
        return{
            store
        }
    }
    
}
</script>
<template lang="">
    <div>
        <div class="card d-flex flex-wrap">
        <div class="card-body">
            <div class="card-img-top d-flex justify-content-center">
                <img :src="restaurant.immagine != null ? `${restaurant.immagine}`: 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'" :alt="restaurant.nome" class="img-fluid">
            </div>
            <div class="card-title">
                <h3>{{ restaurant.nome}}</h3>
                <div class="d-flex">
                    <strong>categoria:  </strong>
                    <p class="" v-if="restaurant.categoria">
                        {{ restaurant.categoria.nome}}
                    </p>
                    <p v-else>
                        nessuna categoria selezionata
                    </p>
                </div>

               
               

            </div>
           

            
        </div>
        
    </div>
    </div>
</template>

<style lang="scss">
    .card-img-top {
    object-fit: cover;
    height: 200px;
}
</style>