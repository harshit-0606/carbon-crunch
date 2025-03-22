import React from "react";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form action="/login"
      method="post" 
    className="bg-white p-8 rounded-xl shadow-xl w-[400px] space-y-6">
        <h2 className="text-3xl font-semibold text-gray-700 text-center">Login</h2>
        <div>
          <label htmlFor="email" className="block text-gray-600 font-medium text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-600 font-medium text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-lg"
        >
          Login
        </button>

        <p className="text-md text-gray-500 text-center">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
