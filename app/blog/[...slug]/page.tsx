import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import Link from "next/link";

import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Tag } from "@/components/tag";

import { CommentType } from "@/types/comment.types";
import { CommentBundle } from "@/components/comments/comment-bundle";
import { LikeButton } from "@/components/like/like-button";
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
    {
      cache: "no-store",
    },
  );
  const data = response.json();
  return data;
};

const getCommentData = async (
  id: number,
): Promise<CommentType[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/comments/posts/${id}`,
    {
      cache: "default",
    },
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

  const { likes, views, id } =
    await getPostData(params);

  const comments = await getCommentData(id);

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
      <div className="flex flex-col">
        <h1 className="mb-2">{post.title}</h1>
        <span className="text-xl text-gray03">
          {post?.description}
        </span>
        <span className="font-light text-gray03">
          {formatDate(post?.date)} &middot;&nbsp;
          {views}회
        </span>
      </div>
      <hr className="my-4" />
      <div className="tracking-tight text-blogAbsoluteBlack dark:text-gray03">
        <MDXContent code={post.body} />
      </div>
      <div className="flex items-center gap-[10px]">
        <LikeButton likes={likes} postId={id} />
        <Link
          href="/blog"
          className="flex h-10 items-center rounded-lg bg-gray01 px-4 font-medium no-underline dark:bg-gray06"
        >
          목록으로
        </Link>
      </div>
      <hr className="my-[10px] border border-gray06" />
      <CommentBundle
        comments={comments}
        postId={id}
      />
    </article>
  );
}
