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
          @click="goToDepartment(department.name)"
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
import frontImage from "../assets/front image.png";
export default {
  data() {
    return {
      frontImage: frontImage,
      departments: [
        { id: "cse", name: "Computer Science and Engineering" },
        { id: "csd", name: "Computer Science and Design" },
        { id: "ai", name: "Artificial Intelligence" },
        { id: "ece", name: "Electronics and Communication Engineering" },
        { id: "eee", name: "Electrical and Electronics Engineering" },
        { id: "civil", name: "Civil Engineering" },
      ],
    };
  },
  methods:{
    goToDepartment(name){
      this.$router.push({name:'Semester' , params:{name} })
    }
  }
};
</script>

<style>
</style>