import { PostList } from "@/components/posts/post-list";
import { Tag } from "@/components/tag";

const BlogPage = async () => {
  return (
    <div className="mx-6 flex flex-col items-center gap-10 py-6 lg:py-10">
      <h1 className="text-xl font-medium">
        Blog
      </h1>
      <div className="flex gap-[14px]">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
      <PostList />
    </div>
  );
};

export default BlogPage;
