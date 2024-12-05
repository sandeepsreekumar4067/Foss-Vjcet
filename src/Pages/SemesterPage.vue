<template>
    <div class="semester-page">
        <div class="sem-title">
            {{ semId }}
        </div>
        <div class="sem-notes">
            <span>Select the Study material you want</span>
            <div @click="()=>{goToMaterial(note.name)}" v-for="note in materials" :key="note.name" class="material-tile">
                {{ note.name }}
            </div>
        </div>
    </div>
</template>

<script>
import '../Style/semesterpage.css'
export default {
    data(){
        return{
            semId:this.$route.params.id,
            materials : [
                {
                    name:"material 1",
                    link:'#'
                },
                {
                    name:"material 1",
                    link:'#'
                },
                {
                    name:"material 1",
                    link:'#'
                },
                {
                    name:"material 1",
                    link:'#'
                },
                {
                    name:"material 1",
                    link:'#'
                },
                {
                    name:"material 1",
                    link:'#'
                }
            ]
        }
    },
    methods:{
        goToMaterial(name){
            this.$router.push({
                name:'Material',
                params:{
                    name
                }
            })
        }
    }
}
</script>

<style>

</style>