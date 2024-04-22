"use client";

import { Dispatch, SetStateAction } from "react";

interface CommentButtonProps {
  handleAddComment: () => Promise<void>;
  setNickname: Dispatch<SetStateAction<string>>;
  setContent: Dispatch<SetStateAction<string>>;
}

export const CommentButton = ({
  handleAddComment,
  setNickname,
  setContent,
}: CommentButtonProps) => {
  const handleClick = async () => {
    await handleAddComment(); // 댓글 추가 기능 실행
    setNickname(""); // nickname 상태 초기화
    setContent(""); // content 상태 초기화
  };

  return (
    <button
      onClick={handleClick}
      className="h-10 w-24 rounded-lg bg-gray07 px-5 py-1 text-sm tracking-[-1px] text-white dark:bg-gray06"
    >
      댓글 작성
    </button>
  );
};
