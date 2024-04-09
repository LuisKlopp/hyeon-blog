import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Tag } from "@/components/tag";
interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(
  params: PostPageProps["params"],
) {
  const slug = params?.slug?.join("/");
  const post = posts.find(
    (post) => post.slugAsParams === slug,
  );

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({
  params,
}: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container prose relative mx-auto max-w-3xl py-10 dark:prose-invert">
      <div className="absolute left-[-196px] top-[40px] hidden flex-col gap-[10px] lgx:flex">
        <span className="font-medium leading-5">
          카테고리
        </span>
        <div className="flex flex-col gap-[14px]">
          {post.tags?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
      </div>
      <h1 className="mb-2">{post.title}</h1>
      {post.description ? (
        <p className="mt-0 text-xl text-gray03">
          {post.description}
        </p>
      ) : null}
      <hr className="my-4" />
      <div className="tracking-tight text-blogAbsoluteBlack dark:text-gray03">
        <MDXContent code={post.body} />
      </div>
    </article>
  );
}
