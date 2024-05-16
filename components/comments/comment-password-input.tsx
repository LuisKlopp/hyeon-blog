"use client";

import { Dispatch, SetStateAction } from "react";

interface CommentPasswordInputProps {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

export const CommentPasswordInput = ({
  password,
  setPassword,
}: CommentPasswordInputProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPassword(e.target.value);
  };
  return (
    <input
      value={password}
      className="input-custom dark:border-gray06 dark:bg-gray07 dark:placeholder:text-gray05"
      onChange={handleChange}
      placeholder="비밀번호 4자리"
      type="password"
      maxLength={4}
    />
  );
};
