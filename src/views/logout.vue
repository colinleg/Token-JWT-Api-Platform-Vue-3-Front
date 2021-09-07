<template>
    <div>

    </div>
</template>

<script>
    export default {
        mounted(){
            this.$store.dispatch('resetToken');
            this.$store.dispatch('unsetConnected');
            console.log(this.$store.state.connected);
            console.log(this.$store.state.token);
        }
    }
</script>

<style lang="scss" scoped>

</style>