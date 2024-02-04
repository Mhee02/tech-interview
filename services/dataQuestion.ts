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

export const questions = ref<Question[]>([
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
