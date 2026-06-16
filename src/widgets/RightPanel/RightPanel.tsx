import { SearchBar } from "./SearchBar.tsx";
import { ListPanel } from "./ListPanel.tsx";
import { TrendsItem } from "./TrendsItem.tsx";
import { FollowItem } from "./FollowItem.tsx";

export type TestTrend = {
  id: number;
  title: string;
  posts: number;
};

export type TestFollowItem = {
  id: number;
  avatar: string;
  title: string;
  username: string;
};

const mockTrends: TestTrend[] = [
  {
    id: 1,
    title: "Test tag",
    posts: 200,
  },
];

const mockFollow: TestFollowItem[] = [
  {
    id: 1,
    title: "Test follow",
    username: "@test_follow",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM37K4xYKB59tximBNCcRrps2NtAiESZ0iMFhoVj-a5w&s=10",
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
      <ListPanel
        title={"Who to follow"}
        items={mockFollow}
        renderItem={(item) => <FollowItem key={item.id} item={item} />}
      />
    </div>
  );
};
