<template>
  {{ materialName }}
</template>

<script>
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