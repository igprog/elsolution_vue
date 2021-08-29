<template>
  <div>
    <h2>Kontakt</h2>
    <label class="text-uppercase">{{ constants.company }}</label>
    <p><icon name="home" /> {{ constants.address }}</p>
    <p><icon name="phone" /> {{ constants.phone }}</p>
    <p><icon name="envelope" /> {{ constants.email }}</p>
    <p>
      <a href="./" :title="constants.appDomain" class="text-dark"
        ><icon name="globe" /> www.{{ constants.appDomain }}</a
      >
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      constants: this.$constants,
    };
  },
};
</script>
