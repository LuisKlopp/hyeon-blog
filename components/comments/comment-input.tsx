"use client";

import { Dispatch, SetStateAction } from "react";

interface CommentInputProps {
  nickname: string;
  setNickname: Dispatch<SetStateAction<string>>;
}

export const CommentInput = ({
  nickname,
  setNickname,
}: CommentInputProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNickname(e.target.value);
  };
  return (
    <input
      value={nickname}
      className="input-custom dark:border-gray06 dark:bg-gray07 dark:placeholder:text-gray05"
      onChange={handleChange}
      placeholder="이름"
    />
  );
};
