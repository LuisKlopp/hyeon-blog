"use client";

import { Dispatch, SetStateAction } from "react";

interface CommentTextareaProps {
  setContent: Dispatch<SetStateAction<string>>;
}

export const CommentTextarea = ({
  setContent,
}: CommentTextareaProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContent(e.target.value);
  };
  return (
    <textarea
      className="input-custom  h-[100px] resize-none dark:border-gray06 dark:bg-gray07 dark:placeholder:text-gray05"
      onChange={handleChange}
      placeholder="댓글을 작성하세요"
    />
  );
};
