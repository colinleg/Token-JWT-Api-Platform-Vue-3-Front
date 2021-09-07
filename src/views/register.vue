<template>

    <div class="flex flex-col justify-start items-center">

        <div class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 hidden">
            <!-- modal -->
            <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3">
                <!-- modal header -->
                <div class="border-b px-4 py-2 flex justify-between items-center bg-green-600 text-white">
                    <h3 class="font-semibold text-lg">Votre compte a bien été crée !</h3>
                    <button @click='closeModal' class="text-black close-modal">&cross;</button>
                </div>
                <!-- modal body -->
                <div class="flex justify-center items-center w-100 border-t p-3">
                    <p>Vous pouvez dès à présent <router-link to="/login" class="text-blue-800 underline">vous connecter</router-link></p>
                </div>
            </div>
        </div>

        <h1 class="mt-8 font-bold text-2xl">Créer un compte</h1>

        <div class="md:w-1/3 flex justify-between items-center mt-8">
            <label for="nom">Nom :</label>
            <input type="text" id="nom" class="border border-gray-300 rounded p-2">
        </div>

        <div class="md:w-1/3 flex justify-between items-center mt-8">
            <label for="prenom">Prenom :</label>
            <input type="text" id="prenom" class="border border-gray-300 rounded p-2">
        </div>

        <div class="md:w-1/3 flex justify-between items-center mt-8">
            <label for="email">Adresse e-mail :</label>
            <input type="text" id="email" class="border border-gray-300 rounded p-2">
        </div>

        

        <div class="md:w-1/3 flex justify-between items-center mt-8">
            <label for="pass">Mot de passe :</label>
            <input type="text" id="pass" class="border border-gray-300 rounded p-2">
        </div>

        <div class="md:w-1/3 flex justify-between items-center mt-8">
            <label for="confirm">Confirmez le mot de passe :</label>
            <input type="text" id="confirm" class="border border-gray-300 rounded p-2">
        </div>

        <button @click="register" class="mt-16 p-2 px-4 border border-gray-300 rounded bg-green-600 text-white shadow-lg">S'inscrire</button>
        
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        methods: {
            register(){
                let nom = document.querySelector('#nom').value;
                let prenom = document.querySelector('#prenom').value;
                let email = document.querySelector('#email').value;
                let pass = document.querySelector('#pass').value;

                let requestBody = {
                    "nom": nom,
                    "prenom": prenom,
                    "email": email,
                    "plainPass": pass,
                    "Adminkey": null
                };

                axios.post('http://127.0.0.1:8000/api/users', requestBody)
                        .then(res => {
                            if(res.statusText === 'Created'){
                                let modal = document.querySelector('.modal');
                                modal.classList.remove('hidden');
                            }
                        });
            },
            closeModal(){
                let modal = document.querySelector('.modal');
                modal.classList.add('hidden');
            }
        }
    }
</script>

<style lang="css" scoped>

</style>