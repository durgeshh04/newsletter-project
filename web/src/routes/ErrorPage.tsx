import React from "react";

export default function ErrorPage() {
  return (
    <div className="p-8 max-w-md mx-auto text-center mt-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
      <p className="text-lg font-medium text-gray-600 mb-4">ErrorPage 404</p>
      <p className="text-sm text-gray-500 mb-6">
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="inline-block px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800"
      >
        Go Back Home
      </a>
    </div>
  );
}
