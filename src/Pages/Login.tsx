import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex h-screen">
      {/* Left side image */}
      <div className="w-3/5 bg-blue-100">
        <img
          src="https://images.unsplash.com/photo-1584697964199-11fdd10e8f49?auto=format&fit=crop&w=1600&q=80"
          alt="Login-Page-Photo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side login form */}
      <div className="w-2/5 flex items-center justify-center bg-white">
        <div className="w-3/4 max-w-md">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">EduQuiz</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Login</h2>

          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition mt-4"
            >
              Sign In
            </button>

            <p className="text-sm text-gray-500 mt-4">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}