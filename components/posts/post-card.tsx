import { Calendar } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Swiss from "@/public/swiss.png";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export function PostCard({
  slug,
  title,
  description,
  date,
}: PostItemProps) {
  return (
    <Link href={slug}>
      <article className="min-h-80 rounded-lg border transition ease-linear hover:scale-105 hover:shadow-lg">
        <Image
          alt="image"
          src={Swiss}
          priority
          className="h-52 w-full rounded-t-lg"
        />
        <div className="flex min-h-44 flex-col justify-between p-4">
          <div>
            <h2 className="line-clamp-2 text-lg font-bold">
              {title}
            </h2>
          </div>
          <div className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </div>
          <div>
            <dl>
              <dd className="flex items-center gap-1 text-sm sm:text-base">
                <Calendar className="h-4 w-4" />
                <time dateTime={date}>
                  {formatDate(date)}
                </time>
              </dd>
            </dl>
          </div>
        </div>
      </article>
    </Link>
  );
}
