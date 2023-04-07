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
    <div class="container-fluid my-5">
        <div class="row d-flex">
            <div class="col-3">
                <RicercaCat @search="updateCategories"/>
            </div>
            <div class="col-9">
                <input class="search_bar" type="search" placeholder="Cerca il tuo ristorante preferito.." v-model="search_title" @keyup="getRestaurants">
                <div class="col-12 d-flex flex-wrap justify-content-around">
                    <div class="responsive-card col-md-6 col-lg-5 col-xl-4 col-sm-12 col-xs-12" v-for="restaurant in filterRestaurants" :key= "restaurant.id" v-if="filterRestaurants.length > 0">
                        <CardRistoranti :restaurant="restaurant" :baseUrl="baseUrl"></CardRistoranti>
                    </div>
                    <div v-else>
                        <p class="risposta"> Ci spiace, sembra che non ci sia nessun ristorante con le caratteristiche da te richieste, prova con un'altra ricerca!</p>
                        <img class="img-sad" src="https://tse2.mm.bing.net/th?id=OIP.JxVWzszKA0iv5HmXXAmuPgHaHa&pid=Api" alt="">
                    </div>
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

</template>

<style lang="scss" scoped>
.btn {
    background-color: #00CDBE;
    color: white;
}

.search_bar {
    width: 50%;
    display: block;
    margin: 10px auto;
    text-align: center;
    align-self: flex-end;
    border: 3px solid rgb(68, 0, 99);
    border-radius: 30px;
    outline: none;
    height: 50px;


}

.risposta{
    font-size: 20px;
    color: rgb(68, 0, 99) ;
    margin: 100px 50px 50px 50px;
    text-align: center;
    font-weight: 600;
}

.img-sad{
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 200px;
    height: 200px;
}

@media screen and (max-width: 992px) {
  .row {
    display: flex;
    flex-direction: column;
    
  }
  .col-3{
    overflow-x: scroll;
    width: 90%;
    margin:0 auto;
  }
  .col-9{
    margin:auto
  }
  .search_bar{
    width: 100%;
  }
  
}

</style>