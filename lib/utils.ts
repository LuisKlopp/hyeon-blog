import { Post } from "@/.velite";
import { type ClassValue, clsx } from "clsx";
import { slug } from "github-slugger";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatDate = (
  dateString: string,
) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1 해줌
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

export const handleSortPosts = (
  posts: Post[],
) => {
  return posts.sort((a, b) => {
    return (
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
    );
  });
};

export const getAllTags = (posts: Post[]) => {
  const tags: Record<string, number> = {};
  posts.forEach((post) => {
    post.tags?.forEach((tag) => {
      tags[tag] = (tags[tag] ?? 0) + 1;
    });
  });
  return tags;
};

export const sortTagsByCount = (
  tags: Record<string, number>,
) => {
  return Object.keys(tags).sort((a, b) => {
    const diff = tags[b] - tags[a];
    if (diff !== 0) return diff;
    return a.localeCompare(b);
  });
};

export const getPostsByTagSlug = (
  posts: Post[],
  tag: string,
) => {
  return posts.filter((post) => {
    if (!post.tags) return false;
    const slugifiedTags = post.tags.map((tag) =>
      slug(tag),
    );
    return slugifiedTags.includes(tag);
  });
};
