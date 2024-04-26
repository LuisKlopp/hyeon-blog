"use client";

import { formatDate } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CommentProps {
  nickname: string;
  content: string;
  created_at: string;
}

export const CommentItem = ({
  nickname,
  content,
  created_at,
}: CommentProps) => {
  const [date, setDate] = useState<string>("");

  useEffect(() => {
    setDate(formatDate(created_at));
  }, [created_at, date]);

  return (
    <div className="flex flex-col">
      <div className="mb-1 flex h-8 w-full items-center justify-between">
        <div className="flex gap-1">
          <span className="text-xs font-medium">
            {nickname}
          </span>
          <span className="text-xs font-light text-gray02">
            &middot; {date}
          </span>
        </div>
        <div className="gray flex gap-1 font-light text-gray02 dark:text-gray05">
          <span>수정</span>
          <span>|</span>
          <span>삭제</span>
        </div>
      </div>
      <span className="font-light leading-5 text-black dark:text-gray03">
        {content}
      </span>
      <hr className="my-5 h-[1px] border-none bg-gray02" />
    </div>
  );
};
