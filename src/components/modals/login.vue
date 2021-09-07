<template>
    <div id="login-modal" class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
        
        <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3">
            

            <div class="border-b px-4 py-2 flex justify-between items-center bg-green-500 text-white">
                <h3 class="font-semibold text-lg">Connectez-vous pour créer une catégorie</h3>
                <button @click="cancelModal('#LoginModal')" class="text-black close-modal">&cross;</button>
            </div>

            
            <div class="flex flex-col w-100 border-t p-3">

                <div class="flex flex-col justify-start items-start  ml-8 my-16">
                    <label for="email" class="font-semibold mb-2">Adresse e-mail : </label>
                    <input type="text" id="email" class="border border-gray-300 rounded p-2">
                </div>
                
                <div class="flex flex-col justify-start items-start ml-8">
                    <label for="pass" class="font-semibold mb-2">Mot de passe : </label>
                    <input type="text" id="pass" class="border border-gray-300 rounded p-2">
                </div>

                <div class="w-full flex flex-col justify-end items-end">
                    <button @click="callLogin()" class="my-8 mr-8 border border-gray-300 py-2 px-4 rounded bg-blue-600 text-white">Connexion</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import { mapActions, mapGetters }  from 'vuex';

    export default {

        computed: {
            ...mapGetters({
                connect: 'getConnected',
                token: 'getToken'
            })
        },
        methods: {
            ...mapActions(['login']),

            callLogin(){
                let email = document.querySelector('#email').value;
                let pass = document.querySelector('#pass').value;

                let data = {
                    "email": email,
                    "password": pass,
                };

                this.login(data);
            },

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

<style lang="scss" scoped>

</style>