"use client";

/**
 ** "use client" directive is optional. But I suggest if you're using third library or using "state" in loading,
 **  It would be better to use "use client" directive
 */

import { BeatLoader, GridLoader, MoonLoader } from "react-spinners";

const ProductsLoading = () => {
  const loaderProps = {
    size: 20,
    color: "white",
  };
  return (
    <div className="fixed inset-0 w-full flex flex-col items-center justify-center space-y-10">
      <p className="text-3xl">Put your loading animation, image etc.</p>
      <div className="flex items-center space-x-20">
        <BeatLoader {...loaderProps} />
        <GridLoader {...loaderProps} />
        <MoonLoader {...loaderProps} />
        {/* Or you can use your custom loaders in here including Lottie, skeleton loader, image etc. */}
      </div>
    </div>
  );
};

export default ProductsLoading;
