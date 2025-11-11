export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 bg-linear-to-b from-blue-50 to-white">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
          Empower Teachers with{" "}
          <span className="text-blue-600">AI-Generated Quizzes</span>
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Write lessons, let AI craft tailored quizzes, and export them as PDFs
          or JSON. Save time, inspire learning.
        </p>

        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
          Start Creating
        </button>
      </main>

      <section id="features" className="py-20 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Why EduQuiz?
        </h3>

        <div className="grid grid-cols-3 gap-8 px-20">
          <FeatureCard
            title="Write Lessons Easily"
            description="A distraction-free editor designed for educators to focus on content creation."
          />
          <FeatureCard
            title="AI Quiz Generation"
            description="Instantly generate intelligent, context-based quizzes using AI."
          />
          <FeatureCard
            title="Export & Share"
            description="Export quizzes as PDF or JSON and share with your students effortlessly."
          />
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500 border-t">
        © {new Date().getFullYear()} EduQuiz. All rights reserved.
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
      <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
