<template>
  <div class="material-page">
    <div class="material-title">
      {{ materialName }}
    </div>
    <div class="material-notes">
      
    </div>
  </div>
</template>

<script>
import '../Style/materialpage.css'
export default {
  data(){
    return{
      materialName:this.$route.params.name
    }
  }
}
</script>

<style>

</style>