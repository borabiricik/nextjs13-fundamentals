"use client";

import classNames from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";

/**
 ** 👀 Note that we're working under app/ directory. So Next will treat this component as a Server Component
 ** So we'll need to use "use client" directive for using hooks, events etc.
 ** You also can try removing "use client" directive from line 1
 */

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = ({ children, className = "", ...props }: Props) => {
  return (
    <button
      className={classNames(className, "bg-white text-black px-4 py-2")}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
