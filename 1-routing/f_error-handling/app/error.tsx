"use client";

import Error from "next/error";
import { useEffect } from "react";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    // If you want to send a log to your logger,
    // you should do it in here.
    // P.S: Since we "must" use Client Component to use NextJS 13's error handling system,
    // you can use hooks.
  }, [error]);

  return (
    <div className="bg-red-400 h-screen w-screen flex items-center justify-center text-5xl bg-opacity-70">
      <div className="flex flex-col items-center space-y-10">
        <span>Something went wrong in Home page!</span>
        <button
          className="border border-white rounded-md px-4 py-2 text-2xl"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
