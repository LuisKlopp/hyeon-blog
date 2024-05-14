"use client";

import { Dispatch, SetStateAction } from "react";

interface CommentPasswordInputProps {
  setPassword: Dispatch<SetStateAction<string>>;
}

export const CommentPasswordInput = ({
  setPassword,
}: CommentPasswordInputProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPassword(e.target.value);
  };
  return (
    <input
      className="input-custom dark:border-gray06 dark:bg-gray07 dark:placeholder:text-gray05"
      onChange={handleChange}
      placeholder="비밀번호 4자리"
    />
  );
};
