import { PostList } from "@/components/posts/post-list";
import { posts } from "@/.velite";
import {
  getAllTags,
  sortTagsByCount,
} from "@/lib/utils";
import { Tag } from "@/components/tag";

const BlogPage = async () => {
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="mx-6 flex flex-col items-center gap-10 py-6 lg:py-10">
      <h1 className="text-xl font-medium">
        Blog
      </h1>
      <div className="flex gap-[14px]"></div>
      <PostList />
    </div>
  );
};

export default BlogPage;
