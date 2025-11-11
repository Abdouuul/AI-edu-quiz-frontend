import { useState } from "react";
import { useParams } from "react-router-dom";
import type { Quiz, Question } from "../types/quiz";

const exampleQuiz: Quiz = {
  id: 1,
  title: "The Solar System Quiz",
  lesson: 12,
  created_at: "2025-11-10T10:00:00Z",
  updated_at: "2025-11-10T10:00:00Z",
  questions: [
    {
      id: 1,
      enonce: "Which planet is known as the Red Planet?",
      explication: "Mars appears red due to iron oxide on its surface.",
      question_type: "SC",
      choices: ["Earth", "Mars", "Jupiter", "Venus"],
      quiz: 1,
    },
    {
      id: 2,
      enonce: "Select all gas giant planets.",
      explication: "Gas giants are Jupiter, Saturn, Uranus, and Neptune.",
      question_type: "MC",
      choices: ["Mercury", "Jupiter", "Saturn", "Venus", "Neptune"],
      quiz: 1,
    },
    {
      id: 3,
      enonce: "True or False: The Sun is a planet.",
      explication: "The Sun is a star, not a planet.",
      question_type: "TF",
      choices: ["True", "False"],
      quiz: 1,
    },
    {
      id: 4,
      enonce: "Briefly describe what an asteroid is.",
      explication: "Asteroids are rocky bodies orbiting the Sun.",
      question_type: "OE",
      choices: [],
      open_question_answer: "",
      quiz: 1,
    },
    {
      id: 5,
      enonce: "Which of these is the smallest planet in our solar system?",
      explication: "Mercury is the smallest planet.",
      question_type: "SC",
      choices: ["Mercury", "Mars", "Earth", "Venus"],
      quiz: 1,
    },
  ],
};


export default function QuizDetails() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState<Quiz>(exampleQuiz);

  const handleQuestionChange = (qid: number, field: keyof Question, value: any) => {
    setQuiz((prev) => ({
      ...prev,
      questions: prev.questions.map((q) =>
        q.id === qid ? { ...q, [field]: value } : q
      ),
    }));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        {quiz.title} (Quiz ID: {id})
      </h1>
      <p className="text-gray-600 mb-6">Lesson ID: {quiz.lesson}</p>

      <div className="flex flex-col gap-6">
        {quiz.questions.map((q) => (
          <div key={q.id} className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="mb-4">
              <label className="block font-semibold mb-1">
                Question {q.id} ({q.question_type})
              </label>
              <textarea
                className="w-full border rounded-md p-2"
                value={q.enonce}
                onChange={(e) =>
                  handleQuestionChange(q.id, "enonce", e.target.value)
                }
              />
            </div>

            {q.question_type !== "OE" && q.choices.length > 0 && (
              <div className="mb-4">
                <p className="font-medium mb-1">Choices:</p>
                <div className="flex flex-col gap-1">
                  {q.choices.map((choice, idx) => (
                    <label key={idx} className="flex items-center gap-2">
                      {(q.question_type === "MC" || q.question_type === "SC") && (
                        <input
                          type={q.question_type === "MC" ? "checkbox" : "radio"}
                          name={`question-${q.id}`}
                          className="h-4 w-4"
                        />
                      )}
                      <input
                        type="text"
                        className="border rounded-md p-1 flex-1"
                        value={choice}
                        onChange={(e) => {
                          const newChoices = [...q.choices];
                          newChoices[idx] = e.target.value;
                          handleQuestionChange(q.id, "choices", newChoices);
                        }}
                      />
                    </label>
                  ))}
                </div>
              </div>
            )}

            {q.question_type === "OE" && (
              <div className="mb-4">
                <label className="block font-medium mb-1">
                  Open-ended Answer:
                </label>
                <textarea
                  className="w-full border rounded-md p-2"
                  value={q.open_question_answer || ""}
                  onChange={(e) =>
                    handleQuestionChange(q.id, "open_question_answer", e.target.value)
                  }
                />
              </div>
            )}

            <div>
              <label className="block font-medium mb-1">Explanation:</label>
              <textarea
                className="w-full border rounded-md p-2"
                value={q.explication || ""}
                onChange={(e) =>
                  handleQuestionChange(q.id, "explication", e.target.value)
                }
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}
