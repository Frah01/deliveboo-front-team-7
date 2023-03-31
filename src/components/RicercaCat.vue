<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'RicercaCat',
    data(){
        return{
            store, 
            filter_category: '',
        }
    },
    methods: {
        getCategories(){
            axios.get(`${this.store.baseUrl}/api/categories` ).then((response) => {
               
                    this.categories = response.data.results; 
                    
            });
        }
    },
    mounted() {
        this.getCategories();
    },
    

}

</script>
<template lang="">
    <div class="container">

   
        <div class="container-fluid backg-color">
            <div class="row text-center">
                <div class="col" >
                    <h2 class="titolo mt-2">Categorie</h2>
                </div>
            </div>
        </div>
        <div class="container-fluid backg-color">
            <div class="row" >
              
                <div v-for="category in this.categories" :key="category.id">
                    
                        
                    <button onclick class="my-2 mx-1 badge" for="form-check-label">
                    {{category.nome}}</button>
                
           

              </div>
              
               
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    width:40%;
}

.badge{
    width: 100%;
    color:  #00CDBE;
    border: 1px solid #00CDBE;
    border-radius: 20px;
    margin-top:5px;
    padding: 1rem 3rem 1rem 3rem;
    font-size: 1rem;
    background-color: white ;
    

    &:hover{
        color: white;
        background-color:#00CDBE; ;
    }
}

.titolo{
    color:rgb(68, 0, 99) ;
}
        
</style>