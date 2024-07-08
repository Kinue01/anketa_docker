<script>
export default {
  props: ["answers", "value"],
  data() {
    return {
      textAnswers: [],
    };
  },
  methods: {
    updateAnswers() {
      this.$emit("input", this.textAnswers);
    },
  },
};
</script>

<template>
  <div>
    <label v-for="(answer, index) in answers" :key="index">
      <span>{{ answer.title }}</span>
      <textarea v-model="textAnswers[index]" @change="updateAnswers"></textarea>
    </label>
  </div>
</template>
