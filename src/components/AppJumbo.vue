<script>
export default {
    
}
</script>

<template lang="">
    <div class="jumbotron-deliveroo flex-carosello">
    <div class="title-jumbo">
        <h1 >Benvenuto su Deliveboo! Ordina i tuoi piatti preferiti nella città di <strong> Roma </strong>comodamente da casa tua!</h1>
    </div>
    <div class="slider">
        <div class="slide-track">
            <div class="slide">
                <img src="https://wallpaperaccess.com/full/826919.jpg" height="100" width="250" alt="" />
            </div>
            <div class="slide">
                <img src="https://wallpaperaccess.com/full/767390.jpg" height="100" width="250" alt="" />
            </div>
            <div class="slide">
                <img src="https://images8.alphacoders.com/103/1032061.jpg" height="100" width="250" alt="" />
            </div>
            <div class="slide">
                <img src="https://images6.alphacoders.com/109/1092902.jpg" height="100" width="250" alt="" />
            </div>
            <div class="slide">
                <img src="https://wallpaperaccess.com/full/767398.jpg" height="100" width="250" alt="" />
            </div>
            <div class="slide">
                <img src="https://wallpaperaccess.com/full/767316.jpg" height="100" width="250" alt="" />
            </div>
            <div class="slide">
                <img src="http://yesofcorsa.com/wp-content/uploads/2019/05/4K-Egg-Breakfast-Wallpaper-For-Desktop.jpg" height="100" width="250" alt="" />
            </div>
            <div class="slide">
                <img src="https://images6.alphacoders.com/910/thumb-1920-910443.jpg" height="100" width="250" alt="" />
            </div>
            <div class="slide">
                <img src="https://backiee.com/static/wpdb/wallpapers/1000x563/181547.jpg" height="100" width="250" alt="" />
            </div>
            <div class="slide">
                <img src="https://wallpaperbat.com/img/420093-food-pizza-wallpaper-hd-desktop-and-mobile-background.jpg" height="100" width="250" alt="" />
            </div>
            <div class="slide">
                <img src="https://tse1.mm.bing.net/th?id=OIP.CfYjDCo7mtHKc3-DT5fooAHaE8&pid=Api" height="100" width="250" alt="" />
            </div>
            <div class="slide">
                <img src="https://c4.wallpaperflare.com/wallpaper/435/472/996/sandwich-4k-for-desktop-wallpaper-preview.jpg" height="100" width="250" alt="" />
            </div>
            <div class="slide">
                <img src="https://tse3.mm.bing.net/th?id=OIP.DVAM4yhTLhylYFYhpAYaEwHaEK&pid=Api" height="100" width="250" alt="" />
            </div>
            <div class="slide">
                <img src="https://c4.wallpaperflare.com/wallpaper/303/793/304/buffet-meal-food-brunch-wallpaper-thumb.jpg" height="100" width="250" alt="" />
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">

    .jumbotron-deliveroo {
    width: 100vw;
    height: 850px;
    background-image: url('https://images8.alphacoders.com/942/thumb-1920-942495.jpg');
    background-position: center;
    background-size: cover;


    .title-jumbo {
        width: 90%;
        margin: 0 auto;
        color: white;
        display: flex;
        justify-content: right;

        h1 {
            padding: 100px 0;
            width: 50%;
            font-size: 35px;
            font-style: italic;
            line-height: 45px;

        }

        strong {
            color: #00CDBE;
        }
    }

    .slider {
        box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
        height: 150px;
        width: 100vw;
        overflow: hidden;
        margin-bottom: 20px;


        &::after {
            transform: rotateZ(180deg);
        }


        .slide-track {
            animation: scroll 40s linear infinite;
            display: flex;
            width: calc(250px * 14);
        }

        .slide {
            height: 150px;
            width: 350px;
            border: 1px solid white;
            border-radius: 20px;
            margin: 0 5px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                overflow: hidden;
                border-radius: 20px;
            }
        }

        @keyframes scroll {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(calc(-250px * 6.5))
            }

            0% {
                transform: translateX(0);
            }
        }
    }

}

.flex-carosello {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}


</style>