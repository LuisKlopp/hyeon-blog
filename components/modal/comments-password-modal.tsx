"use client";

import React, { useState } from "react";
import { CommentPasswordInput } from "@/components/comments/comment-password-input";
import { CommentButton } from "../comments/comment-button";

export const CommentsPasswordModal = () => {
  const [password, setPassword] = useState("");

  const isAbledClick = password.length === 4;
  const handleClick = async () => {
    console.log("s");
    return Promise.resolve();
  };
  return (
    <div className="modal-background fixed left-0 top-0 z-30 flex h-full w-screen items-center justify-center">
      <div className="fixed flex w-[90%] max-w-[600px] flex-col gap-4 rounded-lg border border-gray04 bg-black p-4">
        <span className="text-gray02">
          댓글 비밀번호를 입력해주세요
        </span>
        <div className="h-10">
          <CommentPasswordInput
            password={password}
            setPassword={setPassword}
          />
        </div>
        <div className="text-right">
          <CommentButton
            isAbledClick={isAbledClick}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
