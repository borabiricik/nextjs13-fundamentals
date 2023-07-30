"use client";
import Error from "next/error";

/**
 ** Note that we didn't inherit that red-backgrounded error from under app/
 ** Now we have a custom error for /posts routes
 */

const PostsError = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="bg-purple-300 h-screen flex flex-col items-center justify-center text-4xl space-y-10">
      <p>Something went wrong in Posts Page !</p>
      <button
        onClick={() => reset()}
        className="border border-white rounded-md px-4 py-2"
      >
        Try Again
      </button>
    </div>
  );
};

export default PostsError;
