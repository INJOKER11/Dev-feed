import type { ReactNode } from "react";

type ListPanelProps<T> = {
  title: string;
  renderItem: (item: T) => ReactNode;
  items: T[];
};

export const ListPanel = <T,>(props: ListPanelProps<T>) => {
  const { title, renderItem, items } = props;
  return (
    <div className={"bg-background-secondary rounded-[15px] px-4"}>
      <div
        className={
          "text-text-primary text-title flex h-12 items-center font-bold"
        }
      >
        {title}
      </div>
      <div className={"flex-column"}>{items.map(renderItem)}</div>
      <div
        className={
          "text-primary text-body flex h-12.5 cursor-pointer items-center font-bold"
        }
      >
        Show more
      </div>
    </div>
  );
};
