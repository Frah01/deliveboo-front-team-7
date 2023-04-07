<script>
    export default {
        name: 'AppHeader',
        data() {
            return {
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
                ]
            }
        },
        methods: {
            cartItems(){
                let cartItems = localStorage.length;
                return cartItems;
            }
        }
    };
</script>
<template lang="">
    <!-- <header>
        <nav class="navbar navbar-expand-md navbar-expand-lg sticky-top p-2 shadow deliveboo-navbar d-flex justify-content-between">
            <div class="col-3">
                <div class="container-logo" >
                    <router-link :to="{ name: 'homepage'}" >
                        <img src="https://smallprintpizza.com.au/wp-content/uploads/deliveroo-logo.png" alt="logo deliveboo">
                    </router-link>
                </div>
            </div>
            <div class="">
                <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-light"></span>
                </button>
                <div class="collapse navbar-collapse container-links" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item links"  v-for="(item,index) in menuItems" :key="index">
                            <router-link :to="{ name: item.routeName}" class="nav-link login-button">
                            {{ item.label }}
                            </router-link>
                        </li>
                        <li class="nav-item dropdown d-flex">
                            <a class="nav-link dropdown-toggle login-button" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Accedi
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item login-button" href="http://localhost:8000/login">Login</a>
                                <a class="dropdown-item login-button" href="http://localhost:8000/register">Register</a>
                            </div>
                            <div class="container-cart">
                                <img class="cart" src="https://cdn-icons-png.flaticon.com/128/4160/4160115.png" alt="">
                                <div class="cart-badge">{{ cartItems() }}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header> -->
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
                    <!-- <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon text-light"></span>
                    </button> -->
                    <div class=" container-links" id="navbarSupportedContent">
                        <ul class="navbar-nav container-lista">
                            <li class="nav-item links"  v-for="(item,index) in menuItems" :key="index">
                                <router-link :to="{ name: item.routeName}" class="nav-link login-button">
                                {{ item.label }}
                                </router-link>
                            </li>
                            <li class="nav-item dropdown d-flex ">
                                <a class="nav-link dropdown-toggle login-button accedi" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Accedi
                                </a>
                                <a class="nav-link dropdown-toggle login-button menu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Menù </a>
                                <div class="container-cart">
                                    <img class="cart" src="https://cdn-icons-png.flaticon.com/128/4160/4160115.png" alt="">
                                    <div class="cart-badge">{{ cartItems() }}</div>
                                </div>
                                <ul class="dropdown-menu dropdown-bg">
                                    <a class="dropdown-item login-button" href="http://localhost:8000/login">Login</a>
                                    <a class="dropdown-item login-button" href="http://localhost:8000/register">Register</a>
                                    <li class="nav-item links-dropdown"  v-for="(item,index) in menuItems" :key="index">
                                        <router-link :to="{ name: item.routeName}" class=" login-button dropdown-item">
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
       

</template>
<style lang="scss">
    .deliveboo-navbar {
        background-color: #00CDBE;
        width: 100%;
        height: 10vh;

    .container-logo {
        width: 250px;
        height: 70%;

        .logo-small{
                display: none;
        }
        .logo-img {
            width: 100%;
            overflow-y: hidden;
            color: white;
            padding-left: 20px;
        }

    }

    .container-links{

        .dropdown-bg{
            background-color:#00CDBE ;
            border: 2px solid #D0EB99 ;

            .links-dropdown{
                display: none;
            }
        }
        
        text-align: right;
            .login-button{
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

            .menu{
                display: none;
            }
        
            .container-cart{
                width: 50px;
                height: 50px;
                position: relative;
                .cart{
                    width: 100%;
            
                }
                .cart-badge{
                    position: absolute;
                    top: 10% ;
                    right: 8%;
                    background-color: #e02e2e;
                    border-radius: 10px;
                    font-size: 12px;
                    font-weight: 500;
                    text-align: center;
                    color: rgb(240, 240, 240) ;
                    width: 18px;
                    height: 18px;
                }
            }
    }



 }

 @media screen and (max-width:1000px) {

    .deliveboo-navbar{
        height: 100%;

        .container-logo{
            width: 150px;
            
            .logo-img{
                display: none;
            }

            .logo-small{
                display: block;
                width: 90%;
                height: 90px;
                overflow-y: hidden;
                color: white;
            }
        }
        .container-links{
            
            .container-lista{
                height: 40px;
                
                .dropdown-bg{
                    position: absolute;
                    top: 90%;
                    left: -30%;
                }
                .links{
                    display: none;
                }

                .links-dropdown{
                    display: block;
                }

                .cart{
                    width: 45px;
                    height: 45px;
                }
            }

            .accedi{
                display:none;
            }

            .menu{
                display: block;
            }
        }
    }

    
 }

</style>