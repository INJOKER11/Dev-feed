import { type InputHTMLAttributes, type ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  startAdornment?: ReactNode;
};

export const Input = (props: InputProps) => {
  const { startAdornment, placeholder, onChange, value } = props;

  return (
    <div className={"relative flex"}>
      {startAdornment && (
        <div className={"absolute top-3 left-3.25"}>{startAdornment}</div>
      )}
      <input
        placeholder={placeholder}
        onChange={(event) => onChange?.(event)}
        value={value ?? ""}
        className={
          "bg-background-secondary placeholder:text-secondary text-text-primary h-10.5 w-full flex-1 rounded-[42px] pl-13.5 outline-none"
        }
      />
    </div>
  );
};
