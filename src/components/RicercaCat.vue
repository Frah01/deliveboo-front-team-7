<script>
export default {
    name: 'RicercaCat',
}
</script>
<template lang="">
    <div>
        <h5 class="text-center mt-5">categorie</h5>
    </div>
    <div class="categorie d-flex ">
        <div class="square italiana text-center">
            <h6 class="nomeCat">Italiana</h6>
        </div>
        <div class="square vegetariana text-center">
            <h6 class="nomeCat">Vegetariano</h6>
        </div>
        <div class="square vegano text-center">
            <h6 class="nomeCat">Vegano</h6>
        </div>
        <div class="square gourmet text-center">
            <h6 class="nomeCat">Gourmet</h6>
        </div>
        <div class="square cinese text-center">
            <h6 class="nomeCat">Cinese</h6>
        </div>
        <div class="square giapponese text-center">
            <h6 class="nomeCat">Giapponese</h6>
        </div>
        <div class="square FastFood text-center">
            <h6 class="nomeCat">Fast Food</h6>
        </div>
        <div class="square pizzeria text-center">
            <h6 class="nomeCat">Pizza</h6>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
    .categorie{
        width: 100%;
        background-color:#00CDBE ; 
        height: 120px;
       .square{
        width: calc(100% / 8);
        height: 80%;
        border-radius: 5px;

        &:hover{
            border: 1px solid white;
            color: white;
        }
    }
       .italiana{
            margin: 10px;
            background-image: url("https://www.exportiamo.it/thumb/1200x800/public/settori/942/anno-italiano-cibo.jpg");
            background-size:cover;
            background-repeat: no-repeat;
            
       }
       .vegetariana{
            margin: 10px;
            background-image: url("https://cdn.pixabay.com/photo/2016/10/25/13/16/pumpkin-1768857__340.jpg");
            background-size:cover;
            background-repeat: no-repeat;
            
       }
       .vegano{
            margin: 10px;
            background-image: url("https://cdn.pixabay.com/photo/2016/11/13/21/58/quinoa-1822176__340.jpg");
            background-size:cover;
            background-repeat: no-repeat;
       }
       .gourmet{
            margin: 10px;
            background-image: url("https://cdn.pixabay.com/photo/2015/01/09/15/34/chunks-594496_960_720.jpg");
            background-size:cover;
            background-repeat: no-repeat;
       }
       .cinese{
            margin: 10px;
            background-image: url("https://www.giallozafferano.it/images/ricette/230/23009/foto_hd/hd450x300.jpg");
            background-size:cover;
            background-repeat: no-repeat;
       }
       .giapponese{
            margin: 10px;
            background-image: url("https://cdn.pixabay.com/photo/2014/05/26/14/53/sushi-354628__340.jpg");
            background-size:cover;
            background-repeat: no-repeat;
       }
       .FastFood{
            margin: 10px;
            background-image: url("https://cdn.pixabay.com/photo/2019/05/19/22/31/burger-4215450_960_720.jpg");
            background-size:cover;
            background-repeat: no-repeat;
       }
       .pizzeria{
            margin: 10px;
            background-image: url("https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191__340.jpg");
            background-size:cover;
            background-repeat: no-repeat;
       }

       .nomeCat{
        color: white;
        margin-top:5px;
       }
     
     
     
     
    
    
    }
   
    
</style>