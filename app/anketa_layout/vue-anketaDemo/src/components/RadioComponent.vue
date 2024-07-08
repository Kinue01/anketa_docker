<script>
export default {
  props: ["answers", "value", "name"],
  model: {
    prop: "value",
    event: "input",
  },
};
</script>

<template>
  <div>
    <label v-for="(answer, index) in answers" :key="index">
      <input
        type="radio"
        :value="answer.position"
        :name="name"
        v-model="selectedOption"
      />
      {{ answer.title }}
      <br />
    </label>
  </div>
</template>