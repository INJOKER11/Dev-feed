import type { User } from "./User.ts";

export type Post = {
  id: number;
  text: string;
  author: User;
};
