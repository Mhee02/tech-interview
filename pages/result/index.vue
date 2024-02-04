<script setup>
import { useQuestion } from "../../services/question";

const {
  questions,
  currentQuestionIndex,
  currentQuestion,
  buttonColor,
  selectOption,
  nextQuestion,
  backQuestion,
} = useQuestion();

// selectOption = () => {};
</script>

<template>
  <div
    class="flex justify-center items-certer max-w-2xl m-auto custom-height bg-blue-500"
  >
    <div class="grid grid-rows-1 m-auto justify-center w-96">
      <div>
        <UButton></UButton>
      </div>
      <div
        class="grid justify-center grid-rows-4 border-2 w-80 custom-height-grid place-items-center rounded-3xl bg-white"
      >
        <div class="w-60 mt-10">
          <P>{{ currentQuestion.question }}</P>
          <p>{{ currentQuestion.text }}</p>
        </div>
        <div></div>
        <div class="grid grid-cols-1 gap-4">
          <UButton
            v-for="(option, index) in currentQuestion.options"
            :key="index"
            :color="option.color"
            @click="selectOption(index)"
            class="text-black w-72 h-20 flex justify-center items-center border-2 border-slate-950 rounded-3xl hover:bg-orange-500"
          >
            {{ option.label }}
          </UButton>
        </div>
      </div>
      <div class="mt-16 flex justify-between">
        <UButton
          color="white"
          class="w-24 h-10 rounded-3xl hover:bg-yellow-400 flex justify-center items-center"
          @click="backQuestion()"
          >กลับ</UButton
        >
        <UButton
          color="white"
          class="w-48 h-10 rounded-3xl hover:bg-yellow-400 flex justify-center items-center"
          @click="nextQuestion()"
          >ต่อไป</UButton
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-height {
  height: 852px;
}
.custom-height-grid {
  height: 478px;
}
</style>
