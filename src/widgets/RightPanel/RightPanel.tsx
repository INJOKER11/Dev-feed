import { SearchBar } from "./SearchBar.tsx";
import { ListPanel } from "./ListPanel.tsx";
import { TrendsItem } from "./TrendsItem.tsx";

export type TestTrend = {
  id: number;
  title: string;
  posts: number;
};

const mockTrends: TestTrend[] = [
  {
    id: 1,
    title: "Test tag",
    posts: 200,
  },
];

export const RightPanel = () => {
  return (
    <div className={"ms-7.5 flex w-full max-w-90 flex-col gap-3 pe-2.5 pt-1.5"}>
      <SearchBar />
      <ListPanel
        title={"Trends for you"}
        items={mockTrends}
        renderItem={(item) => <TrendsItem key={item.id} item={item} />}
      />
    </div>
  );
};
