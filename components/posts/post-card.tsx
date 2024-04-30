import Link from "next/link";
import Image from "next/image";

import { formatDate } from "@/lib/utils";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  detail?: string;
  date: string;
  src?: string;
}

export function PostCard({
  slug,
  title,
  description,
  detail,
  date,
  src,
}: PostItemProps) {
  return (
    <Link href={"/" + slug} className="w-full">
      <div className="shadow-custom h-[400px] max-w-[400px] transition ease-linear hover:scale-105 hover:shadow-lg dark:border-none">
        {src ? (
          <div className="relative h-[200px] w-full">
            <Image
              alt="post-image"
              src={src}
              priority
              sizes="100%"
              fill
              className="h-[200px] w-full rounded-t-lg"
            />
          </div>
        ) : (
          <div className="2-full h-[200px] rounded-t-lg bg-[#d9d9d9] dark:bg-gray05" />
        )}
        <div className="flex h-[198px] flex-col justify-between overflow-hidden rounded-b-lg p-5 dark:border-none dark:bg-gray06">
          <div className="flex flex-col gap-2">
            <h2 className="line-clamp-1 text-lg font-medium leading-7 ">
              {title}
            </h2>
            <div className="line-clamp-1 text-sm font-medium leading-5 text-gray05 dark:text-gray01">
              {description}
            </div>
            <div className="line-clamp-3 text-sm font-light leading-5 text-gray04 dark:text-gray02">
              {detail}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-light leading-4 text-gray05 dark:text-gray01">
              {formatDate(date)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
