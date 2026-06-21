import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  startAdornment?: ReactNode;
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { startAdornment, placeholder, label, ...restProps } = props;

  return (
    <div className={"relative flex shrink-0 flex-col gap-1"}>
      {label && (
        <label className={"text-text-primary text-caption"}>{label}</label>
      )}
      {startAdornment && (
        <div className={"absolute top-3 left-3.25"}>{startAdornment}</div>
      )}
      <input
        ref={ref}
        placeholder={placeholder}
        className={`bg-background-secondary placeholder:text-secondary text-text-primary h-10.5 w-full rounded-[42px] ${startAdornment ? "pl-13.5" : "pl-2"} outline-none`}
        {...restProps}
      />
    </div>
  );
});
