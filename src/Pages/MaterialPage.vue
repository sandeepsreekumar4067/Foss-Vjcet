<template>
  <div class="material-page">
    <div class="material-title">
      {{ materialName }}
    </div>
    <div class="material-notes">
      <div v-for="notes in material" :key="notes.id">
        {{ item }}
      </div>
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
        params:{name:name},
        query:{modules:''}
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