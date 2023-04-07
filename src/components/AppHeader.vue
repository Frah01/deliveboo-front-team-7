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
    }
};
</script>

<template lang="">
    <header class="navbar navbar-dark sticky-top flex-md-nowrap p-2 shadow deliveboo-navbar">
        <div class="navbar-brand col-md-3 col-lg-2 my-2 container-logo" >
            <router-link :to="{ name: 'homepage'}" >
                <img src="https://smallprintpizza.com.au/wp-content/uploads/deliveroo-logo.png" alt="logo deliveboo">
            </router-link>
        </div>
        <div class="col-md-3 col-lg-4 my-2">
            <ul class="d-flex list-unstyled justify-content-center align-content-center my-0">
                <li class="nav-item mx-5 " v-for="(item,index) in menuItems" :key="index">
                    <router-link :to="{ name: item.routeName}" class="login-button">
                        {{ item.label }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="col-md-3 col-lg-2 my-2 contenitore-link">
            <a class="login-button" href="http://localhost:8000/login">Login</a>
            <a class="login-button" href="http://localhost:8000/register">Registrati</a>
            <div class="container-cart">
                <img class="cart" src="https://cdn-icons-png.flaticon.com/128/4160/4160115.png" alt="">
                <div class="cart-badge">{{ store.qta_items }}</div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.deliveboo-navbar {

    background-color: #00CDBE;
    width: 100%;
    height: 10vh;

    .container-logo {
        width: 250px;

        img {
            width: 100%;
            overflow-y: hidden;
            color: white;
            padding-left: 20px;
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

    .container-cart {
        width: 50px;
        height: 50px;
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
</style>