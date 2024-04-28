"use client";

import { Dispatch, SetStateAction } from "react";

interface CommentInputProps {
  setNickname: Dispatch<SetStateAction<string>>;
}

export const CommentNicknameInput = ({
  setNickname,
}: CommentInputProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setNickname(value);
  };
  return (
    <input
      maxLength={20}
      className="input-custom dark:border-gray06 dark:bg-gray07 dark:placeholder:text-gray05"
      onChange={handleChange}
      placeholder="닉네임"
    />
  );
};
