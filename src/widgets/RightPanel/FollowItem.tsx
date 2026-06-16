import type { TestFollowItem } from "./RightPanel.tsx";
import { Button } from "../../shared/ui/Button/Button.tsx";
import { Avatar } from "../../shared/ui/Avatar/Avatar.tsx";

type FollowItemProps = {
  item: TestFollowItem;
};

export const FollowItem = ({ item }: FollowItemProps) => {
  const { title, avatar, username } = item;
  return (
    <div className={"flex items-center justify-between py-3"}>
      <div className={"flex items-center gap-3"}>
        <Avatar img={avatar} size={"lg"} />
        <div className={"gap flex flex-col gap-0.5"}>
          <span className={"text-text-primary text-body"}>{title}</span>
          <span className={"text-text-secondary text-body"}>{username}</span>
        </div>
      </div>
      <div className={"w-full max-w-18.25"}>
        <Button onClick={() => {}} size={"sm"} variant={"secondary"}>
          Follow
        </Button>
      </div>
    </div>
  );
};
