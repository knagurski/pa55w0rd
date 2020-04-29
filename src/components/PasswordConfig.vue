<template>
  <form id="password-config" @submit.prevent="$emit('configChange', { ...config })">
    <generator-field
      name="upper"
      label="Uppercase letters"
      :checked="config.generators.includes('upper')"
      @toggle="toggleGenerator('upper')"
    ></generator-field>
    <generator-field
      name="lower"
      label="Lowercase letters"
      :checked="config.generators.includes('lower')"
      @toggle="toggleGenerator('lower')"
    ></generator-field>
    <generator-field
      name="number"
      label="Numbers"
      :checked="config.generators.includes('number')"
      @toggle="toggleGenerator('number')"
    ></generator-field>
    <generator-field
      name="symbol"
      label="Symbols"
      :checked="config.generators.includes('symbol')"
      @toggle="toggleGenerator('symbol')"
    ></generator-field>
    <length-field
      label="Password length"
      :length="config.length"
      @change="setLength"
    ></length-field>
    <button type="submit">Generate password</button>
  </form>
</template>

<script>
import GeneratorField from "./GeneratorField.vue";
import { config, toggleGenerator, setLength } from "../state/config";
import LengthField from "./LengthField";

export default {
  name: "PasswordConfig",
  components: { LengthField, GeneratorField },
  data() {
    return { config };
  },
  methods: {
    toggleGenerator,
    setLength
  }
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 1rem;
}

button {
  grid-column: 1 / span 2;
  margin-top: 1rem;
}
</style>
