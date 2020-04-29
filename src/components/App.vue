<template>
  <main>
    <section>
      <app-header></app-header>
      <password-config @configChange="generate"></password-config>
    </section>
    <password-output :password="password.password"></password-output>
  </main>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import PasswordConfig from "./PasswordConfig.vue";
import PasswordOutput from "./PasswordOutput.vue";
import { config } from "../state/config";
import { password, generate } from "../state/password";

export default {
  name: "App",
  components: { PasswordOutput, AppHeader, PasswordConfig },
  data() {
    return {
      config,
      password
    };
  },
  methods: { generate }
};
</script>

<style scoped>
  main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-template-rows: repeat(auto-fit,minmax(200px, 1fr));
    min-height: 100vh;
    min-width: 100vw;
  }

  section {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
