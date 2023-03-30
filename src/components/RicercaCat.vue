<script>

import { store } from '../store';
export default {
    name: 'RicercaCat',
    data(){
        return{
            store, 
            filter_category: '',
        }
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
                <div class="col-12 d-flex justify-content-center flex-wrap pb-3" >
                    <h6 class="nomeCat badge shadow">Italiana</h6>
                    <h6 class="nomeCat badge badge-verde shadow">Vegetariano</h6>
                    <h6 class="nomeCat badge shadow">Vegano</h6>
                    <h6 class="nomeCat badge badge-verde shadow">Gourmet</h6>
                    <h6 class="nomeCat badge shadow">Cinese</h6>
                    <h6 class="nomeCat badge badge-verde shadow">Giapponese</h6>
                    <h6 class="nomeCat badge shadow">Fast Food</h6>
                    <h6 class="nomeCat badge badge-verde shadow">Pizza</h6>
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

    &:hover{
        color: white;
        background-color:#00CDBE; ;
    }
}
.badge-verde{
    color:rgb(68, 0, 99);
    border:1px solid rgb(68, 0, 99);

    &:hover{
        color: white;
        background-color:rgb(68, 0, 99) ;
    }
}
.titolo{
    color:rgb(68, 0, 99) ;
}
        
</style>