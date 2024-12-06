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
            goToMaterial(note.name);
          }
        "
        v-for="note in materials"
        :key="note.name"
        class="material-tile"
      >
        {{ note.name }}
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
        
    },
  data() {
    return {
      semId: this.$route.params.id,
      materials: [],
    };
  },
  methods: {
    goToMaterial(name) {
      this.$router.push({
        name: "Material",
        params: {
          name,
        },
      });
    },
  },
};
</script>

<style>
</style>