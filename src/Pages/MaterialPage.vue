<template>
  <div class="material-page">
    <div class="material-title">
      {{ materialName }}
    </div>
    <div class="material-notes">
      <div @click="()=>{gotoDownloadPage(note)}" v-for="note in material.notes" :key="note.name" class="note-tile">
        {{ note.name }}
      </div>
    </div>
  </div>
</template>

<script>
import "../Style/materialpage.css";
export default {
  mounted() {
    const material = this.$route.query.material
      ? JSON.parse(this.$route.query.material)
      : [];
    console.log(material);
    this.material = material;
  },
  methods: {
    gotoDownloadPage(note) {
      this.$router.push({
        name: "Download",
        params: { name: note.name },
        query: { modules: JSON.stringify(note.modules)},
      });
    },
  },
  data() {
    return {
      materialName: this.$route.params.name,
      material: [],
    };
  },
};
</script>

<style>
</style>