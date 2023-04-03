<script>
import { store } from '../store.js'
export default {
    name: 'form-payments'
}
</script>
<template lang="">
    
       
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="text-center mt-5">inserisci dati </h2>
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
                        <button type="submit" class="btn btn-sm indietro text-white fw-semibold mt-4">procedi al pagamento</button>
                    </div>
                </form>
            </div>  
            <div class="col-4 m-4">
                <h2>riepilogo ordine</h2>
                
            </div> 
                   
        </div>

    </div>
    
   
</template>

<style lang="scss" scoped>
    
</style>