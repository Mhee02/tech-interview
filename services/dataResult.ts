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

export const scoreRanges: {
  min: number;
  max: number;
  resultPage: ResultPage;
}[] = [
  {
    min: 131,
    max: 180,
    resultPage: {
      question: "The Gradual Learner",
      text: "ผลลัพธ์ของคุณคือ",
      options: [
        {
          img: "/result/image12.png",
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
          img: "/result/image13.png",
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
          img: "/result/image14.png",
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
