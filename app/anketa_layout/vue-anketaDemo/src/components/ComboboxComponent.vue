<script>
export default {
  props: ["answers", "value"],
  data() {
    return {
      selectedDropdownOption: this.value,
    };
  },
  model: {
    prop: "value",
    event: "input",
  },
};
</script>

<template>
  <div>
    <select v-model="selectedDropdownOption">
      <option value="" disabled>Вы проживаете</option>
      <option v-for="(answer, index) in answers" :value="answer.position" :key="index">
        {{ answer.title }}
      </option>
    </select>
  </div>
</template>
