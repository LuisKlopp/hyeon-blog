import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Tag } from "@/components/tag";
import { CommentInput } from "@/components/comments/comment-input";
import { CommentTextarea } from "@/components/comments/comment-textarea";
import { CommentButton } from "@/components/comments/comment-button";
import { LikeButton } from "@/components/like/like-button";
import { Comment } from "@/components/comments/comment";
import { formatDate } from "@/lib/utils";

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

const getPostData = async (
  params: PostPageProps["params"],
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${params?.slug[0]}`,
  );
  const data = response.json();
  return data;
};

export default async function PostPage({
  params,
}: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  const { likes } = await getPostData(params);

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
      <p className="my-0 text-xl text-gray03">
        {post?.description}
      </p>
      <p className="my-0 font-light text-gray03">
        {formatDate(post?.date)} &middot;&nbsp;
      </p>
      <hr className="my-4" />
      <div className="tracking-tight text-blogAbsoluteBlack dark:text-gray03">
        <MDXContent code={post.body} />
      </div>
      <LikeButton likes={likes} />
      <hr className="my-[10px] border border-gray06" />
      <span className="mt-[10px] text-base font-medium leading-8 text-blogAbsoluteBlack dark:text-white">
        3개의 댓글
      </span>
      <div className="mt-5 flex flex-col items-end gap-[14px]">
        <CommentInput />
        <CommentTextarea />
        <CommentButton />
        <div className="mt-10 w-full">
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </article>
  );
}
