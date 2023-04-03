<script>
import axios from 'axios';
import { store } from '../store';
import CardRistoranti from './CardRistoranti.vue';
import RicercaCat from './RicercaCat.vue';

export default {
    name: 'ListaRistoranti',
    components: {
        CardRistoranti,
        RicercaCat
    },

    data() {
        return {
            store,
            search_title: '',
            filter_category: [],
            restaurants: [],
            currentPage: 1,
            lastPage: null
        }
    },
    methods: {
        // getRestaurant(restaurant_page) {
        //     axios.get(`${this.store.baseUrl}/api/restaurants`, { params: { page: restaurant_page } }).then((response) => {
        //         if (response.data.success) {
        //             this.restaurants = response.data.results.data;
        //             this.currentPage = response.data.results.current_page;
        //             this.lastPage = response.data.results.last_page
        //         }
        //     });
        // },
        getRestaurants() {
            // return this.restaurants.filter(restaurant => restaurant.nome.toLowerCase().includes(this.search_title.toLocaleLowerCase()));
            axios.get(`${this.store.baseUrl}/api/restaurants`, { params: { nome: this.search_title } }).then((response) => {
                if (response.data.success) {
                    this.restaurants = response.data.results;
                }
            });
        },
        updateCategories(selected_categories) {
            this.filter_category = selected_categories;
        }
    },
    computed: {
        filterRestaurants() {
            let restaurants = this.restaurants;

            if (this.filter_category.length > 0) {
                let filtered_restaurants = this.restaurants.filter(restaurant => {
                    return this.filter_category.every(category_id => {
                        return restaurant.categories.some(category => category.id == category_id.id)
                    });
                });
                restaurants = JSON.parse(JSON.stringify(filtered_restaurants));

                console.log(restaurants);
                return restaurants;
            }

            return restaurants;
        },
    },
    mounted() {
        this.getRestaurants();
    }
};
</script>
<template lang="">
    <div class="container-fluid">
        <div class="main d-flex">
            <RicercaCat @search="updateCategories"/>
            <div class="row">
                <input class="search_bar mt-3" type="text" placeholder="cerca il tuo ristorante preferito" v-model="search_title" @keyup="getRestaurants">
                <div class="col-12 d-flex flex-wrap">
                    <div class="col-4" v-for="restaurant in filterRestaurants" :key= "restaurant.id" >
                        <CardRistoranti :restaurant="restaurant" :baseUrl="baseUrl"></CardRistoranti>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="row">
            <div class="col-12 d-flex justify-content-center my-3">
                <ul class="pagination">
                    <li :class="currentPage == 1 ? 'disabled' :'page-item'">
                    <button class="page-link btn text-white fw-semibold me-2" @click="getRestaurant(currentPage - 1)">Indietro</button>
                    </li>
                    <li :class="currentPage == i ? 'disabled' : 'page-item'" v-for="i in lastPage" :key="i">
                    <button class="page-link " @click="getRestaurant(i)">{{ i }}</button>
                    </li>
                    <li :class="currentPage == lastPage ? 'disabled' :'page-item'">
                    <button class="page-link btn btn-success text-white fw-semibold ms-2" @click="getRestaurant(currentPage + 1)">Avanti</button>
                    </li>
                </ul>
            </div>
        </div> -->
    </div>

</template>

<style lang="scss" scoped>
.btn {
    background-color: #00CDBE;
    color: white;
}

.search_bar {
    width: 100%;
    border: 2px solid #00CDBE;
    border-radius: 20px;


}
</style>