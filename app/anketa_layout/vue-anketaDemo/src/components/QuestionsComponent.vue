<template>
  <div>
    <div v-for="(question, index) in questions" :key="index">
      <h3>{{ question.title }}</h3>
      <!-- <div v-if="question.categoryId && question.type === 'SINGLE'">
        <TableComponent :answers="question.answers" v-model="selectedTable" />
      </div>  -->
      <div v-if="question.type === 'SINGLE'">
        <Radio :answers="question.answers" :name="question.position" v-model="selectedOption" />
      </div>
      <div v-else-if="question.type === 'MULTIPLE'">
        <Checkbox :answers="question.answers" v-model="selectedOptions" />
      </div>
      <div v-else-if="question.type === 'DROPDOWN'">
        <Combobox :answers="question.answers" v-model="selectedDropdownOption" />
      </div>
      <!-- <div v-else-if="question.type === 'FREE_TEXT'">
        <TextComponent :answers="question.content" v-model="selectedText" /> 
      </div> -->
      <div v-else-if="question.type === 'FREE_TEXT'">
        <TextQuestions :answers="question.answers" v-model="selectedQueText" />
      </div>
    </div>
  </div>
</template>

<script>
import Radio from "./RadioComponent.vue";
import Checkbox from "./CheckboxComponent.vue";
import Combobox from "./ComboboxComponent.vue";
import TextQuestions from "./TextQuestionComponent.vue";

export default {
  props: ["questions"],
  components: {
    Radio,
    Combobox,
    Checkbox,
    TextQuestions
    // TextComponent,
  },
  data() {
    return {
      selectedOption: "", // Выбранный вариант для radio
      selectedOptions: [], // Выбранные варианты для checkbox
      selectedDropdownOption: "", // Выбранный вариант для dropdown
      selectedQueText: "" // Ответ для текстового вопроса
    };
  },
};
</script>
