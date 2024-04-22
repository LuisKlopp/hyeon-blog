"use client";

import { Dispatch, SetStateAction } from "react";

interface CommentInputProps {
  setNickname: Dispatch<SetStateAction<string>>;
}

export const CommentInput = ({
  setNickname,
}: CommentInputProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNickname(e.target.value);
  };
  return (
    <input
      className="input-custom dark:border-gray06 dark:bg-gray07 dark:placeholder:text-gray05"
      onChange={handleChange}
      placeholder="이름"
    />
  );
};
