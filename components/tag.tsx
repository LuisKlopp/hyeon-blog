import { slug } from "github-slugger";
import Link from "next/link";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
  className?: string;
}

export const Tag = ({
  tag,
  current,
  count,
}: TagProps) => {
  return (
    <Link
      className="w-fit rounded-lg border border-gray05 px-4 py-1 tracking-normal text-gray05  hover:cursor-pointer hover:bg-blogThickRed  hover:text-white dark:border-gray03 dark:text-gray03 hover:dark:text-white"
      href={`/tags/${slug(tag)}`}
    >
      <span className="text-xs font-light">
        {tag}
        {count ? `(${count})` : null}
      </span>
    </Link>
  );
};
