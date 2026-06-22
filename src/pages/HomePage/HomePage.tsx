import { PostCard } from "./PostCard.tsx";
import { PostForm } from "./PostForm.tsx";
import type { Post } from "../../shared/types/Post.ts";

const mockPosts: Post[] = [
  {
    id: 1,
    text: 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
    author: {
      id: 1,
      name: "Test follow",
      username: "@test_follow",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM37K4xYKB59tximBNCcRrps2NtAiESZ0iMFhoVj-a5w&s=10",
    },
  },
];

export const HomePage = () => {
  return (
    <div className={"border-border flex w-full max-w-150 flex-col border-x"}>
      <div
        className={
          "border-border text-heading text-text-primary border-b px-3.75 py-4 font-bold"
        }
      >
        Home
      </div>
      <PostForm />
      {mockPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
