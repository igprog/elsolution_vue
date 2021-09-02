<template>
  <div>
    <button v-if="type=='submit'||type=='button'" :class="'m-1 btn btn-' + css" @click="$emit('click')"><icon :name="ico"></icon> {{title}}</button>
    <div v-else-if="type=='search'" class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Search..." @input="$emit('input', $event.target.value)">
      <div class="input-group-append">
        <span class="input-group-text"><icon name="search"></icon></span>
      </div>
    </div>
    <div v-else class="form-group">
      <label>{{title}}:</label>
      <input :type="type" class="form-control" @input="$emit('input', $event.target.value)">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    type: String,
    css: String,
    ico: String
  }
};
</script>
