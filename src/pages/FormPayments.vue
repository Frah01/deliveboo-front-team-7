<script>
import { store } from '../store.js'
import AppCart from '../components/AppCart.vue'
const STORAGE_KEY = 'deliveboo-storage-key'

export default {
    name: 'form-payments',
    data() {
        return {
            store,
            dishes: []
        }
    },
    mounted() {
                    let storage = (JSON.parse(localStorage.getItem(STORAGE_KEY)));
                    this.dishes = storage;
    },
    methods: {
        aggiungiQuantita(dish) {
            dish.quantita++;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.dishes));
        },
        togliQuantita(dish) {
            dish.quantita--;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.dishes));
        },
        prezzoTotale() {
            let total_price = 0;
            let all_dishes = this.dishes;
            for (let dish in all_dishes) {
                total_price += all_dishes[dish].prezzo * all_dishes[dish].quantita;
            }
            return total_price;
        }
    },

}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center mt-5">Inserisci dati </h2>
            </div>
        </div>
        <div class="row d-flex justify-content-between">
            <div class="col-8 col-md-6 my-2 ">
                <form @submit.prevent="sendForm">
                    <div class="form-group">
                        <label for="nome" class="control-label fw-semibold mt-3">Nome</label>
                        <input type="text" class="form-control" name="nome" id="nome"
                            placeholder="Inserisci nome">
                    </div>
                    
                    <div class="form-group">
                        <label for="cognome" class="control-label fw-semibold mt-3 ">Cognome</label>
                        <input type="text" class="form-control" name="cognome" id="cognome"
                            placeholder="Inserisci cognome">
                    </div>
                    <div class="form-group">
                        <label for="indirizzo" class="control-label fw-semibold mt-3">indirizzo</label>
                        <input type="text" class="form-control" name="indirizzo" id="indirizzo"
                            placeholder="Inserisci indirizzo">
                    </div>
                    <div class="form-group">
                        <label for="telefono" class="control-label fw-semibold mt-3">telefono</label>
                        <input type="phone" class="form-control" name="telefono" id="telefono"
                            placeholder="Inserisci numero di telefono">
                    </div>
                    <div class="form-group">
                        <label for="email" class="control-label fw-semibold mt-3">email</label>
                        <input type="mail" class="form-control" name="email" id="email"
                            placeholder="Inserisci mail">
                    </div>
                    <div class="form-group mt-2">
                        <label for="note" class="control-label fw-semibold mt-3">note</label>
                        <textarea class="form-control" name="note" id="note"
                            placeholder="note"></textarea>
                    </div>
                    <div class="form-group mt-2">
                        <button type="submit" class="btn btn-sm indietro text-white fw-semibold mt-4">Procedi al pagamento</button>
                    </div>
                </form>
            </div>  
            <div class="col-4 m-4">
                <h2 class="text-center">Riepilogo ordine</h2>
                <div class="d-flex justify-content-center">
                    <div class="card shadow" style="width: 18rem;">
                        <div class="card-body">
                            <ul class="list-unstyled">
                                <li v-for="dish in dishes">
                                    <div v-if="dish.quantita != 0">
                                        <p class="fw-semibold">Nome: <span>{{ dish.nome }}</span></p>
                                        <p class="fw-semibold">Prezzo: <span>{{ dish.prezzo }} &euro;</span></p>
                                        <div class="d-flex justify-content-around align-items-center">
                                    <button class="btn btn-sm indietro text-white fw-semibold mx-2" :disabled="dish.quantita == 0" @click="togliQuantita(dish)"><i class="fa-solid fa-minus"></i></button>
                                    <span class="fw-semibold">{{ dish.quantita }}</span>
                                    <button class="btn btn-sm indietro text-white fw-semibold mx-2" @click="aggiungiQuantita(dish)"><i class="fa-solid fa-plus"></i></button>
                                </div>
                                    </div>
                                </li>
                                <li>
                                    <p class="fw-semibold">Prezzo Totale: <span>{{ prezzoTotale() }} &euro;</span></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>