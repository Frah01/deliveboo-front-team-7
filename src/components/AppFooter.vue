<script>
export default {
    name: 'AppFooter',
}
</script>
<template lang="">
    <div class="container-fluid backg-chi-siamo">
        <div class="row fst-italic" >
            <h2 class="fw-semibold text-center p-5 text-white">Chi siamo</h2>
        </div>
        <div class="row">
            <div class="d-flex justify content-center py-3 px-0">
                <div class="col-3 d-flex justify-content-center">
                    <div class="css-border user one">
                        
                    </div>
                </div>
                <div class="col-3 d-flex justify-content-center">
                    <div class="css-border user one">

                    </div>
                </div>
                <div class="col-3 d-flex justify-content-center">
                    <div class="css-border user one">
                        
                    </div>
                </div>
                <div class="col-3 d-flex justify-content-center">
                    <div class="css-border user one">
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="row fst-italic text-center mb-5 text-white">
            <div class="col-3">
                <h3>Nome</h3>
                <p class="text-break ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ut ratione id ipsum similique natus, quod distinctio, quam ad voluptates et dignissimos tempore reprehenderit, accusamus fugit dolor tempora? Dignissimos, minus.</p>
            </div>
            <div class="col-3">
                <h3>Nome</h3>
                <p class="text-break ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ut ratione id ipsum similique natus, quod distinctio, quam ad voluptates et dignissimos tempore reprehenderit, accusamus fugit dolor tempora? Dignissimos, minus.</p>
            </div>
            <div class="col-3">
                <h3>Nome</h3>
                <p class="text-break ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ut ratione id ipsum similique natus, quod distinctio, quam ad voluptates et dignissimos tempore reprehenderit, accusamus fugit dolor tempora? Dignissimos, minus.</p>
            </div>
            <div class="col-3">
                <h3>Nome</h3>
                <p class="text-break ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ut ratione id ipsum similique natus, quod distinctio, quam ad voluptates et dignissimos tempore reprehenderit, accusamus fugit dolor tempora? Dignissimos, minus.</p>
            </div>
        </div>
        <div class="row backg-footer">
            <div class="offset-2 col-8 d-flex my-5 " >
                <div class="col-3 me-2">
                    <div class="card backg-cards p-4 pb-0 h-100">
                        <ul class="list-unstyled text-white lh-lg">
                            <li>
                                <h5>Scopri Deliveboo</h5>
                            </li>
                            <li>
                                <a class="text-decoration-none" href="">Investitori</a>
                            </li>
                            <li>
                                <a class="text-decoration-none" href="">Chi siamo</a>
                            </li>
                            <li>
                                <a class="text-decoration-none" href="">Ristoranti</a>
                            </li>
                            <li>
                                <a class="text-decoration-none" href="">Altro</a>
                            </li>
                            <li>
                                <a class="text-decoration-none" href="">Pressroom</a>
                            </li>
                            <li>
                                <a class="text-decoration-none" href="">Programmazione</a>
                            </li>
                            <li>
                                <a class="text-decoration-none" href="">Design</a>
                            </li>
                            <li>
                                <a class="text-decoration-none" href="">Lavora con noi</a>
                            </li>
                            <li>
                                <a class="text-decoration-none" href="">Diventa nostro partner</a>
                            </li>
                        </ul>
                    </div>
            </div>
            <div class="col-3 me-2">
                <div class="card backg-cards p-4 pb-0 h-100">
                        <ul class="list-unstyled text-white lh-lg">
                            <li>
                                <h5>Note Legali</h5>
                            </li>
                            <li>
                                <a class="text-decoration-none" href="">Termini & Condizioni</a>
                            </li>
                            <li>
                                <a class="text-decoration-none" href="">Informativa sulla privacy</a>
                            </li>
                            <li>
                                <a class="text-decoration-none" href="">Cookies</a>
                            </li>
                        </ul>
                    </div>
            </div>
            <div class="col-3 me-2">
                <div class="card backg-cards p-4 pb-0 h-100">
                        <ul class="list-unstyled text-white lh-lg">
                            <li>
                                <h5>Aiuto</h5>
                            </li>
                            <li>
                                <a class="text-decoration-none" href="">Contatti</a>
                            </li>
                            <li>
                                <a class="text-decoration-none" href="">Faq</a>
                            </li>
                            <li>
                                <a class="text-decoration-none" href="">Tipo di cucina</a>
                            </li>
                        </ul>
                    </div>
            </div>
            <div class="col-3">
                    <div class="card backg-cards p-4 pb-0 h-100">
                        <ul class="list-unstyled text-white lh-lg">
                            <li>
                                <h5>Porta deliveroo con te</h5>
                            </li>
                            <li>
                                <div class="d-flex mt-3">
                                    <a class="me-3" href=""><i class="fa-brands fa-facebook fa-2x"></i></a>
                                    <a class="me-3" href=""><i class="fa-brands fa-twitter fa-2x"></i></a>
                                    <a class="me-3" href=""><i class="fa-brands fa-instagram fa-2x"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
            </div>
            
    </div>
</template>
<style lang="scss" scoped>
    .backg-footer{
    background-color: rgba(46,51,51,255)
        
    }
    .backg-cards{
        background-color: rgba(67,72,72,255);
    }
    .backg-chi-siamo{
        background-color: #00CDBE;
    }
    .user {
  display: inline-block;
  width: 150px;
  height: 150px;
  border-radius: 50%;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  transition: 0.5s all;

  &:hover{
    box-shadow: 1px 1px 10px grey;
    width: 200px;
    height: 200px;
  }
}

.one {
  background-image: url('https://via.placeholder.com/400x200');
}

.two {
  background-image: url('https://via.placeholder.com/200x200');
}

.three {
  background-image: url('https://via.placeholder.com/200x400');
}

.css-border {
  border: 4px solid rgba(208, 235, 153, 0.7);
  padding: 2px;
  border-radius: 50%;
  border-top-color:  rgba(208, 235, 153, 0.7);
  border-left-color:  rgba(208, 235, 153, 0.7);
  width: 150px;
  height: 150px;

  &:hover{
    width: 200px;
    height: 200px;
  }
}


    a{
        color: white;
        &:hover{
            color:  #00CDBE;
        }
    }

</style>