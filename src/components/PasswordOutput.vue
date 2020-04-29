<template>
  <section>
    <div>
      <output for="password-config">{{ password }}</output>
      <button v-if="canCopy" type="button" @click.prevent="copyToClipboard">
        📋 copy to clipboard
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "PasswordOutput",
  props: {
    password: String
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard
        .writeText(this.password)
        .then(() => alert(`copied ${this.password} to clipboard`));
    }
  },
  computed: {
    canCopy() {
      return (
        this.password && navigator.clipboard && navigator.clipboard.writeText
      );
    }
  }
};
</script>

<style scoped>
section {
  background-color: lightgray;
}

output {
  word-break: break-word;
  font-size: 5rem;
  text-align: center;
  display: block;
}

button {
  float: right;
  margin: 1rem;
}
</style>
