import React from 'react'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-mainBackground">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-mainDark text-center mb-6">
          Login
        </h2>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm text-mainDark mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-mainLight rounded-lg focus:outline-none focus:ring-2 focus:ring-mainLight"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-mainDark mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-mainLight rounded-lg focus:outline-none focus:ring-2 focus:ring-mainLight"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-mainDark text-white py-2 rounded-lg hover:bg-mainLight transition-colors cursor-pointer"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-mainLight text-center mt-6">
          Don’t have an account?{" "}
          <span className="text-mainDark font-medium cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}