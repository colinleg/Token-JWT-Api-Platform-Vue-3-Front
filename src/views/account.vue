<template>
    <div>
        <div class="flex flex-col items-start">
            <h1 class="text-xl font-bold mt-8 ml-8">Bienvenue {{ prenom }} {{ nom }} <br> dans votre espace personnel </h1>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

    // import mapGetters from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                prenom: 'getPrenom',
                nom: 'getNom'
            })
               
            // ])
        }
    }
</script>

<style lang="scss" scoped>

</style>