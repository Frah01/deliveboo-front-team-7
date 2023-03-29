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
        }
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
                                <p class="fw-semibold">Nome: <span>{{ dish.nome }}</span></p>
                                <p class="fw-semibold">Prezzo: <span>{{ dish.prezzo }} &euro;</span></p>
                                <p class="fw-semibold">Quantità: <span>{{ dish.quantita }}</span></p>
                            </li>
                            <li>
                                <p class="fw-semibold">Prezzo Totale: <span>{{ prezzoTotale() }} &euro;</span></p>
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

<style lang="scss" scoped></style>