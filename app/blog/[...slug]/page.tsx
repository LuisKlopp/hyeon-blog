import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

const getPostFromParams = async (
  params: PostPageProps["params"],
) => {
  const slug = params?.slug?.join("/");
  const post = posts.find(
    (post) => post.slugAsParams === slug,
  );

  return post;
};

const PostPage = async ({
  params,
}: PostPageProps) => {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container py-6 pb-32 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mt-2">{post.title}</h1>
      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">
          {post.description}
        </p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  );
};

export default PostPage;
