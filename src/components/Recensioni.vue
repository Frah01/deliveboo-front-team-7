<script>
export default {
    data(){
        return{
            activeItem: 0,
            reviews: [
                {
                    name: 'Mattia Vincenzi',
                    foto: 'https://tse3.mm.bing.net/th?id=OIP.rFQyRuKghsBDKgQzpMdI0QHaE8&pid=Api',
                    descrizione: 'Ordino con Deliveroo da diversi anni, almeno 6 volte al mese e mi sono sempre trovata benissimo. I rider suonano al citofono (come è giusto che sia) oppure chiamano quando si trovano sotto casa. Consegne sempre puntuali e curate!',
                    stars: '★★★★★',
                    opacity: 0
                },
                {
                    name: 'Jeremy Spielberg',
                    foto: 'https://tse2.mm.bing.net/th?id=OIP.5h52GonOodNx774-44sZzwHaFS&pid=Api',
                    descrizione: 'Ordino svariate volte da Deliveroo e mi sono sempre trovato bene! Ovviamente in giorni festivi o al sabato è normale che gli ordini tardino anche di 10-15 minuti, c\'è da aspettarselo. Rider molto gentili, app perfetta e servizio impeccabile. Lo promuovo a pieni voti!',
                    stars: '★★★★☆' ,
                },
                {
                    name: 'Giovanna Di Mauro',
                    foto: 'https://tse2.mm.bing.net/th?id=OIP.BHspYQ2i-3jWLblpiuGftwHaE8&pid=Api',
                    descrizione: 'Non capisco tutte le recensioni negative. Quasi mai avuto problemi, e quando ci sono stati, sono stati risolti velocemente dal negozio. Magari dovreste rivalutare da dove ordinare, e consultare prima le recensioni!',
                    stars: '★★★★☆',
                },
                {
                    name: 'Pietro Smusi',
                    foto: 'https://tse2.mm.bing.net/th?id=OIP.VMMEWpgpPYog1oDAEiabwwHaEK&pid=Api',
                    descrizione: 'Tutto come programmato. Tracciamento dettagliato dell\'ordine e consegna veloce come da indicazioni. Rider gentile e disponibile nonostante le incomprensioni relative al numero civico. Ottimo servizio!',
                    stars: '★★★★★',
                },
                {
                    name: 'Sofia Mancini',
                    foto: 'https://tse4.mm.bing.net/th?id=OIP.qEKUpp-xiKRgsCWAvY3CQwHaE8&pid=Api',
                    descrizione: 'Ho provato altre compagnie di consegna...ritorno sempre a Deliveroo: puntuale, preciso e funzionale!!',
                    stars: '★★★★★',
                }
            ]
        }
    },
    methods: {
    slider(){
        let array = this.reviews.length;
        setInterval(function() {
             this.activeItem = (this.activeItem + 1) % array;
             $(".card-reviews").ready(function(){
                 $(".img-review").fadeOut(500, ()=>{
                     $(".img-review").fadeIn(500);
                 });
                 $(".nome-review").fadeOut(500, ()=>{
                     $(".nome-review").fadeIn(500);
                 });
                 $(".stars").fadeOut(500, ()=>{
                     $(".stars").fadeIn(500);
                 });
                 $(".descrizione").fadeOut(500, ()=>{
                     $(".descrizione").fadeIn(500);
                 })
             })
              
         }, 4000);
        setInterval(() => {
            this.setSlider(this.activeItem == 4 ? 0 : this.activeItem + 1);
        }, 4000);

        
    },
    setSlider(index){
            this.activeItem = index
    }
   },
   beforeMount(){
    this.slider()
   },

}
</script>

<template lang="">
    <div class="contenitore-reviews">
        <div class="row-review">
            <h1>Noi ci mettiamo tutto il nostro impegno! Leggi cosa dicono di noi i nostri clienti!</h1>
            <div class="col-12 card-reviews" data-random="0" data-speed="4000" data-interval="151">
                <div class="img-review" >
                    <img :src="reviews[this.activeItem].foto" alt="">
                </div>
                <p class="nome-review">{{reviews[this.activeItem].name}}</p>
                <span class="stars">{{reviews[this.activeItem].stars}}</span>
                <p class="descrizione">❝  {{reviews[this.activeItem].descrizione}}  ❞</p>
                <div class="circles-container">
                    <div class="circle" @click="setSlider(0)" :class="activeItem == 0 ? 'active' : ''"></div>
                    <div class="circle" @click="setSlider(1)" :class="activeItem == 1 ? 'active' : ''"></div>
                    <div class="circle" @click="setSlider(2)" :class="activeItem == 2 ? 'active' : ''"></div>
                    <div class="circle" @click="setSlider(3)" :class="activeItem == 3 ? 'active' : ''"></div>
                    <div class="circle" @click="setSlider(4)" :class="activeItem == 4 ? 'active' : ''"></div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .contenitore-reviews{
        width: 100%;
        background-color: rgba(208, 235, 153, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        
        .row-review{
            width: 80%;
            margin: 0 auto;
            text-align: center;
            padding-top: 50px;

            h1{
                font-size: 30px;
                color: rgba(0, 0, 0, 0.7);
                font-style: italic;
            }

            .card-reviews{
                margin: 0 auto;
                border-radius: 10px;
                text-align: center;
                opacity: 1;
                transition: opacity 1s infinite;
                

                .load{
                    opacity: 1;
                }

                .nome-review{
                    color: #440063;
                    font-style: italic;
                    font-size: 25px;
                }

                .descrizione{
                    color: rgba(0, 0, 0, 0.7);
                    font-size: 15px;
                    width: 60%;
                    height: 100px;
                    margin: 20px auto;
                }
                .img-review{
                    width: 150px;
                    height: 150px;
                    margin: 20px auto;
                    border-radius:50%;
                    overflow: hidden;

                    img{
                        width: 100%;
                        height:100%;
                        object-fit: cover;
                        
                    }
                }

                .stars{
                font-size: 25px;
                }


                .circles-container{
                display: flex;
                justify-content: center;
                margin-bottom: 30px;
                
                    .circle{
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        background-color:rgb(0, 205, 190);
                        margin: 10px;
                        cursor: pointer;
                    }
                
                
                    .circle.active, .circle:hover{
                        background-color:#440063; 
                    }
                }

            }
        }
    }
    @media screen and (min-width: 800px) and (max-width: 992px) {
        .card-reviews{
            padding-bottom: 3rem;
            
        }
        .circles-container{
            padding-top: 5rem;
        }
    }
    
    @media screen and (max-width: 766px) {

    .contenitore-reviews{

        .row-review{
            .card-reviews{
                padding-bottom: 3rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                
                .descrizione{
                    width: 90%;
                }
                .circles-container{
                padding-top: 5rem;
                }
                .img-review{
                margin: 0 30px;
                }
                
            }
        }
    }
    }
</style>