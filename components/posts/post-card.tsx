import Link from "next/link";
import Image from "next/image";
import Swiss from "@/public/swiss.png";

import { formatDate } from "@/lib/utils";

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
    <Link href={slug} className="w-full">
      <div className="max-w-[400px] transition ease-linear hover:scale-105 hover:shadow-lg dark:border-none">
        <Image
          alt="image"
          src={Swiss}
          priority
          className="h-[200px] w-full rounded-t-lg"
        />
        <div className="flex h-[198px] flex-col justify-between rounded-b-lg border border-gray01 p-5 dark:border-none dark:bg-gray06">
          <div className="flex flex-col gap-2">
            <h2 className="line-clamp-1 text-lg font-medium leading-7 ">
              {title}
            </h2>
            <div className="line-clamp-1 text-sm font-medium leading-5 text-gray05 dark:text-gray01">
              {description}
            </div>
            <div className="line-clamp-3 text-sm font-light leading-5 text-gray04 dark:text-gray02">
              Next.js14 버전 공부할 겸 블로그를
              만들었는데 create next a pp명령어로
              한번에 다 세팅하는 방법도 있겠지만
              (공홈에서도 권장)이왕 공부할거
              일일이 필요한 패키지를 설치하고
              파일을...
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
