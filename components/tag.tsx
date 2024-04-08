import { cn } from "@/lib/utils";
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
      className={cn(
        "shadow-custom w-fit rounded-lg border px-4 py-1 tracking-normal text-gray05 no-underline hover:cursor-pointer hover:border-none hover:bg-blogThickRed hover:text-white dark:border-gray03 dark:text-gray03 hover:dark:text-white",
        {
          "border-none bg-blogThickRed text-white dark:text-white":
            current === true,
        },
      )}
      href={`/tags/${slug(tag)}`}
    >
      <span className="text-xs font-light">
        {tag}
        {count ? ` (${count})` : null}
      </span>
    </Link>
  );
};
