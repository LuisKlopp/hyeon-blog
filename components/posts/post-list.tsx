import { handleSortPosts } from "@/lib/utils";
import { PostCard } from "./post-card";
import { posts } from "@/.velite";

export const PostList = () => {
  const displayPosts = handleSortPosts(posts);

  return (
    <div className="flex justify-center">
      {displayPosts?.length > 0 ? (
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
          {displayPosts.map((post) => {
            const {
              slug,
              date,
              title,
              description,
              detail,
            } = post;
            return (
              <li key={slug}>
                <PostCard
                  slug={slug}
                  date={date}
                  detail={detail}
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
