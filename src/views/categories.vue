<template>
    <div name="container" class="w-full flex flex-col justify-center items-center">
        <!-- Event Handler  -->
        

        <button @click="logWanted">log wanted</button>
        <button @click="getCategories" class="text-2xl font-bold py-8"> Catégories</button>

        <button v-if="isAdmin" @click="showModal('#AddCategorieModal')" class="bg-green-600 text-white font-bold border border-gray-300 p-2 my-6 rounded">
             Ajouter une catégorie
        </button>

        <!-- components/modals/addCategorie.vue  -->
        <AddCategorieModal @reload-categories-list="reloadCategories()" id="AddCategorieModal" class="hidden" />

        <BaseModal id="AddSousCategorieSuccessModal" class="hidden">
            <template v-slot:modalTitle>
                Votre sous-catégorie a bien été crée ! 
            </template>

            <template v-slot:modalBody>
                Créez votre premier post <a class="underline" href="#">ici</a> !
            </template>
        </BaseModal>

        <!-- components/modals/base.vue -->
        <BaseModal id="AddCategorieSuccessModal" class="hidden">
            <template v-slot:modalTitle>
                Votre catégorie a bien été crée ! 
            </template>

            <template v-slot:modalBody>
                Créez votre première sous-catégorie <a class="underline" href="#">ici</a> !
            </template>
        </BaseModal>

        <!-- components/modals/login.vue  -->
        <LoginModal id="LoginModal" class="hidden" />

        <!-- components/modals/addSousCategorie.vue  -->
        <AddSousCategorieModal v-for="nomCategorie in nomCategories" :id="'addSousCat_' + nomCategorie" :category="nomCategorie" :key="nomCategorie" class="hidden"></AddSousCategorieModal>
        
        <div class="w-11/12 md:w-4/6 bg-blue-200 justify-center rounded-xl border border-gray-400 shadow-lg">
            <div v-for="nomCategorie in nomCategories" :key='nomCategorie'>
                <div class="py-4 pl-4 font-bold flex justify-between items-center">
                    <h2 class="px-12 cursor-pointer" @click="getSousCategoriesOf(`${nomCategorie}`)"> {{ nomCategorie }}</h2>
                    <button @click="addSousCategorie(`${nomCategorie}`)" :id="`${nomCategorie}`" class="bg-blue-600 p-2 text-white rounded mr-6 font-semibold text-sm">Ajouter une sous-catégorie</button>
                </div>
                <hr class="w-11/12 ml-6">
            </div>
        </div>

    </div>
</template>

<script>

    import axios from 'axios';
    import { mapGetters }  from "vuex";
    import AddCategorieModal from '../components/modals/addCategorie.vue';
    import BaseModal from '../components/modals/base.vue';
    import LoginModal from '../components/modals/login.vue';
    import AddSousCategorieModal from '../components/modals/addSousCategorie.vue';

    export default {
    
        data(){
            return {
                nomCategories: [],
                isAdmin: true,
                
            }
        },
        computed: {
            ...mapGetters({
                isConnected: 'getConnected',
                newCatWanted: 'getNewCatWanted',
                newSubCatWanted: 'getNewSubCatWanted',
                whereCreateSubcat: 'getWhereCreateSubcat'
            })
        },
        watch: {
            isConnected(){
                if(this.isConnected){

                    this.cancelModal('#LoginModal');

                    if(this.newCatWanted){
                        this.showModal('#AddCategorieModal');
                    }
                    else if(this.newSubCatWanted){
                        this.showModal(`#addSousCat_${this.whereCreateSubcat}`)
                    }
                    
                }
            }
        },
        methods : {
            logWanted(){
                console.log('new cat wanted =' + this.newCatWanted);
                console.log('new subcat wanted =' + this.newSubCatWanted);
                console.log('whereCreateSubcat =' + this.whereCreateSubcat);
            },
            getCategories(){

                let config = {
                    params: {
                        page: 1
                    },
                    responseType: 'application/json'
                };

                axios.get('http://127.0.0.1:8000/api/categories', config)
                    .then(res => {
                        console.log(res);
                        let length = res.data['hydra:member'].length;
                        for (let i = 0; i < length ; i++){
                            this.nomCategories.push(res.data['hydra:member'][i]['nom']);
                        }
                        // console.log(this.data);
                        
                    })
            },
            getSousCategoriesOf(nomCategorie){
                console.log(nomCategorie);
                // axios.get('http://127.0.0.1:8000/api/sub_categories_')
            },
            showModal(nomModal){
                let modal = document.querySelector(nomModal);
                modal.classList.remove('hidden');
            },
            cancelModal(nomModal){
                let modal = document.querySelector(nomModal);
                modal.classList.add('hidden');
            },
            addCatSuccess(){
                this.cancelModal('#AddCategorieModal');
                this.showModal('#AddCategorieSuccessModal');
                this.datas = [];
                this.getCategories();
            },
            reloadCategories(){

                this.nomCategories = [];
                this.getCategories();

            },
            addSousCategorie(nomCat){
                this.showModal('#addSousCat_' + nomCat);
            }
        },
        mounted(){
           this.getCategories();
        },
        components: {
            AddCategorieModal, AddSousCategorieModal, BaseModal, LoginModal
        }
    }
        
       
    
    
</script>

<style lang="css" scoped>
/* Tab content - closed */
    .tab-content {
    max-height: 0;
    -webkit-transition: max-height .35s;
    -o-transition: max-height .35s;
    transition: max-height .35s;
    }
    /* :checked - resize to full height */
    .tab input:checked ~ .tab-content {
    max-height: 100vh;
    }
    /* Label formatting when open */
    .tab input:checked + label{
    /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
    font-size: 1.25rem; /*.text-xl*/
    padding: 1.25rem; /*.p-5*/
    border-left-width: 2px; /*.border-l-2*/
    border-color: #6574cd; /*.border-indigo*/
    background-color: #f8fafc; /*.bg-gray-100 */
    color: #6574cd; /*.text-indigo*/
    }
    /* Icon */
    .tab label::after {
    float:right;
    right: 0;
    top: 0;
    display: block;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5;
    font-size: 1.25rem;
    text-align: center;
    -webkit-transition: all .35s;
    -o-transition: all .35s;
    transition: all .35s;
    }
    /* Icon formatting - closed */
    .tab input[type=checkbox] + label::after {
    content: "+";
    font-weight:bold; /*.font-bold*/
    border-width: 1px; /*.border*/
    border-radius: 9999px; /*.rounded-full */
    border-color: #b8c2cc; /*.border-grey*/
    }
    .tab input[type=radio] + label::after {
    content: "\25BE";
    font-weight:bold; /*.font-bold*/
    border-width: 1px; /*.border*/
    border-radius: 9999px; /*.rounded-full */
    border-color: #b8c2cc; /*.border-grey*/
    }
    /* Icon formatting - open */
    .tab input[type=checkbox]:checked + label::after {
    transform: rotate(315deg);
    background-color: #6574cd; /*.bg-indigo*/
    color: #f8fafc; /*.text-grey-lightest*/
    }
    .tab input[type=radio]:checked + label::after {
    transform: rotateX(180deg);
    background-color: #6574cd; /*.bg-indigo*/
    color: #f8fafc; /*.text-grey-lightest*/
    }
</style>