<template>
  <div class="department-page">
    <div class="title">
      {{ name }}
    </div>
    <div class="prompt">
      Please Select the Semester
    </div>
    <div class="sem-list">
      <div v-for="semester in semesters" :key="semester.id" class="sem-tile">
        {{ semester.id }}
      </div>
    </div>
  </div>
</template>

<script>
import '../Style/semesterpage.css'
export default {
  data(){
    return{
      name:this.$route.params.name,
      semesters:[
        {
          id:"S1",
          link:'#'
        },
        {
          id:"S2",
          link:'#'
        },
        {
          id:"S3",
          link:'#'
        },
        {
          id:"S4",
          link:'#'
        },
        {
          id:"S5",
          link:'#'
        },
        {
          id:"S6",
          link:'#'
        },
        {
          id:"S7",
          link:'#'
        },
        {
          id:"S8",
          link:'#'
        },
      ]
    }
  }
}
</script>

<style>

</style>