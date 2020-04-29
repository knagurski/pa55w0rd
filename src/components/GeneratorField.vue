<template>
  <fragment>
    <label :for="`generator-${name}`">{{ label }}</label>
    <input
      type="checkbox"
      :value="name"
      name="generator"
      :id="`generator-${name}`"
      :checked="checked"
      @change="$emit('toggle')"
    />
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  name: "GeneratorField",
  props: {
    name: String,
    label: String,
    checked: Boolean
  },
  components: { Fragment }
};
</script>

<style scoped></style>
