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
        <div class="card card-restaurant">
                <div class=" position-relative">
                    <div class="card-img-top h-200">
                        <div v-if="restaurant.immagine == null">
                            <img :src="'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'" :alt="restaurant.nome">
                        </div>
                        <div v-else>
                            <img :src="restaurant.immagine.includes('restaurant_images') ? 
                            `${store.baseUrl}/storage/${restaurant.immagine}`:
                            `${restaurant.immagine}`"
                            :alt="restaurant.nome">
                        </div>
                    </div>
                </div>
                <div class="card-body position-relative">
                    <div class="d-flex flex-wrap align-items-center">
                        <span class="badge" v-if="restaurant.categories != ''" v-for="(category, item) in restaurant.categories" :key="item">
                            <span>{{category.nome}}</span>
                        </span>
                        <span v-else>Nessuna categoria selezionata</span>
                    </div>
                    <h5 class="card-title title"><strong>{{ restaurant.nome}}</strong></h5>
                    <p class="indirizzo">{{restaurant.indirizzo}}</p>
                    <p class="numero">{{restaurant.telefono}}</p>
                </div>
        </div>
    </router-link> 
</template>

<style lang="scss" scoped>
.card-restaurant {
    width: 400px;
    height: 385px;
    border-radius: 20px;
    margin: 20px auto;
    box-shadow: 2px 2px 10px 2px #D0EB99;

    .h-200 {
        height: 200px;

        img {
            border-top-right-radius: 20px;
            border-top-left-radius: 20px;
            height: 200px;
            width: 100%;
            object-fit: cover;
        }

        .card-img-top {
            width: 100%;
            object-fit: cover;
            height: 200px;
        }
    }

    .card-body {
        padding: 10px;
        height: calc(385px - 200px);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        background: rgba(209, 235, 153, 0.25);

        .title {
            margin-top: 12px;
            font-size: 18px;
        }

        .indirizzo {
            padding: 0;
            margin: 0;
            font-size: 12px;
            color: rgba(0, 0, 0, 0.75);
        }

        .numero {
            padding: 0;
            margin: 0;
            font-size: 15px;
            color: rgba(24, 8, 97, 0.75);
        }

        .badge {
            background-color: #00CDBE;
            margin: 5px;
            padding: 6px;
            border-radius: 10px;
        }
    }

}

@media screen and (max-width:1700px) {
    .card-restaurant {
        width: 320px;
    }
}

@media screen and (max-width:1390px) {
    .card-restaurant {
        width: 280px;
    }
}

@media screen and (max-width:1200px) {
    .card-restaurant {
        width: 320px;
    }
}

@media screen and (max-width:952px) {
    .card-restaurant {
        width: 250px;
    }
}

@media screen and (max-width:767px) {
    .card-restaurant {
        width: 470px;
    }
}

@media screen and (max-width:692px) {
    .card-restaurant {
        width: 350px;
    }
}

@media screen and (max-width:530px) {
    .card-restaurant {
        width: 250px;
    }
}

@media screen and (max-width:400px) {
    .card-restaurant {
        width: 200px;
    }
}
</style>