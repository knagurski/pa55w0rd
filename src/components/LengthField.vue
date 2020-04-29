<template>
  <fragment>
    <label for="length">{{ label }}</label>
    <div>
      <input
        type="range"
        min="5"
        max="50"
        id="length"
        :value="length"
        @change="$emit('change', parseInt($event.target.value))"
      />
      <span>{{ length }}</span>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from "vue-fragment";

export default {
  name: "LengthField",
  props: {
    label: String,
    length: Number
  },
  components: { Fragment }
};
</script>

<style scoped>
div div {
  display: flex;
  align-items: baseline;
}

span {
  display: inline-block;
  width: 3ch;
  margin-left: 1ch;
}
</style>
