<script>
import { store } from '../store'
export default {
    name: "CardRestaurant",
    props: {
        restaurant: Object,
    },
    data() {
        return {
            store
        }
    }

}
</script>

<template lang="">
    <router-link :to="{ name: 'dishes', params: { slug: restaurant.slug }}" class="text-decoration-none">
        <div class="card-restaurant">
            <div class="card h-100">
                <div class="h-200 position-relative">
                    <div class="card-img-top ">
                        <img :src="restaurant.immagine != null ? `${restaurant.immagine}`: 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'" :alt="restaurant.nome" class="img-fluid">
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title"><strong>{{ restaurant.nome}}</strong></h5>
                    <div class="d-flex">
                        <em><strong>categoria:</strong></em>
                        <span class="badge" v-if="restaurant.categories" v-for="(category, item) in restaurant.categories" :key="item">
                            {{category.nome}}
                        </span>
                        <span v-else>Nessuna categoria selezionata</span>
                    </div>
                </div>
            </div>  
        </div>
    </router-link> 
</template>

<style lang="scss" scoped>
.h-200 {
    height: 200px;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}

.card-img-top {
    object-fit: cover;
    height: 200px;
}

.card-restaurant {
    margin-top: 1rem;
}

.badge {
    background-color: #00CDBE;
    margin: 0 5px 0 5px;
    padding: 5px
}
</style>