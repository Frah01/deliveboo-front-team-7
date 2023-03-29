<script>
import axios from 'axios';
import { store } from '../store';
import CardRistoranti from './CardRistoranti.vue';
export default {
    name: 'ListaRistoranti',
    components:{
        CardRistoranti,
    },

        data(){
            return{
                store,
                restaurants: [],
                currentPage:1,
                lastPage:null
            }
        },
        methods:{
            getRestaurant(restaurant_page){
                axios.get(`${this.store.baseUrl}/api/restaurants`, {params: {page: restaurant_page}}).then((response)=>{
                    if(response.data.success){
                        this.restaurants = response.data.results.data;
                        this.currentPage = response.data.results.current_page;
                        this.lastPage = response.data.results.last_page
                    }
                    else{

                    }
                });
            }
        }, 
        mounted(){
            this.getRestaurant(this.currentPage)
        }
};
</script>
<template lang="">
    <div class="container">

        <div class="col-12 d-flex  flex-wrap">
                    <div class="row">
                        <div class="col-4 " v-for="restaurant in restaurants" :key= "restaurant.id" >
                        <CardRistoranti :restaurant="restaurant" :baseUrl="baseUrl"></CardRistoranti>
                    </div>
                    </div>
                   
                    
        </div>
        <div class="row">
                        <div class="col-12 d-flex justify-content-center my-3">
                            <ul class="pagination">
                                <li :class="currentPage == 1 ? 'disabled' :'page-item'">
                                <button class="page-link btn " @click="getRestaurant(currentPage - 1)">indietro</button>
                                </li>
                                <li :class="currentPage == i ? 'disabled' : 'page-item'" v-for="i in lastPage" :key="i">
                                <button class="page-link " @click="getRestaurant(i)">{{ i }}</button>
                                </li>
                                <li :class="currentPage == lastPage ? 'disabled' :'page-item'">
                                <button class="page-link btn btn-success" @click="getRestaurant(currentPage + 1)">avanti</button>
                                </li>
                            </ul>
                        </div>
                    </div>
    </div>

</template>

<style lang="scss" scoped>
    .btn{
        background-color:#00CDBE  ;
    }
</style>