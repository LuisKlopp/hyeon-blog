import { PostList } from "@/components/posts/post-list";
import { TagBox } from "@/components/tag-box";

const BlogPage = async () => {
  return (
    <div className="flex flex-col items-center gap-10 py-6 lg:py-10">
      <h1 className="text-xl font-medium">
        Blog
      </h1>
      <TagBox />
      <PostList />
    </div>
  );
};

export default BlogPage;
