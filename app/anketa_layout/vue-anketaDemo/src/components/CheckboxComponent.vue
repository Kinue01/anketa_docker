<script>
export default {
  props: ["answers", "value"],
  model: {
    prop: "value",
    event: "input",
  },
};
</script>

<template>
  <div>
    <label v-for="(answer, index) in answers" :key="index">
      <input type="checkbox" :value="answer.position" v-model="selectedOptions" />
      {{ answer.title }}
      <br>
    </label>
  </div>
</template>
