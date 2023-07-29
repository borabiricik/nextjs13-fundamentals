"use client";
import classNames from "classnames";
import Link from "next/link";
import { PropsWithChildren, useState } from "react";

interface AuthNavButtonProps extends PropsWithChildren {
  to: string;
}

const AuthNavButton = ({ children, to }: AuthNavButtonProps) => {
  const [isHovering, setisHovering] = useState(false);
  return (
    <Link
      onMouseEnter={() => setisHovering(true)}
      onMouseLeave={() => setisHovering(false)}
      href={to}
      className={classNames(
        "text-white transition-transform",
        isHovering ? "rotate-12" : "rotate-0"
      )}
    >
      {children}
    </Link>
  );
};

export { AuthNavButton };
