import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          EduQuiz
        </Link>

        <nav className="flex items-center gap-8">
            <Link to="/lessons" className="text-gray-700 hover:text-blue-600">
                Lessons
            </Link>
            <Link to="/quiz" className="text-gray-700 hover:text-blue-600">
                Quiz
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
                Login
            </Link>
        </nav>
      </div>
    </header>
  );
}