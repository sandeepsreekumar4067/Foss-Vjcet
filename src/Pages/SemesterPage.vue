<template>
  <div class="semester-page">
    <div class="sem-title">
      {{ semId }}
    </div>
    <div class="sem-notes">
      <span>Select the Study material you want</span>
      <div
        @click="
          () => {
            goToMaterial(material);
          }
        "
        v-for="material in materials"
        :key="material.name"
        class="material-tile"
      >
        {{ material.name }}
      </div>
    </div>
  </div>
</template>

<script>
import "../Style/semesterpage.css";
export default {
    mounted(){
        const materials = this.$route.query.material?
        JSON.parse(this.$route.query.material):[]
        this.materials=materials
        console.log(materials);
          
    },
  data() {
    return {
      semId: this.$route.params.id,
      materials: [],
    };
  },
  methods: {
    goToMaterial(material) {
      this.$router.push({
        name: "Material",
        params: {
          name:material.name,
        },
        query:{material:JSON.stringify(material)}
      });
    },
  },
};
</script>

<style>
</style>