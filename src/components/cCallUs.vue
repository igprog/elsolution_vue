<template>
  <div :class="background">
    <span>Nazovite nas</span>
    <a :href="`tel:${constants.phone}`" :class="astyle"
      ><icon name="phone" scale="2" /> {{ constants.phoneShort }}</a
    >
  </div>
</template>

<script>
export default {
  props: {
    background: String,
    astyle: String
  },
  data() {
    return {
      constants: this.$constants,
    };
  },
};
</script>