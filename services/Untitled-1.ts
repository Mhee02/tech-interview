// question.ts
import { ref } from "vue";

interface Question {
  question: string;
  text: string;
  options: {
    label: string;
    score: number;
    color: string;
    comment: string;
  }[];
  correctAnswer: number;
  selectedOption?: number | undefined;
}
interface ResultPage {
  question: string;
  text: string;
  options: {
    img: string;
    label: string;
    score: number;
    color: string;
    comment: string;
  }[];
  correctAnswer: number;
}

export const useQuestion = () => {
  const questions = ref<Question[]>([
    {
      question: "Q1",
      text: "ถ้าวันนี้หยุดคุณจะ...",
      options: [
        {
          label: "นอนเล่น พักผ่อน",
          score: 10,
          color: "",
          comment: "",
        },
        {
          label: "ดูหนัง ดูซีรี่ส์ เล่นเกม",
          score: 20,
          color: "",
          comment: "",
        },
        { label: "เรียนรู้อะไรใหม่ ๆ", score: 30, color: "", comment: "" },
      ],
      correctAnswer: 1,
    },
    {
      question: "Q2",
      text: "คุณต้องการพัฒนาภาษาอังกฤษเพื่ออะไร?",
      options: [
        {
          label: "การทำงาน",
          score: 30,
          color: "",
          comment: "",
        },
        { label: "เที่ยวต่างประเทศ", score: 10, color: "", comment: "" },
        { label: "ใช้ในชีวิตประจำวัน ๆ", score: 20, color: "", comment: "" },
      ],
      correctAnswer: 0,
    },
    {
      question: "Q3",
      text: "สไตล์การเรียนภาษาอังกฤษของคุณเป็นแบบไหน?",
      options: [
        {
          label: "เรียนคอร์สออนไลน์ / โรงเรียนสอนภาษา",
          score: 30,
          color: "",
          comment: "",
        },
        {
          label: "เรียนด้วยตนเอง เช่น อ่านหนังสือ ดูหนัง ฟังเพลง",
          score: 20,
          color: "",
          comment: "",
        },
        {
          label: "คุยกับเพื่อนต่างชาติ / ไปเที่ยวต่างประเทศ",
          score: 10,
          color: "",
          comment: "",
        },
      ],
      correctAnswer: 1,
    },
    {
      question: "Q4",
      text: "คุณใช้ภาษาอังกฤษบ่อยแค่ไหน?",
      options: [
        { label: "เป็นประจำทุกวัน", score: 30, color: "", comment: "" },
        { label: "เป็นบางครั้ง", score: 10, color: "", comment: "" },
        { label: "นาน ๆ ที / ไม่ได้ใช้เลย", score: 20, color: "", comment: "" },
      ],
      correctAnswer: 1,
    },
    {
      question: "Q5",
      text: "คุณอยากพัฒนาสกิลภาษาอังกฤษสกิลไหนมากที่สุด?",
      options: [
        { label: "การฟัง", score: 20, color: "", comment: "" },
        {
          label: "การพูด",
          score: 10,
          color: "",
          comment: "",
        },
        { label: "การเขียน", score: 30, color: "", comment: "" },
      ],
      correctAnswer: 1,
    },
    {
      question: "Q6",
      text: "อยากเรียนภาษาอังกฤษ แต่...",
      options: [
        { label: "ไม่มีเวลา", score: 20, color: "", comment: "" },
        {
          label: "เนื้อหาไม่น่าสนใจ / สอนไม่สนุก",
          score: 10,
          color: "",
          comment: "",
        },
        { label: "ไม่มั่นใจ", score: 30, color: "", comment: "" },
      ],
      correctAnswer: 1,
    },
    {
      question: "Q7",
      text: "คุณรู้จัก Globish ผ่านช่องทางใด(เลือกได้มากกว่า 1 ข้อ)",
      options: [
        { label: "Instagram", score: 0, color: "", comment: "" },
        { label: "Facebook", score: 0, color: "", comment: "" },
        { label: "อื่นๆ (โปรดระบุ)", score: 0, color: "", comment: "" },
      ],
      correctAnswer: 3,
    },

    // Add more questions here
  ]);
  const scoreRanges: { min: number; max: number; resultPage: ResultPage }[] = [
    {
      min: 131,
      max: 180,
      resultPage: {
        question: "The Gradual Learner",
        text: "ผลลัพธ์ของคุณคือ",
        options: [
          {
            img: "/assets/result/image12.png",
            label: "",
            score: 0,
            color: "",
            comment: "",
          },
        ],
        correctAnswer: 0,
      },
    },
    {
      min: 91,
      max: 130,
      resultPage: {
        question: "The Enthusiastic",
        text: "ผลลัพธ์ของคุณคือ",
        options: [
          {
            img: "/assets/result/image13.png.png",
            label: "",
            score: 0,
            color: "",
            comment: "",
          },
        ],
        correctAnswer: 0,
      },
    },
    {
      min: 60,
      max: 90,
      resultPage: {
        question: "The Hobbyist",
        text: "ผลลัพธ์ของคุณคือ",
        options: [
          {
            img: "/assets/result/image14.png",
            label: "",
            score: 0,
            color: "",
            comment: "",
          },
        ],
        correctAnswer: 0,
      },
    },
    // เพิ่มช่วงคะแนนและหน้าผลลัพธ์เพิ่มเติมตามต้องการ
  ];

  const currentQuestionIndex = ref(0);
  const currentQuestion = ref<Question | undefined>(undefined);
  const buttonColor = ref("gray");
  const totalScore = ref<number>(0);

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
        console.log(currentQuestion.value.options[index].score);
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
      // ตรวจสอบคะแนนและเรียกหน้าผลลัพธ์ที่เหมาะสม
      for (const { min, max, resultPage } of scoreRanges) {
        if (totalScore.value >= min && totalScore.value <= max) {
          alert(`Quiz completed! Result: ${resultPage.question}`);
          currentQuestionIndex.value = 0;
          totalScore.value = 0;
          return;
        }
      }
    } else {
      // รีเซ็ตค่า selectedOption เมื่อย้ายไปคำถามถัดไป
      currentQuestion.value.selectedOption = undefined;
      buttonColor.value = "gray";
      currentQuestion.value = questions.value[currentQuestionIndex.value];
    }
  };

  const backQuestion = (): void => {
    currentQuestionIndex.value--;
    if (currentQuestionIndex.value < 0) {
      currentQuestionIndex.value = questions.value.length - 1;
    }
    currentQuestion.value = questions.value[currentQuestionIndex.value];
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
