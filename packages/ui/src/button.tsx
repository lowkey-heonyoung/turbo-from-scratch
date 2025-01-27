"use client";

import { ReactNode } from "react";
import { useBoolean } from "@repo/hooks";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  const { bool, toggleBoolean } = useBoolean();

  return (
    <button className={className} onClick={() => toggleBoolean()}>
      Button3
      {children}
      {JSON.stringify(bool)}
    </button>
  );
};
