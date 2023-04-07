<script>
import { store } from '../store';
const STORAGE_KEY = 'deliveboo-storage-key'
const STORAGE_RESTAURANT_ID = 'storage-restaurant-id';
const CURRENT_RESTAURANT_ID = 'current-restaurant-id';
const QTA_ITEMS = 'qta-storage-items'


export default {
    name: "AppCart",
    props: {
        dishes: Object
    },
    data() {
        return {
            store,
            storage: '',
            current_restaurant_id: '',
            storage_restaurant_id: '',
        };
    },
    updated() {
        let qta_items = 0;

        this.storage = (JSON.parse(localStorage.getItem(STORAGE_KEY)));


        store.cart_off_canvas = [];

        for (let index in this.storage) {
            localStorage.setItem(STORAGE_RESTAURANT_ID, this.storage[index].restaurant_id);
            this.storage_restaurant_id = localStorage.getItem(STORAGE_RESTAURANT_ID);
            store.cart_off_canvas.push(this.storage[index]);

        }

        for (let index in this.dishes) {
            localStorage.setItem(CURRENT_RESTAURANT_ID, this.dishes[index].restaurant_id);
            this.current_restaurant_id = localStorage.getItem(CURRENT_RESTAURANT_ID);

        }

        for (let index in this.storage) {
            if (this.storage[index].quantita > 0)
                qta_items++;
        }

        localStorage.setItem(QTA_ITEMS, qta_items);
        store.qta_items = localStorage.getItem(QTA_ITEMS);

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
        Clear() {
            localStorage.clear();
            location.reload();
        },
        ClearItem(dish) {
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
        nuovoOrdine() {
            localStorage.clear();
            location.reload();
        }
    }
}
</script>

<template lang="">
    <div class="container" >
        <div class="row" >
            <div class="card mb-5 mt-sm-5 mt-lg-0 shadow px-0" >
                <div class="card-header bg-header" >
                    <h2 class="text-center text-white mb-0">Carrello</h2>
                </div>
                <div class="card-body shadow" >
                    <div class="col-12">
                        <div class="card  p-3 flow border-0 mt-3" >
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
                            <div class="img-container" v-if="this.current_restaurant_id == this.storage_restaurant_id">
                                <div v-if="this.prezzoTotale() == 0" >
                                    <img class="object-fit-contain empty-cart-img"  src="../../public/empty-cart.png" alt="">
                                </div>
                            </div>
                            <div v-else>
                                <div class="img-container" v-if="!this.storage">
                                    <img class="object-fit-contain empty-cart-img"  src="../../public/empty-cart.png" alt="">
                                </div>
                                <div v-else>
                                    <h3 class="text-center mt-5">Vuoi creare un nuovo carrello?</h3>
                                    <p class="p-2 text-center">Puoi scegliere se cancellare l'ordine precedente oppure procedere col pagamento</p>
                                    <div class="d-flex justify-content-around">
                                        <button class="btn btn-sm bg-secondary text-white fw-semibold me-2" @click="nuovoOrdine">Nuovo carrello</button>
                                        <router-link :to="{ name: 'form-payments'}">
                                            <button class="btn btn-sm indietro text-white fw-semibold" @click="goToPayment">Vai al pagamento</button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div class="card-footer backg-body" v-if="this.prezzoTotale() != 0">
                    <div class="d-flex justify-content-between align-items-center" >
                        <div>
                            <router-link :to="{ name: 'form-payments'}"  class="btn btn-sm indietro text-white fw-semibold me-2" title="Paga">Paga</router-link>
                            <button type="submit" class="btn btn-sm btn-danger fw-semibold " @click="Clear()" title="Svuota Carrello">Svuota</button>
                        </div>
                        <div>
                            <p class="fw-semibold mb-0">Prezzo totale: <span>{{ prezzoTotale() }} &euro;</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flow {
    height: 400px;
    overflow-y: auto;
}

.img-container {
    overflow: hidden;
}

.empty-cart-img {
    width: 100%;
    height: 350px;
    scale: 1.5;
}

.bg-header {
    background-color: #00CDBE;
}

.backg-body {
    background-color: rgba(209, 235, 153, 0.25);
}
</style>