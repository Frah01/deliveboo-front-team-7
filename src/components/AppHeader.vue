<script>
import { store } from '../store';
const STORAGE_KEY = 'deliveboo-storage-key'
const QTA_ITEMS = 'qta-storage-items'

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            menuItems: [
                {
                    label: 'Chi Siamo',
                    routeName: 'chi-siamo',
                },
                {
                    label: 'Contatti',
                    routeName: 'contatti',
                },
                {
                    label: 'Lavora con noi',
                    routeName: 'collab',
                },
            ],
            qta_items: 0
        }
    },
    methods: {
        prezzoTotale() {
            let total_price = 0;
            let all_dishes = store.cart_off_canvas;
            for (let dish in all_dishes) {
                total_price += all_dishes[dish].prezzo * all_dishes[dish].quantita;
            }
            return total_price.toFixed(2);
        },
        Clear() {
            localStorage.clear();
            location.reload();
        },
    },
};
</script>

<template lang="">
    <header>
        <nav class="navbar navbar-expand-lg sticky-top p-2 shadow deliveboo-navbar d-flex justify-content-between">
            <div class="container-fluid">
                <div class="container-logo col-3" >
                    <router-link :to="{ name: 'homepage'}" >
                        <img class="logo-img" src="https://smallprintpizza.com.au/wp-content/uploads/deliveroo-logo.png" alt="logo deliveboo">
                        <img class="logo-small" src="https://tse1.mm.bing.net/th?id=OIP.0y4xvbGfJZzXF6n-bMXKXgHaHa&pid=Api" alt="logo-small">
                    </router-link>
                </div>
                <div class="hamburger">
                    <div class=" container-links" id="navbarSupportedContent">
                        <ul class="navbar-nav container-lista d-flex align-items-center">
                            <li class="nav-item links"  v-for="(item,index) in menuItems" :key="index">
                                <router-link :to="{ name: item.routeName}" class="nav-link login-button">
                                {{ item.label }}
                                </router-link>
                            </li>
                            <li class="nav-item dropdown p-0 d-flex align-items-center">
                                <a class="nav-link dropdown-toggle login-button accedi" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Accedi
                                </a>
                                <a class="nav-link dropdown-toggle login-button menu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Menù </a>
                                <button class="btn btn-link container-cart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    <img class="cart" src="https://cdn-icons-png.flaticon.com/128/4160/4160115.png" alt="">
                                    <div class="cart-badge">{{ store.qta_items }}</div>
                                </button>
                                    
                               
                                <ul class="dropdown-menu dropdown-bg">
                                    <a class="dropdown-item login-button" href="http://localhost:8000/login">Login</a>
                                    <a class="dropdown-item login-button" href="http://localhost:8000/register">Register</a>
                                    <li class="nav-item links-dropdown"  v-for="(item,index) in menuItems" :key="index">
                                        <router-link :to="{ name: item.routeName}" class=" login-button dropdown-item" >
                                            {{ item.label }}
                                        </router-link>
                                    </li>
                                    
                                </ul>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h3 class="offcanvas-title" id="offcanvasRightLabel">Il tuo carrello</h3>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column justify-content-between">
            <div class="overflow-y-auto" v-if="store.cart_off_canvas.length != 0">
                <div v-for="dish in store.cart_off_canvas">
                    <div class=" mb-3" v-if="dish.quantita != 0">
                        <div>
                            <div class="row g-0">
                                <div class="col-4">
                                    <div v-if="dish.immagine.includes('dish_image')">
                                            <img class="card-img-top rounded shadow" :src="`${store.baseUrl}/storage/${dish.immagine}`">
                                    </div>
                                    <div v-else>
                                        <img class="card-img-top rounded shadow" :src="dish.immagine != null ? `${dish.immagine}`: 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'" alt="">
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="card-body p-3 ">
                                        <p class="fw-semibold "><span>{{ dish.nome }}</span></p>
                                        <p class="fw-semibold">Prezzo: <span>{{ dish.prezzo }} &euro;</span></p>
                                        <p class="fw-semibold mb-0">Quantita: <span>{{ dish.quantita }} </span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="store.cart_off_canvas.length == 0">
                <img class="object-fit-contain empty-cart-img w-100"  src="../../public/empty-cart.png" alt="">
            </div>
            <div v-else>
                <div class="card-footer backg-body" v-if="this.prezzoTotale() != 0">
                    <div class="d-flex justify-content-between align-items-center" >
                        <div>
                            <router-link :to="{ name: 'form-payments'}">
                                <button class="btn btn-sm indietro text-white fw-semibold me-2" data-bs-dismiss="offcanvas">Paga</button>
                            </router-link>
                            <!-- <router-link :to="{ name: 'form-payments'}"  class="btn btn-sm indietro text-white fw-semibold me-2" title="Paga">Paga</router-link> -->
                            <button type="submit" class="btn btn-sm btn-danger fw-semibold "  @click="Clear()" title="Svuota Carrello">Svuota</button>
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

<style lang="scss">
.deliveboo-navbar {
    background-color: #00CDBE;
    width: 100%;
    height: 10vh;


    .container-logo {
        width: 250px;
        height: 70%;

        .logo-small {
            display: none;
        }

        .logo-img {
            width: 100%;
            overflow-y: hidden;
            color: white;
            padding-left: 20px;
        }

    }

    .container-links {

        .dropdown-bg {
            background-color: #00CDBE;
            border: 2px solid #D0EB99;

            .links-dropdown {
                display: none;
            }



        }

        .login-button {
            font-weight: 600;
            font-size: 17px;
            text-decoration: none;
            color: white;
            margin-right: 20px;
            transition: color 0.5s;

            &:hover,
            &:active {
                color: rgb(68, 0, 99) !important;
            }
        }

        .menu {
            display: none;
        }

        .container-cart {
            width: 50px;
            height: 50px;
            padding: 0;
            margin: 0;
            position: relative;

            .cart {
                width: 100%;

            }

            .cart-badge {
                position: absolute;
                top: 10%;
                right: 8%;
                background-color: #e02e2e;
                border-radius: 10px;
                font-size: 12px;
                font-weight: 500;
                text-align: center;
                color: rgb(240, 240, 240);
                width: 18px;
                height: 18px;
            }
        }

    }

}

@media screen and (max-width:1000px) {

    .deliveboo-navbar {
        height: 100%;

        .container-logo {
            width: 150px;

            .logo-img {
                display: none;
            }

            .logo-small {
                display: block;
                width: 90%;
                height: 90px;
                overflow-y: hidden;
                color: white;
            }
        }

        .container-links {

            .container-lista {
                height: 40px;

                .dropdown-bg {
                    position: absolute;
                    top: 90%;
                    left: -30%;

                    .links-dropdown {
                        display: block;
                    }
                }

                .links {
                    display: none;
                }

                .accedi {
                    display: none;
                }

                .menu {
                    display: block;
                }

            }
        }


    }


}
</style>