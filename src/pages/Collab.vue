<script>
export default {
    name: 'Collab',
}
</script>
<template lang="">
         <div class="container-chisiamo">
            <div class="row row-chisiamo" >
                <div class="col-12 mt-5 text-center">
                    <lord-icon class="bike"
                        src="https://cdn.lordicon.com/nnqjjehw.json"
                        trigger="loop">
                    </lord-icon>
                    <h2 >Diventa un rider anche tu!</h2>
                    <p>La nostra proposta ai rider si basa su ciò che conta di più per loro. Come facciamo a sapere di cosa si tratta? Chiediamo e ascoltiamo sempre la loro opinione. In questo modo, abbiamo potuto sviluppare un’offerta che mette in primo piano ciò di cui hanno bisogno: orari flessibili, guadagni buoni e sicurezza. Deliveroo è stata fra le prime piattaforme di consegne a domicilio al mondo a offrire l’assicurazione contro gli infortuni personali (oggi in Italia è fornita da INAIL) e un’assicurazione ulteriore per eventuali danni a cose o a terzi. La copertura è offerta a titolo gratuito e protegge i rider fin dalla loro prima consegna con Deliveroo. Will, fondatore e CEO di Deliveroo, è stato il nostro primo rider e ha effettuato consegne a tempo pieno durante il primo anno di attività dell’azienda. Insieme ad altri membri del nostro team, ad oggi consegna ancora a domicilio a cadenza regolare.</p>
                </div>
            </div>
            <div class="row row-cards justify-content-between text-center">
                <div class="col-xl-3 col-lg-5 col-md-5 col-sm-12 cards">
                    <lord-icon class="cards-img"
                        src="https://cdn.lordicon.com/nqwqiffl.json"
                        trigger="hover">
                    </lord-icon>
                    <h4>Tariffe competitive</h4>
                    <p class="text-card">Offriamo tariffe competitive per ciascun ordine consegnato. Inoltre, avrai la possibilità di ricevere mance dai clienti, che aumenteranno i tuoi guadagni e ti aiuteranno a raggiungere i tuoi obiettivi.</p>
                </div>
                <div class="col-xl-3 col-lg-5 col-md-5 col-sm-12 cards">
                    <lord-icon class="cards-img"
                        src="https://cdn.lordicon.com/tbfrtmlu.json"
                        trigger="hover">
                    </lord-icon>
                    <h4>Come aumentare i tuoi guadagni</h4>
                    <p class="text-card">Aumenta i tuoi guadagni effettuando le tue consegne di sera o nei fine settimana.</p>
                </div>
                <div class="col-xl-3 col-lg-5 col-md-5 col-sm-12 cards">
                    <lord-icon class="cards-img"
                        src="https://cdn.lordicon.com/mjmrmyzg.json"
                        trigger="hover">
                    </lord-icon>
                    <h4>Assistenza e formazione</h4>
                    <p class="text-card">Il nostro Rider Support è sempre al tuo fianco. Offriamo formazione in tema di sicurezza e un kit per effettuare le tue consegne. Per te, anche una copertura assicurativa gratuita contro gli infortuni e danni a terzi.</p>
                </div>
                <div class="col-xl-3 col-lg-5 col-md-5 col-sm-12 cards">
                    <lord-icon class="cards-img"
                        src="https://cdn.lordicon.com/uutnmngi.json"
                        trigger="hover">
                    </lord-icon>
                    <h4>Pagamenti regolari</h4>
                    <p class="text-card">Riceverai i tuoi pagamenti mensilmente, direttamente sul tuo conto o con il metodo che preferisci tu! </p>
                </div>
                <div class="col-xl-3 col-lg-5 col-md-5 col-sm-12 cards">
                    <lord-icon class="cards-img"
                        src="https://cdn.lordicon.com/xosppmqz.json"
                        trigger="hover">
                    </lord-icon>
                    <h4>Kit professionale gratuito</h4>
                    <p class="text-card">Offriamo un Rider Kit comodo, traspirante e ad alta visibilità, adatto a tutte le condizioni meteorologiche. </p>
                </div>
                <div class="col-xl-3 col-lg-5 col-md-5 col-sm-12 cards">
                    <lord-icon class="cards-img"
                        src="https://cdn.lordicon.com/vwlhfdnm.json"
                        trigger="hover">
                    </lord-icon>
                    <h4>Migliaia di ristoranti partner</h4>
                    <p class="text-card">Siamo una delle piattaforme di food delivery più note del paese ed effettuiamo consegne nella tua zona ogni giorno.</p>
                </div>
            </div>
            <div class="row row-chisiamo" >
                <div class="col-12 mt-5 text-center">
                    <lord-icon class="cards-img"
                        src="https://cdn.lordicon.com/hgvwxhhl.json"
                        trigger="loop"
                        style="width:250px;height:250px">
                    </lord-icon>
                    <h2>Inviare la candidatura è un gioco da ragazzi!</h2>
                    <p>Assicurati di avere a portata di mano la tua carta d'identità o il passaporto e un documento che attesti il tuo permesso di lavorare in Italia.</p>
                    <div>
                        <a href="https://rider.deliveroo.it/signup/where?marketing_guid=abeb32a1-ace6-40d3-b7da-ea3611a4eae9&rap_uuid=d02aa99c-d3b8-47ef-928d-10ef05e4cc91&referral_code=" class="button-candidati">Candidati subito!</a>
                    </div>
                </div>
            </div>
        </div>
</template>
<style lang="scss" scoped>
     .container-chisiamo{
        background-image: url('/public/Video senza titolo - Realizzato con Clipchamp (1).gif');
       

        .row-chisiamo{
            width: 80%;
            margin: 0 auto;
            padding: 30px ;

            .bike{
                width: 200px;
                height: 200px;
            }
            
            h2{
                color: rgb(0, 205, 190);
                font-weight: 600;
                text-shadow: 2px 2px 2px rgb(68, 0, 99) ;
            }

            p{
                color: rgb(68, 0, 99) ;
                margin-bottom: 30px;
            }

            .button-candidati{
                background-color:rgb(68, 0, 99) ;
                color: white;
                font-weight: 500;
                text-decoration: none;
                padding: 10px;
                border: none;
                border-radius: 20px;
                outline: none;
            }

        }

        .row-cards{
            width: 80%;
            margin: 0 auto;
            padding: 50px 0;

            .cards{
                background-color: rgb(254, 253, 255);
                height: 400px;
                border-radius: 20px;
                margin-top: 20px;
                margin-bottom: 20px;
                margin-right: 10px;
                padding: 10px;
                border: 2px solid rgb(0, 205, 190) ;
                box-shadow: 1px 1px 15px 1px rgb(0, 205, 190);

                .cards-img{
                    width: 90px;
                    height: 90px;
                    margin: 0 10px;
                }

                h4{
                    color: rgb(0, 205, 190);
                    font-weight: 500;
                    margin-bottom: 10px;
                    text-shadow: 1px 1px 1px rgb(68, 0, 99) ; 
                }

                .text-card{
                    font-weight: 500;
                    color: rgb(68, 0, 99);
                    font-size: 14px;
                }
            }
        }
    }
</style>