<template>
  <div class="material-page">
    <div class="material-title">
      {{ materialName }}
    </div>
    <div class="material-notes">
      <span class="note-tile" @click="()=>{gotoDownloadPage('Kerala Notes')}">Kerala Notes</span>
      <span class="note-tile" >Ktu Notes</span>
      <span class="note-tile" >Foss Notes</span>
      <span class="note-tile" >Teachers Notes</span>
    </div>
  </div>
</template>

<script>
import '../Style/materialpage.css'
export default {
  mounted(){
    const material = this.$route.query.material?
    JSON.parse(this.$route.query.material):[]
    console.log(material);
    
  },
  methods:{
    gotoDownloadPage(name){
      this.$router.push({
        name:'Download',
        params:{name:name}
      })
    }
  },
  data(){
    return{
      materialName:this.$route.params.name,
      kerlaNotes:[],
      ktuNotes:[],
      fossNotes:[],
      teachersNotes:[]
    }
  }
}
</script>

<style>

</style>