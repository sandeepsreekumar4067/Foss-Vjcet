<template>
  <div class="home-page">
    <div class="header-container">
      <div class="slogan">
        New Way To <br> Learn Online
      </div>
      <div class="front-image">
        <img :src="frontImage" alt="">
      </div>
    </div>
    <div class="dept-container">
      dept
    </div>
  </div>
</template>

<script>
import '../Style/HomePage.css'
import '../Style/app.css'
import frontImage from '../assets/front image.png'
export default {
  data(){
    return{
      frontImage:frontImage
    }
  }
}
</script>

<style>

</style>