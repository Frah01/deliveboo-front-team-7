<script>
import axios from 'axios'
import { store } from '../store.js'

const STORAGE_KEY = 'deliveboo-storage-key'
const PAID = 'deliveboo-paid'

export default {
    name: 'form-payments',
    data() {
        return {
            store,
            dishes: [],
            errors: {},
            payment: false,

            //qui di seguito i campi della form da compilare per invio dati utente per l'ordine
            nome: '',
            cognome: '',
            indirizzo: '',
            email: '',
            telefono: '',
            note: '',
            restaurant_id: ''

        }
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
            return total_price.toFixed(2);
        },
        ClearCache() {
            localStorage.clear();
            // location.reload();
        },
        sendForm() {
            const data = {
                nome: this.nome,
                cognome: this.cognome,
                indirizzo: this.indirizzo,
                email: this.email,
                telefono: this.telefono,
                note: this.note,
                prezzo_totale: this.prezzoTotale(),
                ristorante: this.restaurant_id,
                loading: this.store.loading,
                pagamento: this.payment
            }

            localStorage.setItem(PAID, JSON.stringify(data));

            this.errors = {}

            axios.post(`${this.store.baseUrl}/api/order`, data).then((response) => {
                if (!response.data.success) {
                    this.errors = response.data.errors;
                }
                else {
                    if (this.payment == false) {
                        this.payment = !this.payment;
                    }
                }
            });
        },

    },
    mounted() {

        let storage = (JSON.parse(localStorage.getItem(STORAGE_KEY)));
        this.dishes = storage;

        //recupero l'id del ristorante per inviarlo tramite la form
        for (let index in this.dishes) {
            this.restaurant_id = this.dishes[index].restaurant_id;
        }

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
                    if (payload) {

                        store.loading = true;
                        let data = (JSON.parse(localStorage.getItem(PAID)));

                        $.ajax({
                            type: 'POST',
                            url: store.baseUrl + '/api/order',
                            data: data
                        })

                        $.ajax({
                            type: 'POST',
                            url: window.location.replace('/thank-you-order'),
                            data: { 'paymentMethodNonce': payload.nonce }
                        })

                    }
                });
            });
        });
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row d-flex justify-content-between my-5">
            <div class="col-lg-8 col-md-12">
                <form @submit.prevent="sendForm" v-if="this.payment == false">
                    <div class="form-group">
                        <label for="nome" class="control-label fw-semibold mt-3">Nome</label>
                        <input type="text" class="form-control" name="nome" id="nome" v-model="nome" placeholder="Inserisci nome">
                        <div  v-for="(error, index) in errors.nome" :key="`message-error-${index}`" class="text-danger">
                            {{error}}
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="cognome" class="control-label fw-semibold mt-3 ">Cognome</label>
                        <input type="text" class="form-control" name="cognome" id="cognome" v-model="cognome" placeholder="Inserisci cognome">
                        <div  v-for="(error, index) in errors.cognome" :key="`message-error-${index}`" class="text-danger">
                            {{error}}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="indirizzo" class="control-label fw-semibold mt-3">Indirizzo</label>
                        <input type="text" class="form-control" name="indirizzo" id="indirizzo" v-model="indirizzo" placeholder="Inserisci indirizzo">
                        <div  v-for="(error, index) in errors.indirizzo" :key="`message-error-${index}`" class="text-danger">
                            {{error}}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="telefono" class="control-label fw-semibold mt-3">Telefono</label>
                        <input type="phone" class="form-control" name="telefono" id="telefono" v-model="telefono" placeholder="Inserisci numero di telefono">
                    </div>
                    <div class="form-group">
                        <label for="email" class="control-label fw-semibold mt-3">Email</label>
                        <input type="mail" class="form-control" name="email" id="email" v-model="email" placeholder="Inserisci mail">
                    </div>
                    <div class="form-group mt-2">
                        <label for="note" class="control-label fw-semibold mt-3">Note</label>
                        <textarea class="form-control" name="note" id="note" v-model="note" placeholder="Note"></textarea>
                    </div>
                    <div class="form-group mt-2">
                        <button type="submit" class="btn btn-sm indietro fw-semibold text-white">Continua</button>
                    </div>
                </form>
                <div class="card" :class="this.payment ? 'd-block' : 'd-none'">
                    <div class="card-header bg-header">
                        <h2 class="text-center text-white m-0">Inserisci i dati di pagamento</h2>
                    </div>
                    <div class="card-body">
                        <div id="dropin-container" ></div>   
                        <div class="d-flex">
                            <button type="submit" id="submit-button" :class="this.payment ? 'd-block' : 'd-none'" class="btn btn-sm btn-secondary indietro fw-semibold text-white me-2" :disabled="this.store.loading">
                                Paga
                            </button>
                            <button id="submit-button" @click="goToPayment" :class="this.payment ? 'd-block' : 'd-none'" class="btn btn-sm btn-secondary fw-semibold text-white" :disabled="this.store.loading">
                                Indietro
                            </button>
                        </div>
                    </div>
                </div>
            </div>  
            <div class="col-lg-4 col-md-12 my-5 my-sm-5 my-lg-0">
                <div class="card shadow">
                    <div class="card-header bg-header" >
                        <h2 class=" text-center text-white m-0">Riepilogo Ordine</h2>
                    </div>
                    <div class="flow shadow p-3" >
                        <div v-for="dish in dishes">
                            <div class="mb-3" v-if="dish.quantita != 0">
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
                    </div>
                    <div class="card-footer backg-body" >
                        <p class="fw-semibold mb-0">Prezzo totale: <span>{{ prezzoTotale() }} &euro;</span></p>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flow {
    height: 50vh;
    overflow-y: auto;
}

.bg-header{
    background-color: #00CDBE;
}

.backg-body {
    background-color: rgba(209, 235, 153, 0.25);
}

</style>