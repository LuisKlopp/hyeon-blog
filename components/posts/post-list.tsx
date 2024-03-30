import { handleSortPosts } from "@/lib/utils";
import { PostCard } from "./post-card";
import { posts } from "@/.velite";

export const PostList = () => {
  const displayPosts = handleSortPosts(posts);

  return (
    <div className="mt-5">
      <h1 className="mb-5 mt-[60px] pl-[calc((100%-400px)/2)] text-xl font-medium md:pl-[calc((100%-820px)/2)] lg:pl-[calc((100%-1240px)/2)]">
        Most Viewed
      </h1>
      <div className="flex justify-center">
        {displayPosts?.length > 0 ? (
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
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
    </div>
  );
};
