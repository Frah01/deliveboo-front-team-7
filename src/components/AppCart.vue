<script>
import { store } from '../store';
export default {
    name: "AppCart",
    props: {
        dishes: Object
    },
    data() {
        return {
            store
        };
    },
    methods: {
        prezzoTotale() {
            let total_price = 0;
            let all_dishes = this.dishes;
            for (let dish in all_dishes) {
                total_price += all_dishes[dish].prezzo * all_dishes[dish].quantita;
            }
            return total_price;
        },
        Clear(){
            localStorage.clear();
            location.reload();
        },
        ClearItem(dish){
            dish.quantita = 0;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.dishes));
        },
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
                            <li v-for="dish in dishes">
                                <div v-if="dish.quantita != 0">
                                    <p class="fw-semibold">Nome: <span>{{ dish.nome }}</span></p>
                                    <p class="fw-semibold">Prezzo: <span>{{ dish.prezzo }} &euro;</span></p>
                                    <p class="fw-semibold">Quantità: <span>{{ dish.quantita }}</span></p>
                                    <div class="d-flex justify-content-start align-items-center my-3">
                                    <button class="btn btn-sm btn-danger  text-white fw-semibold" @click="ClearItem(dish)"><i class="fa-solid fa-trash-can" title="Elimina"></i></button>
                                </div>
                                <hr class="border border-secondary border-1 opacity-75">
                                </div>
                            </li>
                            <li>
                                <p class="fw-semibold">Prezzo Totale: <span>{{ prezzoTotale() }} &euro;</span></p>
                            </li>
                        </ul>
                        <div>
                            <router-link :to="{ name: 'form-payments'}"  class="btn btn-sm indietro text-white fw-semibold me-2" title="Paga">Paga</router-link>
                            <button type="submit" class="btn btn-sm btn-danger fw-semibold " @click="Clear()" title="Svuota Carrello">Svuota</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>