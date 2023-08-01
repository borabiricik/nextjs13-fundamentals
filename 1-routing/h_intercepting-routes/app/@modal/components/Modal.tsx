"use client";
import { useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

const Modal = ({ children }: PropsWithChildren) => {
  const { back } = useRouter();
  return (
    <div className="fixed inset-0 bg-white bg-opacity-5 backdrop-blur-sm w-screen h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-lg flex flex-col space-y-10 py-6 px-4 text-black w-full md:w-1/2">
        {children}
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-black text-white rounded-md"
            onClick={back}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
