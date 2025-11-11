import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Lessons() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`Imported: ${file.name}`);
    }
  };

  const lessons = [
    {
      id: 1,
      title: "Introduction to Photosynthesis",
      description:
        "Learn how plants convert sunlight into energy — covering chlorophyll, light reactions, and more.",
    },
    {
      id: 2,
      title: "The Industrial Revolution",
      description:
        "Explore how technology, society, and economy transformed during the Industrial Revolution.",
    },
    {
      id: 3,
      title: "Basic Geometry Concepts",
      description:
        "Understand the foundations of geometry — lines, angles, shapes, and theorems.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-gray-50 py-16 px-20">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Lessons</h1>

          <div className="flex gap-4">
            <button
              onClick={handleImportClick}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Import Lesson
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.md,.markdown"
              onChange={handleFileChange}
              className="hidden"
            />

            <button
              onClick={() => navigate("/create")}
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Create
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                  {lesson.title}
                </h2>
                <p className="text-gray-600 mb-6">{lesson.description}</p>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  View
                </button>
                <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition">
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="py-6 text-center text-gray-500 border-t">
        © {new Date().getFullYear()} EduQuiz. All rights reserved.
      </footer>
    </div>
  );
}
