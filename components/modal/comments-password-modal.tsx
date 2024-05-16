"use client";

import React, { useState } from "react";
import { CommentPasswordInput } from "@/components/comments/comment-password-input";
import { CommentButton } from "../comments/comment-button";

interface CommentsPasswordModal {
  commentId: number;
}

const CommentsPasswordModal = ({
  commentId,
}: CommentsPasswordModal) => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] =
    useState("");

  const isAbledClick = password.length === 4;

  const handleVerifyPassword = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/comments/check-password/${commentId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
        }),
      },
    );
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      setErrorMessage("비밀번호가 틀렸습니다");
      return false;
    }
  };

  return (
    <div className="modal-background fixed left-0 top-0 z-30 flex h-full w-screen items-center justify-center">
      <div className="fixed flex w-[90%] max-w-[600px] flex-col gap-4 rounded-lg border bg-white p-4 dark:border-gray04 dark:bg-black">
        <span className="dark:text-gray02">
          댓글 비밀번호를 입력해주세요
        </span>
        <div className="h-10">
          <CommentPasswordInput
            password={password}
            setPassword={setPassword}
          />
        </div>
        <div className="text-right">
          {errorMessage && (
            <div className="flex">
              <span className="text-blogThickRed dark:text-red-500">
                비밀번호가 틀렸습니다.
              </span>
            </div>
          )}
          <CommentButton
            label="입력"
            isAbledClick={isAbledClick}
            handleClick={handleVerifyPassword}
          />
        </div>
      </div>
    </div>
  );
};

export { CommentsPasswordModal };
