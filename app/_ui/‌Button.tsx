// components/Button.tsx
import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "full" | "outline" | "form";
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "full",
  type = "button",
  className,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-block text-[2rem] font-semibold px-8 py-6 rounded-[9px] transition-all duration-300 font-inherit";

  const variants = {
    full: "bg-orange-500 text-white hover:bg-orange-600",
    outline:
      "bg-white text-neutral-700 hover:bg-orange-50 shadow-[inset_0_0_0_3px_white]",
    form: "bg-[#45260a] text-[#fdf2e9] self-end px-6 py-5 hover:bg-white hover:text-neutral-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
}
