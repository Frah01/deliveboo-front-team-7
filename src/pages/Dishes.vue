<script>
import axios from 'axios';
import { store } from '../store.js'
import AppCart from '../components/AppCart.vue';

export default {
    components: {
        AppCart
    },
    data() {
        return {
            store,
            dishes: []
        }
    },
    mounted() {
        axios.get(`${store.baseUrl}/api/restaurants/${this.$route.params.slug}`).then((response) => {
            if (response.data.success) {
                this.dishes = response.data.results;
                this.loading = false;
            }
        })
    },
    methods: {
        aggiungiQuantita(dish) {
            dish.quantita++;
        },
        togliQuantita(dish) {
            dish.quantita--;
        }
    },
}
</script>
<template lang="">
    <div class="container" >
        <div class="row" >
            <div class="col-6 " >
                <h2 class="mt-5 text-center">MENU'</h2>
                <div class="my-5 mx-2 d-flex justify-content-center" v-for="(dish, index) in this.dishes" :key="index">
                    <div class="card  shadow" style="width: 18rem;">
                        <div v-if="dish.immagine.includes('dish_image')">
                            <img class="card-img-top" :src="`${store.baseUrl}/storage/${dish.immagine}`">
                        </div>
                        <div v-else>
                            <img class="card-img-top" :src="dish.immagine != null ? `${dish.immagine}`: 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'" alt="">
                        </div>
                        <div class="p-3">
                            <p class="fw-semibold text-center">Nome Piatto: {{ dish.nome }}</p>
                            <p class="text-center fw-semibold">Prezzo: {{ dish.prezzo }}&euro;</p>
                            <div class="d-flex justify-content-around align-items-center">
                                <button class="btn btn-sm indietro text-white fw-semibold mx-2" :disabled="dish.quantita == 0" @click="togliQuantita(dish)"><i class="fa-solid fa-minus"></i></button>
                                <span class="fw-semibold">{{ dish.quantita }}</span>
                                <button class="btn btn-sm indietro text-white fw-semibold mx-2" @click="aggiungiQuantita(dish)"><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 " >
                <AppCart :dishes="this.dishes"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>