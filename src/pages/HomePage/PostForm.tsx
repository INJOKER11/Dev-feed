import { Avatar } from "../../shared/ui/Avatar/Avatar.tsx";
import { Button } from "../../shared/ui/Button/Button.tsx";
import MediaIcon from "../../assets/icons/media.svg?react";
import type { ReactNode } from "react";

export const PostForm = () => {
  return (
    <div className={"border-border flex gap-3 border-b px-4 py-1"}>
      <Avatar
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM37K4xYKB59tximBNCcRrps2NtAiESZ0iMFhoVj-a5w&s=10"
        }
        size={"lg"}
      />
      <div className={"flex w-full flex-col gap-6"}>
        <textarea
          rows={1}
          placeholder={"Post something..."}
          className={
            "placeholder:text-text-secondary text-text-primary mt-4 min-h-5 w-full flex-1 resize-none overflow-hidden bg-transparent outline-none"
          }
        />
        <div className={"flex justify-between"}>
          <div className={"flex"}>
            <ActionIconButton>
              <MediaIcon />
            </ActionIconButton>
          </div>
          <Button variant={"primary"} size={"sm"}>
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

type ActionIconButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

function ActionIconButton({ children, onClick }: ActionIconButtonProps) {
  return (
    <button
      className={"flex h-8.5 w-8.5 cursor-pointer items-center justify-center"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
