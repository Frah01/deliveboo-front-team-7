<script>
import { store } from '../store';
const STORAGE_KEY = 'deliveboo-storage-key'
export default {
    name: "AppCart",
    props: {
        dishes: Object
    },
    data() {
        return {
            store,
        };
    },
    methods: {
        prezzoTotale() {
            let total_price = 0;
            let all_dishes = this.dishes;
            for (let dish in all_dishes) {
                total_price += all_dishes[dish].prezzo * all_dishes[dish].quantita;
            }
            return total_price.toFixed(2);
        },
        Clear(){
            localStorage.clear();
            location.reload();
        },
        ClearItem(dish){
            dish.quantita = 0;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.dishes));
        },
        aggiungiQuantita(dish) {
            dish.quantita++;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.dishes));
        },
        togliQuantita(dish) {
            dish.quantita--;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.dishes));
        },
    }
}
</script>

<template lang="">
    <div class="container" >
        <div class="row" >
            <h2 class="mt-5 text-center">CARRELLO</h2>
            <div class="col-12">
                <div class="card p-3 flow shadow custom-border mb-5" >
                    <div v-for="dish in dishes">
                        <div class=" mb-3" v-if="dish.quantita != 0">
                            <div>
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div v-if="dish.immagine.includes('dish_image')">
                                                <img class="card-img-top rounded shadow" :src="`${store.baseUrl}/storage/${dish.immagine}`">
                                        </div>
                                        <div v-else>
                                            <img class="card-img-top rounded shadow" :src="dish.immagine != null ? `${dish.immagine}`: 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body p-3 ">
                                            <p class="fw-semibold "><span>{{ dish.nome }}</span></p>
                                            <p class="fw-semibold mb-0">Prezzo: <span>{{ dish.prezzo }} &euro;</span><span v-if="this.payment">  x {{ dish.quantita }}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4" >
                                    <div class="d-flex justify-content-between align-items-center my-3" >
                                        <button class="btn btn-sm indietro text-white fw-semibold" :disabled="dish.quantita == 0" @click="togliQuantita(dish)"><i class="fa-solid fa-minus"></i></button>
                                        <span class="fw-semibold">{{ dish.quantita }}</span>
                                        <button class="btn btn-sm indietro text-white fw-semibold" @click="aggiungiQuantita(dish)"><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>
                                <div class="col-8" >
                                    <div class="d-flex justify-content-end align-items-center my-3">
                                        <button class="btn btn-sm btn-danger  text-white fw-semibold mx-2" @click="ClearItem(dish)"><i class="fa-solid fa-trash-can" title="Elimina"></i></button>
                                    </div>
                                </div>
                            </div>
                            <hr class="border border-secondary border-1 opacity-75">
                        </div>
                    </div>
                    <div v-if="this.prezzoTotale() != 0" >
                        <p class="fw-semibold mb-0">Prezzo totale: <span>{{ prezzoTotale() }} &euro;</span></p>
                    </div>
                    <div v-else>
                        <div >
                            <img class="object-fit-contain empty-cart-img"  src="../../public/empty-cart.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="mb-3" v-if="this.prezzoTotale() != 0">
                    <router-link :to="{ name: 'form-payments'}"  class="btn btn-sm indietro text-white fw-semibold me-2" title="Paga">Paga</router-link>
                    <button type="submit" class="btn btn-sm btn-danger fw-semibold " @click="Clear()" title="Svuota Carrello">Svuota</button>
                </div>
            </div>  
        </div>
    </div>
</template>

<style lang="scss" scoped>

.flow{
    height: 50vh;
    overflow-y: auto;
}

.empty-cart-img{
    width: 100%;
    height: 45vh;
}
</style>