<template>
  <div class="department-page">
    <div class="title">
      {{ name }}
    </div>
    <div class="prompt">Please Select the Semester</div>
    <div class="sem-list">
      <div v-for="semester in semesters" :key="semester.id" class="sem-tile" @click="goToSemester(semester.id)">
        {{ semester.id }}
      </div>
    </div>
  </div>
</template>

<script>
import "../Style/departmentpage.css";
export default {
  mounted(){
    const semesters = this.$route.query.semesters ?
    JSON.parse(this.$route.query.semesters):
    []
    this.semesters = semesters
    const name = this.$route.params.name?
    this.$route.params.name:
    'test'
    this.name=name
  },
  data(){
    return{
      semesters:[],
      name:'test'
    }
  },
  methods: {
    goToSemester(id) {
      this.$router.push({
        name: "Semester",
        params: {
          id,
        },
      });
    },
  },
};
</script>

<style>
</style>