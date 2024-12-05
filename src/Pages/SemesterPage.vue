<template>
  <div class="semester-page">
    <div class="title">
      {{ name }}
    </div>
  </div>
</template>

<script>
import '../Style/semesterpage.css'
export default {
  data(){
    return{
      name:this.$route.params.name
    }
  }
}
</script>

<style>

</style>