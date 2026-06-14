import type { ReactNode } from "react";

type ButtonProps = {
  text: ReactNode;
  onClick: () => void;
};

export const Button = (props: ButtonProps) => {
  const { text, onClick } = props;
  return (
    <button
      className={
        "bg-primary text-body-lg flex h-13 flex-1 cursor-pointer items-center justify-center rounded-[52px] border border-none font-bold text-white outline-none hover:opacity-50 active:opacity-70"
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};
