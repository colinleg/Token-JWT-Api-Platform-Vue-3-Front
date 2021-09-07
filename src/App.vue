<template>
  <div id="nav" class=" bg-red-800 text-white h-16 flex justify-between items-center shadow-lg">

    <div class="w-1/2  flex justify-around">

      <div class="font-bold">
        <router-link to="/">Home</router-link><br />
      </div>

      <div class="font-bold">
        <router-link to="/categories">Categories</router-link><br />
      </div>
    </div>

  <div class="w-1/3 font-bold">
    <div v-if="isConnected" class="flex justify-around items-center">
      <router-link to="/account" class=" border border-white p-2 bg-red-700 rounded">{{ prenom }} {{ nom }}</router-link>
      <router-link to="/logout" class="ml-4">Déconnexion</router-link>
    </div> 

    <div v-else class="flex justify-around items-center">
      <router-link to="/login">Connexion</router-link>
      <router-link to="/register">Inscription</router-link>
    </div>
   
  </div>

  </div>

  

  <router-view/>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  data(){
    return {

    }
  },
  computed :{
    ...mapGetters({
      isConnected: 'getConnected',
      prenom: 'getPrenom',
      nom: 'getNom'
    })
  },
  

}
</script>
<style scoped>

</style>
