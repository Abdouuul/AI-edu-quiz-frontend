import { useState } from "react";
import { Link } from "react-router-dom";


interface Question {
  id: number;
  enonce: string;
  explication?: string | null;
  question_type: "SC" | "MC" | "TF" | "OE";
  choices: string[];
  open_question_answer?: string | null;
  quiz: number;
}

interface Quiz {
  id: number;
  title: string;
  lesson: number;
  created_at: string;
  updated_at: string;
  questions?: Question[];
}


const exampleQuizzes: Quiz[] = [
  {
    id: 1,
    title: "Introduction to Photosynthesis",
    lesson: 5,
    created_at: "2025-11-10T09:00:00Z",
    updated_at: "2025-11-10T09:00:00Z",
    questions: [
      {
        id: 1,
        enonce: "What is the main pigment used in photosynthesis?",
        explication: "Chlorophyll is the green pigment that absorbs light energy.",
        question_type: "SC",
        choices: ["Chlorophyll", "Melanin", "Carotene", "Hemoglobin"],
        quiz: 1,
      },
      {
        id: 2,
        enonce: "True or False: Photosynthesis occurs in mitochondria.",
        explication: "It occurs in chloroplasts, not mitochondria.",
        question_type: "TF",
        choices: ["True", "False"],
        quiz: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Basic Geometry Quiz",
    lesson: 8,
    created_at: "2025-11-09T12:00:00Z",
    updated_at: "2025-11-09T12:00:00Z",
    questions: [
      {
        id: 3,
        enonce: "What is the sum of angles in a triangle?",
        explication: "In Euclidean geometry, the sum is always 180 degrees.",
        question_type: "OE",
        choices: [],
        open_question_answer: "180 degrees",
        quiz: 2,
      },
      {
        id: 4,
        enonce: "Select all polygons with four sides.",
        explication: "Squares, rectangles, and parallelograms all have four sides.",
        question_type: "MC",
        choices: ["Triangle", "Square", "Rectangle", "Pentagon"],
        quiz: 2,
      },
    ],
  },
];

export default function QuizPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>(exampleQuizzes);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quizzes</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Create Quiz
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="border rounded-lg p-4 bg-white shadow-sm flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{quiz.title}</h2>
              <p className="text-gray-600 text-sm mb-4">
                Lesson ID: {quiz.lesson}
              </p>
              <p className="text-gray-500 text-xs">
                Created: {new Date(quiz.created_at).toLocaleDateString()}
              </p>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <Link
                to={`/quizzes/${quiz.id}`}
                className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
