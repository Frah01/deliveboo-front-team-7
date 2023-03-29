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
    <div>
        <ul>
            <li v-for="dish in this.store.cart">
                {{ dish.nome }}
                {{ dish.prezzo }}
                {{ dish.quantita }}
            </li>
            <p>Totale: {{ totalPrice }} &euro;</p>
        </ul>
    </div>
</template>
<style lang="">
    
</style>