<template>
    <div class="home">
        <h1 class="text-green-600 text-2xl text-center mt-12 font-bold">Un forum avec Api Platform et JWT 3</h1>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        data(){

        },
        methods : {
            sendRequest(){
                let nomValue = document.querySelector('#nom').value;
                let contenuValue = document.querySelector('#contenu').value;
                let auteurValue = document.querySelector('#auteur').value;

                let data = {
                    'nom': nomValue,
                    'contenu': contenuValue,
                    'auteur': auteurValue
                }
                console.log(data);

                axios.post('https://127.0.0.1:8000/api/cours', data)
                    .then(res => console.log(res))
            }
        }
        
    }
</script>

<style lang="css" scoped>

</style>