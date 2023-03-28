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
        }
    }
</script>
<template lang="">
    <header class="z-index-nav w-100 shadow-box">
        <nav class="navbar navbar-expand-md background-nav">
            <div class="container-fluid ">
                <div class="navbar-brand">
                        <router-link :to="{ name: 'homepage'}" class="nav-link text-white">
                                <img src="#" class="logo">
                            </router-link>
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" v-for="(item,index) in menuItems" :key="index">
                            <router-link :to="{ name: item.routeName}" class="nav-link text-white">
                                {{ item.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style lang="scss">
    .background-nav {
        background-color: rgb(46, 146, 46);
    }


        .shadow-box{
            box-shadow: 1px 1px 5px solid black;
        }

</style>