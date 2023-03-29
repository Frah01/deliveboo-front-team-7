<script>
import axios from 'axios';
import { store } from '../store.js'
export default {
    data() {
        return {
            store,
            dishes: []
        }
    },
    mounted() {
        // axios.get(`${store.baseUrl}/api/restaurants/${this.$route.params.slug}`).then((response) => {
        axios.get(`${store.baseUrl}/api/restaurants/ristorante-al-piave`).then((response) => {
            if (response.data.success) {
                this.dishes = response.data.results;
                this.loading = false;
            }
        })
    },
    computed: {

    },
    methods: {
        aggiungiQuantita(dish) {
            // const i = this.store.cart.findIndex(dish => dish.nome === dish.nome);

            dish.quantita++;
        },
        togliQuantita(dish) {

            dish.quantita--;
        },
        totaleQuantita(dish) {
            return dish.quantita * dish.prezzo;
        }
    },
}
</script>
        
<template lang="">
    <div>
        <div v-for="(dish, index) in this.dishes" :key="index">
            {{ dish.nome }}
            {{ dish.prezzo }}
            <span>{{ totaleQuantita(dish) }}</span>
            <div>
                <button :disabled="dish.quantita == 0" @click="togliQuantita(dish)">Togli</button>
                <span>{{ dish.quantita }}</span>
                <button @click="aggiungiQuantita(dish)">Aggiungi</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>