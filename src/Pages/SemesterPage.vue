<template>
    {{ semId }}
</template>

<script>
export default {
    data(){
        return{
            semId:this.$route.params.id
        }
    }
}
</script>

<style>

</style>