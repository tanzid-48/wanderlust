"use client";

import { useRouter } from "next/navigation";
import { AlertTriangle } from "lucide-react";

const Error = ({ error, reset }) => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center">
            <AlertTriangle size={40} className="text-red-400" />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h2 className="text-3xl font-serif font-semibold text-slate-800">
            Something Went Wrong
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            {error?.message || "An unexpected error occurred. Please try again."}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-teal-500 text-white text-sm font-semibold rounded hover:bg-teal-600 transition-all"
          >
            Try Again
          </button>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2 border border-slate-300 text-slate-700 text-sm font-semibold rounded hover:bg-slate-50 transition-all"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;