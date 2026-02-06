import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema(
  {
    Question: {
      type: String,
      required: true,
    },
    answer: {
      type: [String],
      required: true,
    },
    correctAnswer: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);


const Quiz = mongoose.model("Quiz", QuizSchema);

export default Quiz;
