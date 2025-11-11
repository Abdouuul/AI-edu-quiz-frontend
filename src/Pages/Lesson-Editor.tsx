// src/pages/CreateLesson.jsx
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function CreateLesson() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-gray-50 py-12 px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Create New Lesson
          </h1>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="title">
              Lesson Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter lesson title..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="content">
                Lesson Content (Markdown)
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your lesson here using Markdown..."
                className="w-full h-[500px] p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
              />
            </div>

            <div>
              <h2 className="text-gray-700 mb-2">Preview</h2>
              <div className="w-full h-[500px] p-4 border rounded-lg bg-white overflow-auto">
              <div className="prose max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content || "Start typing your lesson..."}
                </ReactMarkdown>
              </div>
            </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Save Lesson
            </button>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-gray-500 border-t">
        © {new Date().getFullYear()} EduQuiz. All rights reserved.
      </footer>
    </div>
  );
}
