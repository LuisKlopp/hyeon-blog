import { handleSortPosts } from "@/lib/utils";
import { PostCard } from "./post-card";
import { posts } from "@/.velite";

export const PostList = () => {
  const displayPosts = handleSortPosts(posts);

  return (
    <div className="mt-5 flex justify-center">
      {displayPosts?.length > 0 ? (
        <ul className="grid grid-cols-3 gap-5 ">
          {displayPosts.map((post) => {
            const {
              slug,
              date,
              title,
              description,
            } = post;
            return (
              <li key={slug}>
                <PostCard
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
    </div>
  );
};
