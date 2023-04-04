<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'RicercaCat',

    data() {
        return {
            store,
            categories: '',
            selected_categories: []
        }
    },
    methods: {
        getCategories() {
            axios.get(`${this.store.baseUrl}/api/categories`).then((response) => {

                this.categories = response.data.results;

            });
        },
        sendCategory(index) {
            this.categories[index - 1].attivo = !this.categories[index - 1].attivo;
            if (this.selected_categories.some(element => element.id === this.categories[index - 1].id)) {
                let i = this.selected_categories.indexOf(this.categories[index - 1]);
                this.selected_categories.splice(i, 1);
            }
            else {
                this.selected_categories.push(this.categories[index - 1]);
            }
            this.$emit('search', this.selected_categories);
        }
    },
    mounted() {
        this.getCategories();
    },


}

</script>
<template lang="">

        <div class="container-fluid backg-color">
            <h2 class="titolo text-center mt-2">Categorie</h2>
            <div v-for="category in this.categories" :key="category.id" class="badge-div">
                <button type="button" 
                        class="my-2 mx-1  badge btn btn-secondary"
                        :class="category.attivo ? 'cate-attiva' : ''"
                        @click="sendCategory(category.id)">{{category.nome}}
                </button>
            </div>
        </div>
   
</template>

<style lang="scss" scoped>
.backg-color {
    margin-top: 50px;
}

.badge-div{
    width: 60%;
    margin: 0 auto;
    display: block;
}
.badge {
    width: 100%;
    color: #00CDBE;
    border: 1px solid #00CDBE;
    border-radius: 20px;
    margin-top: 5px;
    padding: 15px 10px;
    font-size: 20px;
    background-color: white;

    &:hover {
        color: white;
        background-color: #00CDBE;
    }
}

.cate-attiva{
    color: white;
    background-color: #00CDBE;
    border: solid 3px rgb(68, 0, 99);
}

.titolo {
    color: rgb(68, 0, 99);
    margin-bottom: 30px;
    font-style: italic;
}
</style>