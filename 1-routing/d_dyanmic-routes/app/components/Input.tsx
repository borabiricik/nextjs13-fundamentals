"use client";
import classNames from "classnames";
/**
 ** 👀 Note that we're working under app/ directory. So Next will treat this component as a Server Component
 ** So we'll need to use "use client" directive for using hooks, events etc.
 ** You also can try removing "use client" directive from line 1
 */

import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = ({ className = "", ...props }: Props) => {
  const [value, setvalue] = useState<string>("");
  return (
    <input
      className={classNames(
        className,
        "bg-transparent border border-white rounded-md"
      )}
      {...props}
    />
  );
};

export { Input };
