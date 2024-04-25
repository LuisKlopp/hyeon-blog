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
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const localDateString = date.toLocaleString(
    "ko-KR",
    options,
  );
  return localDateString;
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
