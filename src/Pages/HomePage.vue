<template>
  <div class="home-page">
    <div class="header-container">
      <div class="slogan">
        New Way To <br />
        Learn Online
      </div>
      <div class="front-image">
        <img :src="frontImage" alt="" />
      </div>
    </div>
    <div class="dept-container">
      <span>Please Select your Department</span>
      <div class="dept-tiles">
        <span
          v-for="(department, index) in departments"
          :key="index"
          @click="goToDepartment(department)"
          class="dept-tile"
        >
          {{ department.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import "../Style/HomePage.css";
import "../Style/app.css";
import departments from "../Departments/departments.json";
import frontImage from "../assets/front image.png";
export default {
  data() {
    return {
      frontImage: frontImage,
      departments: departments,
    };
  },
  methods:{
    goToDepartment(department){
      this.$router.push({
        name:'Department',
        params:{name:department.name},
        query:{semesters:JSON.stringify(department.semesters)}
      })
    }
  }
};
</script>

<style>
</style>