// question.ts
import { ref } from "vue";
import { useRouter } from "vue-router";
import { scoreRanges } from "./dataResult";
import { questions } from "./dataQuestion";

export const useQuestion = () => {
  const currentQuestionIndex = ref(0);
  const currentQuestion = ref<Question | undefined>(undefined);
  const buttonColor = ref("gray");
  const totalScore = ref<number>(0);
  const router = useRouter();

  const selectOption = (index: number): void => {
    if (currentQuestion.value) {
      if (currentQuestion.value.selectedOption === undefined) {
        currentQuestion.value.selectedOption = index;
        currentQuestion.value.options.forEach((option, i) => {
          if (i === index) {
            option.color = "orange";
          } else {
            option.color = "gray";
          }
        });
        if (currentQuestion.value.options[index].label === "อื่นๆ (โปรดระบุ)") {
          const comment = prompt("โปรดระบุความคิดเห็น:");
          if (comment !== null) {
            currentQuestion.value.options[index].comment = comment;
          }
        }
      }
    }
  };

  const nextQuestion = (): void => {
    if (
      !currentQuestion.value ||
      currentQuestion.value.selectedOption === undefined
    ) {
      alert("Please choose your Answer!!");
      return;
    }
    totalScore.value +=
      currentQuestion.value.options[currentQuestion.value.selectedOption].score;

    currentQuestionIndex.value++;
    if (currentQuestionIndex.value >= questions.value.length) {
      if (totalScore.value >= 131 && totalScore.value <= 180) {
        router.push("/result/theGradualLearner");
      } else if (totalScore.value >= 91 && totalScore.value <= 130) {
        router.push("/result/theEnthusiastic");
      } else if (totalScore.value >= 60 && totalScore.value <= 90) {
        router.push("/pages/result/theHobbyist");
      } else {
        alert("Invalid score range");
      }

      currentQuestion.value.selectedOption = undefined;
      buttonColor.value = "gray";
      currentQuestion.value = questions.value[currentQuestionIndex.value];
    } else {
      currentQuestion.value.selectedOption = undefined;
      buttonColor.value = "gray";
      currentQuestion.value = questions.value[currentQuestionIndex.value];
    }
  };

  const backQuestion = (): void => {
    if (currentQuestionIndex.value > 0) {
      currentQuestionIndex.value--;
      currentQuestion.value = questions.value[currentQuestionIndex.value];
    }
  };

  // Initialize currentQuestion
  currentQuestion.value = questions.value[currentQuestionIndex.value];

  return {
    questions,
    currentQuestionIndex,
    currentQuestion,
    buttonColor,
    totalScore,
    selectOption,
    nextQuestion,
    backQuestion,
  };
};
