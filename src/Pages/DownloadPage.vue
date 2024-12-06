<template>
  <div class="download-page">
    {{ name }}
  </div>
</template>

<script>
export default {
    mounted(){
        const modules = this.$route.query.modules?
        JSON.parse(this.$route.query.modules):[]
        console.log(modules);
        this.modules=modules
    },
    data(){
        return{
            name: this.$route.params.name,
            modules:[]
        }
    }
}
</script>

<style>

</style>