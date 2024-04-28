"use client";

import { Dispatch, SetStateAction } from "react";

interface CommentPasswordProps {
  setPassword: Dispatch<SetStateAction<string>>;
}

export const CommentPasswordInput = ({
  setPassword,
}: CommentPasswordProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setPassword(value);
  };
  return (
    <form className="w-full">
      <input
        hidden
        type="text"
        name="email"
        autoComplete="email"
      />
      <input
        className="input-custom dark:border-gray06 dark:bg-gray07 dark:placeholder:text-gray05"
        onChange={handleChange}
        placeholder="비밀번호 숫자 4자리"
        type="password"
        maxLength={4}
        minLength={4}
        autoComplete="new-password"
      />
    </form>
  );
};
