import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "lg";
  className?: string;
};

const variantStyles = {
  primary: "bg-primary",
  secondary: "bg-secondary",
};
const textStyles = {
  primary: "font-bold text-white",
  secondary: "text-text-tertiary",
};

export const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    variant = "primary",
    size = "lg",
    className,
  } = props;
  return (
    <button
      className={`${variantStyles[variant]} ${size === "lg" ? "h-13 rounded-[52px]" : size === "sm" ? "h-7.75 rounded-full px-3.75 py-1.75" : ""} flex cursor-pointer items-center justify-center border border-none outline-none hover:opacity-50 active:opacity-70 ${className ?? ""}`}
      onClick={onClick}
    >
      <span
        className={`${textStyles[variant]} ${
          size === "lg" ? "text-body-lg" : size === "sm" ? "text-body" : ""
        }`}
      >
        {children}
      </span>
    </button>
  );
};
