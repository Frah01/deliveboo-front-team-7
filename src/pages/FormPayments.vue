<script>
import { store } from '../store.js'
import AppCart from '../components/AppCart.vue'
const STORAGE_KEY = 'deliveboo-storage-key'

export default {
    name: 'form-payments',
    data() {
        return {
            store,
            dishes: [],
            payment: false,
            new_order: {
                nome: '',
                cognome: '',
                indirizzo: '',
                email: '',
                telefono: '',
                note: ''
            }
        }
    },
    mounted() {
        let storage = (JSON.parse(localStorage.getItem(STORAGE_KEY)));
        this.dishes = storage;

        var button = document.querySelector('#submit-button');

        braintree.dropin.create({
            // Insert your tokenization key here
            authorization: 'sandbox_bnfvjc5r_4vgxf5s8m9bsjknm',
            container: '#dropin-container'
        }, function (createErr, instance) {
            button.addEventListener('click', function () {
                instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
                    // When the user clicks on the 'Submit payment' button this code will send the
                    // encrypted payment information in a variable called a payment method nonce
                    $.ajax({
                        type: 'POST',
                        url: '/checkout',
                        data: { 'paymentMethodNonce': payload.nonce }
                    }).done(function (result) {
                        // Tear down the Drop-in UI
                        instance.teardown(function (teardownErr) {
                            if (teardownErr) {
                                console.error('Could not tear down Drop-in UI!');
                            } else {
                                console.info('Drop-in UI has been torn down!');
                                // Remove the 'Submit payment' button
                                $('#submit-button').remove();
                            }
                        });

                        if (result.success) {
                            $('#checkout-message').html('<h1>Success</h1><p>Your Drop-in UI is working! Check your <a href="https://sandbox.braintreegateway.com/login">sandbox Control Panel</a> for your test transactions.</p><p>Refresh to try another transaction.</p>');
                        } else {
                            console.log(result);
                            $('#checkout-message').html('<h1>Error</h1><p>Check your console.</p>');
                        }
                    });
                });
            });
        });
    },
    methods: {
        goToPayment() {
            this.payment = !this.payment
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
        prezzoTotale() {
            let total_price = 0;
            let all_dishes = this.dishes;
            for (let dish in all_dishes) {
                total_price += all_dishes[dish].prezzo * all_dishes[dish].quantita;
            }
            return total_price;
        },
        ClearCache(){
            localStorage.clear();
            location.reload();
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
                <form @submit.prevent="sendForm" v-if="this.payment == false">
                    <div class="form-group">
                        <label for="nome" class="control-label fw-semibold mt-3">Nome</label>
                        <input type="text" class="form-control" name="nome" id="nome" v-model="new_order.nome" placeholder="Inserisci nome">
                    </div>
                    
                    <div class="form-group">
                        <label for="cognome" class="control-label fw-semibold mt-3 ">Cognome</label>
                        <input type="text" class="form-control" name="cognome" id="cognome" v-model="new_order.cognome"
                            placeholder="Inserisci cognome">
                    </div>
                    <div class="form-group">
                        <label for="indirizzo" class="control-label fw-semibold mt-3">Indirizzo</label>
                        <input type="text" class="form-control" name="indirizzo" id="indirizzo" v-model="new_order.indirizzo"
                            placeholder="Inserisci indirizzo">
                    </div>
                    <div class="form-group">
                        <label for="telefono" class="control-label fw-semibold mt-3">Telefono</label>
                        <input type="phone" class="form-control" name="telefono" id="telefono" v-model="new_order.telefono"
                            placeholder="Inserisci numero di telefono">
                    </div>
                    <div class="form-group">
                        <label for="email" class="control-label fw-semibold mt-3">Email</label>
                        <input type="mail" class="form-control" name="email" id="email" v-model="new_order.email"
                            placeholder="Inserisci mail">
                    </div>
                    <div class="form-group mt-2">
                        <label for="note" class="control-label fw-semibold mt-3">Note</label>
                        <textarea class="form-control" name="note" id="note" v-model="new_order.note"
                            placeholder="Note"></textarea>
                    </div>
                    <div class="form-group mt-2">
                        <button class="btn btn-sm indietro fw-semibold text-white" @click="goToPayment">Continua</button>
                    </div>
                </form>
                <div id="dropin-container" :class="this.payment ? 'd-block' : 'd-none'"></div>
                <div class="d-flex">
                    <button id="submit-button" @click="ClearCache()" :class="this.payment ? 'd-block' : 'd-none'" class="btn btn-sm indietro fw-semibold text-white me-2">Paga</button>
                    <button id="submit-button" @click="goToPayment" :class="this.payment ? 'd-block' : 'd-none'" class="btn btn-sm btn-secondary fw-semibold text-white">Indietro</button>
                </div>
            </div>  
            <div class="col-4 m-4">
                <h2 class="text-center">Riepilogo ordine</h2>
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
                                    <div class="card-body p-3">
                                        <p class="fw-semibold "><span>{{ dish.nome }}</span></p>
                                        <p class="fw-semibold mb-0">Prezzo: <span>{{ dish.prezzo }} &euro;</span><span v-if="this.payment">  x {{ dish.quantita }}</span></p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-if="this.payment == false">
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
                <p class="fw-semibold mb-0">Prezzo totale: <span>{{ prezzoTotale() }} &euro;</span></p>
            </div>            
        </div>
    </div>
</template>

<style lang="scss" scoped></style>