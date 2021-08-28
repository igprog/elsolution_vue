<template>
  <div v-if="val" class="text-center color-main-dark">
    <icon name="spinner" pulse scale="5"></icon>
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  props: {
    val: Boolean,
    title: String
  }
};
</script>

<style scoped>
</style>
