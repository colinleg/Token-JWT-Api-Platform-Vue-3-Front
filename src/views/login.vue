<template>
    <div class="login flex justify-center">
        <div name="container" class="flex flex-col justify-center items-center w-2/3 border border-gray-300 mt-8 shadow-lg p-2">
            <h1 class="text-2xl font-bold mt-16 ">Se connecter</h1>

            <div class="md:w-1/2 flex justify-between items-center my-16">
                <label for="email">Adresse e-mail : </label>
                <input type="text" id="email" class="border border-gray-300 rounded p-2">
            </div>
            
            <div class="md:w-1/2 flex justify-between items-center">
                <label for="pass">Mot de passe : </label>
                <input type="text" id="pass" class="border border-gray-300 rounded p-2">
            </div>

            <div class="md:w-1/2 flex justify-end items-center">
                <button @click="connection" class="my-8 border border-gray-300 py-2 px-4 rounded bg-blue-600 text-white">Connexion</button>
            </div>
        </div>  
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            connect: 'getConnected',
            token: 'getToken'
        })
    },
    methods: {
        ...mapActions(['login']),

        connection(){
            let email = document.querySelector('#email').value;
            let pass = document.querySelector('#pass').value;

            let data = {
                "email": email,
                "password": pass
            };

            this.login(data)

            this.$router.push('/account')
        }
    }
}
</script>

<style lang="css" scoped>

</style>