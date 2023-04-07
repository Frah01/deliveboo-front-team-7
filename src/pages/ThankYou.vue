<script>

export default {
    data(){
        return{
            loading: true
        }
    },
    methods: {
        loader(){
            setTimeout(() => {
                this.loading = false
            }, 3000) 
        }
    },
    mounted(){
        this.loader();
        localStorage.clear();
    }
}

</script>
<template lang="">
    <div>
        <div v-if="loading" class="container-loader">
            <h1>Stiamo inviando la richiesta...</h1>
            <div class="loader">
            </div>
        </div>
        <div v-else class="container-content">
            <h1 class="grazie">Grazie per averci contattato!</h1>
            <p>Abbiamo preso in carico la tua richiesta, a breve riceverai una mail di conferma con tutte le indicazioni!</p>
            <router-link :to="{ name : 'homepage'}" class="bottone-thankyou" >Torna alla Homepage</router-link>
        </div>
    </div>
</template>
<style lang="scss" scoped>

    .container-loader{
        width: 100%;
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;

        h1{
            color: rgb(68, 0, 99) ;
            font-style: italic;
            margin-bottom: 30px;
        }
        .loader {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            transition: 0.5;
            border: 8px solid #d1914b;
            --c:radial-gradient(farthest-side, #d64123 94%,#0000);
            --b:radial-gradient(farthest-side, #000 94%,#0000);
            background:
                var(--c) 11px 15px,
                var(--b) 6px 15px,    
                var(--c) 35px 23px,
                var(--b) 29px 15px,    
                var(--c) 11px 46px,
                var(--b) 11px 34px,    
                var(--c) 36px 0px,
                var(--b) 50px 31px,
                var(--c) 47px 43px,
                var(--b) 31px 48px,    
                #f6d353; 
            background-size: 15px 15px,6px 6px;
            background-repeat: no-repeat;
            animation: hu4 3s infinite;
    
    
            @keyframes hu4 {
            0%     {-webkit-mask:conic-gradient(#0000 360deg     ,#000 0)}
            16.67% {-webkit-mask:conic-gradient(#0000 300deg ,#000 0)}
            33.33% {-webkit-mask:conic-gradient(#0000 240deg,#000 0)}
            50%    {-webkit-mask:conic-gradient(#0000 180deg,#000 0)}
            66.67% {-webkit-mask:conic-gradient(#0000 120deg,#000 0)}
            83.33% {-webkit-mask:conic-gradient(#0000 60deg,#000 0)}
            100%   {-webkit-mask:conic-gradient(#0000 0deg,#000 0)}
            }
    }
}

    .container-content{
        width: 50%;
        height: 90vh;
        text-align: center;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;

        h1{
            display: block;
            color: rgb(68, 0, 99) ;
            font-style: italic;
            margin-bottom: 10px;
        }

        p{
            font-size: 20px;
            display: block;
            color: rgb(68, 0, 99) ;
            font-style: italic;
            margin-bottom: 30px;
        };

        .bottone-thankyou {
            text-decoration: none;
            padding: 0.6em 1.2em;
            margin-top: 20px;
            border-radius: 10px;
            cursor: pointer;
            color: white;
            border: none;
            background: linear-gradient(120deg, darkmagenta, #00CDBE, #D0EB99);
            background-size: 200% 100%;
            background-position: 100% 0;
            transition: background-position .5s;

            &:hover {
                background-position: 0 0;
            }
        }
}
</style>