<template>
    <div class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
        <!-- modal -->
        <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3">
            <!-- modal header -->
            <div class="border-b px-4 py-2 flex justify-between items-center">
                <h3 class="font-semibold text-lg">Nouvelle Sous-Catégorie</h3>
                <button @click="cancelModal(`#addSousCat_${this.category}`)" class="text-black close-modal">&cross;</button>
            </div>
            <!-- modal body -->
            <div class="p-3 flex justify-between items-center">
                <label for="nomSousCategorie">Nom de la sous-catégorie</label>
                <input type="text" id="nomSousCategorie" class="border border-gray-300 rounded p-1">
            </div>
            <div class="flex justify-end items-center w-100 border-t p-3">
                <button @click="cancelModal(`#addSousCat_${this.category}`)" class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal">Retour</button>
                <button @click="addSousCategorie" class="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">Ajouter la categorie</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
    props: {
        category : String
    },
    computed: {
        ...mapGetters({
            token: 'getToken'
        })
    },
    methods: {
        ...mapActions({
            toggleSubCatWanted: 'toggleNewSubCatWanted',
            setWhereCreateSubcat: 'setWhereCreateSubcat'
        }),
        addSousCategorie(){
            // Wanted : Subcat
            this.toggleSubCatWanted();
            
            this.setWhereCreateSubcat(this.category);

            let config = {
                headers : {
                    Authorization: 'Bearer ' + this.token
                }
            };


            let data = {
                nom : document.querySelector('#nomSousCategorie').value,
                category : this.category
            };

            axios.post('http://127.0.0.1:8000/api/sub_categories', data, config)
                .then(res => {
                    if(res.status == 200 || res.status == 201){
                        this.toggleSubCatWanted();
                        this.cancelModal(`#addSousCat_${this.category}`);
                        this.showModal('#AddSousCategorieSuccessModal');

                    }
                    
                })
                .catch(err => {
                    if(err.response){
                        if(err.response.status === 401 && err.response.statusText == "Unauthorized"){
                            this.cancelModal(`#addSousCat_${this.category}`);
                            this.showModal('#LoginModal');
                        }
                    }
                });     
        },
        // reloadCategorieList(){
        //     this.$emit("reload-categories-list");
        // },
        cancelModal(nomModal){
                let modal = document.querySelector(nomModal);
                modal.classList.add('hidden');
        },
        showModal(nomModal){
                let modal = document.querySelector(nomModal);
                modal.classList.remove('hidden');
        },
    }
}
</script>