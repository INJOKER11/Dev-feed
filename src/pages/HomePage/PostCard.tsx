import type { TestFollowItem } from "../../widgets/RightPanel/RightPanel.tsx";
import { Avatar } from "../../shared/ui/Avatar/Avatar.tsx";
import type { ReactNode } from "react";
import ReplyIcon from "../../assets/icons/reply.svg?react";
import RepostIcon from "../../assets/icons/retweet.svg?react";
import HeartIcon from "../../assets/icons/heart.svg?react";

export type PostType = {
  id: number;
  text: string;
  author: TestFollowItem;
};

export const PostCard = ({ post }: { post: PostType }) => {
  const { text, author } = post;
  return (
    <div className={"border-border flex gap-3 border-b p-3"}>
      <Avatar img={author.avatar} size={"lg"} />
      <div className={"flex flex-col gap-1.25"}>
        <div className={"flex gap-1"}>
          <span className={"text-body text-text-primary font-bold"}>
            {author.title}
          </span>
          <span className={"text-body text-text-secondary"}>
            {author.username}
          </span>
          <span className={"text-body text-text-secondary"}>. 7 m</span>
        </div>
        <div className={"text-body text-text-primary"}>{text}</div>
        <div className={"flex gap-13"}>
          <ActionButton icon={<ReplyIcon />} count={57} />
          <ActionButton icon={<RepostIcon />} count={557} />
          <ActionButton icon={<HeartIcon />} count={157} />
        </div>
      </div>
    </div>
  );
};

type ActionButtonProps = {
  icon: ReactNode;
  count?: number;
  onClick?: () => void;
};

function ActionButton({ onClick, icon, count }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={"flex h-8.5 cursor-pointer items-center gap-4.75"}
    >
      {icon}
      {count && (
        <span className={"text-text-secondary text-caption"}>{count}</span>
      )}
    </button>
  );
}
