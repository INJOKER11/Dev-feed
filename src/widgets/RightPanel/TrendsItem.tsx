import type { TestTrend } from "./RightPanel.tsx";

type TrendsItemProps = {
  item: TestTrend;
};

export const TrendsItem = (props: TrendsItemProps) => {
  const { item } = props;

  return (
    <div className={"flex flex-col gap-1"}>
      <span className={"text-text-secondary text-caption"}>
        Trending in Ukraine
      </span>
      <span className={"text-text-primary text-body font-bold"}>
        {item.title}
      </span>
      <span className={"text-text-secondary text-caption"}>
        {item.posts.toString()} Posts
      </span>
    </div>
  );
};
