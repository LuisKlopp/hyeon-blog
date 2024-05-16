"use client";

import React from "react";
// import { CommentPasswordInput } from "@/components/comments/comment-password-input";

export const CommentsPasswordModal = () => {
  return (
    <div className="modal-background fixed left-0 top-0 z-30 flex h-full w-screen items-center justify-center bg-zinc-400">
      <div className="fixed flex h-28 w-[90%] max-w-[600px] items-center justify-center rounded-lg bg-stone-700">
        <div className="h-10 w-full">
          {/* <CommentPasswordInput /> */}
        </div>
      </div>
    </div>
  );
};
