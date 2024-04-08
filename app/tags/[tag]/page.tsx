import { posts } from "#site/content";
import { PostCard } from "@/components/posts/post-card";
import { Tag } from "@/components/tag";
import {
  getAllTags,
  getPostsByTagSlug,
  sortTagsByCount,
} from "@/lib/utils";
import { slug } from "github-slugger";
import { Metadata } from "next";

interface TagPageProps {
  params: {
    tag: string;
  };
}

export const generateMetadata = async ({
  params,
}: TagPageProps): Promise<Metadata> => {
  const { tag } = params;
  return {
    title: `RyuHyeon | ${tag}`,
    description: `Posts on the topic of ${tag}`,
  };
};

export const generateStaticParams = () => {
  const tags = getAllTags(posts);
  const paths = Object.keys(tags).map((tag) => ({
    tag: slug(tag),
  }));
  return paths;
};

const TagPage = ({ params }: TagPageProps) => {
  const { tag } = params;
  const title =
    tag.charAt(0).toUpperCase() + tag.slice(1);

  const displayPosts = getPostsByTagSlug(
    posts,
    tag,
  );
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="mx-6 flex flex-col items-center gap-10 py-6 lg:py-10">
      <h1 className="text-xl font-medium">
        {title}
      </h1>
      <div className="flex gap-[14px]">
        {sortedTags.map((tag) => (
          <Tag
            tag={tag}
            key={tag}
            count={tags[tag]}
            current={title === tag}
          />
        ))}
      </div>
      <div>
        {displayPosts?.length ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {displayPosts.map((post) => {
              const {
                slug,
                title,
                description,
                date,
                detail,
              } = post;
              return (
                <PostCard
                  key={description}
                  slug={slug}
                  date={date}
                  detail={detail}
                  title={title}
                  description={description}
                />
              );
            })}
          </div>
        ) : (
          <p>Nothing to see here yet</p>
        )}
      </div>
    </div>
  );
};

export default TagPage;
