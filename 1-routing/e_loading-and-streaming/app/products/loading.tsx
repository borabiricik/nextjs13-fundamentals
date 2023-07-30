"use client";

import { BeatLoader, GridLoader, MoonLoader } from "react-spinners";

const ProductsLoading = () => {
  const loaderProps = {
    size: 20,
    color: "white",
  };
  return (
    <div className="fixed inset-0 w-full flex items-center justify-center space-x-20">
      <BeatLoader {...loaderProps} />
      <GridLoader {...loaderProps} />
      <MoonLoader {...loaderProps} />
    </div>
  );
};

export default ProductsLoading;
