import React, { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const configuredApiBase: unknown = import.meta.env.VITE_API_BASE_URL;
      const apiBase =
        typeof configuredApiBase === "string" && configuredApiBase
          ? configuredApiBase
          : "/api";

      const response = await fetch(`${apiBase}/v1/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const responseData: unknown = await response.json();
      const data: { message?: string } =
        typeof responseData === "object" &&
        responseData !== null &&
        "message" in responseData &&
        typeof responseData.message === "string"
          ? { message: responseData.message }
          : {};

      if (!response.ok) {
        throw new Error(data.message || "Failed to subscribe");
      }

      setStatus("success");
      setMessage(data.message || "Successfully signed up!");
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md border border-gray-200 mt-10">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        newsletter-signup
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Subscribe to get our latest updates.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {status === "error" && (
          <p className="text-xs text-red-600 bg-red-50 p-2 rounded border border-red-200">
            {message}
          </p>
        )}

        {status === "success" && (
          <p className="text-xs text-green-600 bg-green-50 p-2 rounded border border-green-200">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-2 px-4 bg-blue-600 text-white font-medium text-sm rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
}
