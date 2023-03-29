<script>
import { store } from '../store';
export default {
    name: "AppCart",
    data(){
        return{
            store,
            totalPrice: 0,
        };
    },
    methods: {
        addPrice(){
            let total = 0;
            for(let i = 0; i < this.store.cart.length; i++){
                const itemTotal = parseFloat(this.store.cart[i].prezzo)* this.store.cart[i].quantita;
                total += itemTotal
            }
            this.totalPrice = total.toFixed(2)
        }
    },
    mounted(){
        this.addPrice(this.store.cart)
    }
}
</script>
<template lang="">
    <div class="container" >
        <div class="row" >
            <h2 class="mt-5 text-center">CARRELLO</h2>
            <div class="col-12 mt-5 d-flex justify-content-center">
                <div class="card shadow" style="width: 18rem;">
                    <div class="card-body">
                        <ul class="list-unstyled">
                        <li v-for="dish in this.store.cart">
                            <p class="fw-semibold">Nome: <span>{{ dish.nome }}</span></p>
                            <p class="fw-semibold">Prezzo: <span>{{ dish.prezzo }} &euro;</span></p>
                            <p class="fw-semibold">Quantità: <span>{{ dish.quantita }}</span></p>
                        </li>
                        <li>
                            <p class="fw-semibold">Prezzo Totale: <span>{{ this.totalPrice }} &euro;</span></p>
                        </li>
                    </ul>
                    <div>
                        <button type="submit" class="btn btn-sm indietro text-white fw-semibold me-2">Paga</button>
                        <button type="submit" class="btn btn-sm btn-danger fw-semibold ">Annulla</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>