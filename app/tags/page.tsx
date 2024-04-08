import {
  getAllTags,
  sortTagsByCount,
} from "@/lib/utils";
import { Metadata } from "next";
import { posts } from "#site/content";
import { Tag } from "@/components/tag";

export const metadata: Metadata = {
  title: "Tags",
  description: "Topic I've written about",
};

const TagsPage = async () => {
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="mx-6 flex flex-col items-center gap-10 py-6 lg:py-10">
      <h1 className="text-xl font-medium">
        Tags
      </h1>
      <div className="flex gap-[14px]">
        {sortedTags.map((tag) => (
          <Tag
            tag={tag}
            key={tag}
            count={tags[tag]}
          />
        ))}
      </div>
    </div>
  );
};

export default TagsPage;
