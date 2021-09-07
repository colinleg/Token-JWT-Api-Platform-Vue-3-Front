<template>
    <div v-if="!isHidden" class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
        
        <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3">
            

            <div class="border-b px-4 py-2 flex justify-between items-center bg-green-500 text-white">
                <h3 class="font-bold text-lg"> <slot name='modalTitle'>Title</slot> </h3>
                <button @click="cancelModal" class="text-black close-modal">&cross;</button>
            </div>

            
            <div class="flex justify-start items-center w-100 border-t p-3">
               <p class="font-semibold"> <slot name='modalBody'> The body of the modal</slot> </p>
            </div>
        </div>
    </div>

 
</template>

<script>
    export default {
        data(){
            return {
                isHidden: false
            }
        },
        methods: {
            cancelModal(){
                // let modal = document.querySelector('#modal');
                // modal.classList.add('hidden');
                this.isHidden = true
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