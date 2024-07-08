<script>
export default {
  props: ["question", "value"],
  model: {
    prop: "value",
    event: "input",
  }
};
</script>

<template>
  <div>
    <label>{{ question }}</label>
    <input
      type="text" v-model="selectedQueText" placeholder="Введите свой ответ..." />
  </div>
</template>

<style scoped>
input {
  width: 30%;
}
</style>
