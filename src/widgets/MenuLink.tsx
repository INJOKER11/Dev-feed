import type { ReactElement } from "react";

export const MenuLink = ({
  title,
  icon,
}: {
  title: string;
  icon: ReactElement;
}) => {
  return (
    <div
      className={"hover:bg-hover flex cursor-pointer items-center gap-5 p-3.25"}
    >
      {icon}
      <span className={"text-text-primary text-title leading-none font-bold"}>
        {title}
      </span>
    </div>
  );
};
