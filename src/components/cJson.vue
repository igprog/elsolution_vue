<template>
  <div v-if="debug">
    <button @click="show" class="btn btn-light">
      JSON
      <icon :name="icon"></icon>
    </button>
    <div v-if="isshow" class="shadow bg-dark container">
      <pre class="p-2 text-white">{{data}}</pre>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      isshow: false,
      icon: "sort-down",
      debug: process.env.DEBUG
    };
  },
  methods: {
    show() {
      this.isshow = !this.isshow;
      this.icon = this.isshow ? "sort-up" : "sort-down";
    }
  }
};
</script>

<style scoped>
</style>
