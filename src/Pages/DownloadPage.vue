<template>
  <div class="download-page">
    <div class="download-title">
        {{ name }}
    </div>
    <div class="download-notes">
        <div v-for="notes in modules" :key="notes.id" class="download-tile">
            {{ notes.name }}
        </div>
    </div>
  </div>
</template>

<script>
import '../Style/downloadpage.css'
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