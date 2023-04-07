<script>
import axios from 'axios';
import { store } from '../store.js'
import AppCart from '../components/AppCart.vue';

const STORAGE_KEY = 'deliveboo-storage-key';
const SLUG_RESTAURANT = 'slug-restaurant';
const STORAGE_RESTAURANT_ID = 'storage-restaurant-id';
const CURRENT_RESTAURANT_ID = 'current-restaurant-id';

export default {
    components: {
        AppCart
    },
    data() {
        return {
            store,
            dishes: [],
            storage: '',
            current_restaurant_id: '',
            storage_restaurant_id: '',
        }
    },
    created() {
        this.handleScroll();
    },
    mounted() {
        localStorage.setItem(SLUG_RESTAURANT, this.$route.params.slug);
        store.slug_restaurant = localStorage.getItem(SLUG_RESTAURANT);

        axios.get(`${store.baseUrl}/api/restaurants/${this.$route.params.slug}`).then((response) => {
            if (response.data.success) {
                if (window.localStorage.length == 0) {
                    this.dishes = response.data.results;
                    this.loading = false;
                }
                else {
                    let storage = (JSON.parse(localStorage.getItem(STORAGE_KEY)));
                    this.dishes = response.data.results;
                    this.loading = false;

                    for (let i in storage) {
                        if (storage[i].restaurant_id == this.dishes[i]['restaurant_id']) {
                            this.dishes = storage;
                        }
                    }
                }
            }
        })
    },
    updated() {
        this.storage = (JSON.parse(localStorage.getItem(STORAGE_KEY)));

        for (let index in this.storage) {
            localStorage.setItem(STORAGE_RESTAURANT_ID, this.storage[index].restaurant_id);
            this.storage_restaurant_id = localStorage.getItem(STORAGE_RESTAURANT_ID);
        }

        for (let index in this.dishes) {
            localStorage.setItem(CURRENT_RESTAURANT_ID, this.dishes[index].restaurant_id);
            this.current_restaurant_id = localStorage.getItem(CURRENT_RESTAURANT_ID);
        }
    },
    methods: {
        aggiungiQuantita(dish) {
            dish.quantita++;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.dishes));
        },
        togliQuantita(dish) {
            dish.quantita--;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.dishes));
        },
        handleScroll() {
            window.scrollTo(0, 0);
        },
    },
}
</script>
<template lang="">
    <div class="container-fluid">
        <div class="row mx-5">
            <div class="col-lg-8 col-sm-12 col-md-12" >
                <div class="card shadow my-5 mx-5 ">
                    <div class="card-header bg-header">
                        <h2 class=" text-center text-white m-0">Il nostro men&ugrave;</h2>
                    </div>
                    <div class="card-body" >
                        <div class=" d-flex justify-content-center flex-wrap">
                            <div class="my-3 mx-2 d-flex " v-for="(dish, index) in this.dishes" :key="index">
                                <div class="card backg-body shadow" style="width: 14rem;">
                                    <div  v-if="dish.immagine.includes('dish_image')">
                                        <img class="card-img-top img-height " :src="`${store.baseUrl}/storage/${dish.immagine}`">
                                    </div>
                                    <div class="position-relative" v-else>
                                        <p class="text-center fw-semibold position-badge badge back-badge shadow">{{ dish.prezzo }}&euro;</p>
                                        <img class="card-img-top img-height" :src="dish.immagine != null ? `${dish.immagine}`: 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'" alt="">
                                    </div>
                                    <div class="p-3 h-100 d-flex flex-column justify-content-between">
                                        <p class="fw-semibold text-center">{{ dish.nome }}</p>
                                        <p class="text-center font-dish-cards"><span class="fw-semibold">Ingredienti:</span> <span class="fst-italic ">{{ dish.ingredienti }}</span></p>
                                        <div v-if="dish.disponibile == false">
                                            <span class="badge-disponibile"> Prodotto Terminato! </span>
                                        </div>
                                        <div class="d-flex justify-content-around" v-if="dish.disponibile == true">
                                            <button class="btn btn-sm indietro text-white fw-semibold mx-2 aggiungi-carrello-fs" :disabled="this.current_restaurant_id != this.storage_restaurant_id && this.storage_restaurant_id != ''" @click="aggiungiQuantita(dish)"><i class="fa-solid fa-lg fa-cart-plus me-2"></i>Aggiungi al carrello</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-12" >
                <AppCart :dishes="this.dishes"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.badge-disponibile {
    position: absolute;
    bottom: 65%;
    left: 7%;
    color: white;
    rotate: 340deg;
    text-align: center;
    border-radius: 10px;
    font-size: 20px;
    background-color: rgb(177, 26, 26);
    width: 85%;
    margin: 0 auto;
    padding: 10px;
}

.flow {
    height: 50vh;
    overflow-y: auto;
}

.img-height {
    height: 150px;
    object-fit: cover;
}

.aggiungi-carrello-fs {
    font-size: 10px;
}

.back-badge {
    background-color: rgb(61, 146, 4);
    ;
}

.position-badge {
    position: absolute;
    bottom: -10px;
    right: 10px;
    margin-bottom: 0;
    font-size: 14px;
}

button:disabled,
button[disabled] {
    border: 1px solid #999999;
    background-color: rgb(85, 72, 72);
}

.font-dish-cards {
    font-size: 12px;
}

.bg-header {
    background-color: #00CDBE;
}

.backg-body {
    background-color: rgba(209, 235, 153, 0.25);
}
</style>