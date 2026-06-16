import { MenuLink } from "./MenuLink.tsx";
import HomeIcon from "../assets/icons/home.svg?react";
import ExploreIcon from "../assets/icons/explore.svg?react";
import NotificationsIcon from "../assets/icons/notifications.svg?react";
import MessagesIcon from "../assets/icons/messages.svg?react";
import BookmarksIcon from "../assets/icons/bookmarks.svg?react";
import ProfileIcon from "../assets/icons/profile.svg?react";
import MoreIcon from "../assets/icons/more.svg?react";
import { Button } from "../shared/ui/Button/Button.tsx";

export const Sidebar = () => {
  return (
    <div className={"flex w-full max-w-68.75 flex-col gap-4 px-3"}>
      <div className={"gap flex flex-col gap-2"}>
        <span className={"text-text-primary p-3.25 text-3xl"}>Dev feed</span>
        <MenuLink title={"Home"} icon={<HomeIcon className={"h-6 w-6"} />} />
        <MenuLink
          title={"Explore"}
          icon={<ExploreIcon className={"h-6 w-6"} />}
        />
        <MenuLink
          title={"Notifications"}
          icon={<NotificationsIcon className={"h-6 w-6"} />}
        />
        <MenuLink
          title={"Messages"}
          icon={<MessagesIcon className={"h-6 w-6"} />}
        />
        <MenuLink
          title={"Bookmarks"}
          icon={<BookmarksIcon className={"h-6 w-6"} />}
        />
        <MenuLink
          title={"Profile"}
          icon={<ProfileIcon className={"h-6 w-6"} />}
        />
        <MenuLink title={"More"} icon={<MoreIcon className={"h-6 w-6"} />} />
      </div>
      <div className={"flex w-full max-w-56.25"}>
        <Button className={"flex-1"} onClick={() => {}}>
          Post
        </Button>
      </div>
    </div>
  );
};
