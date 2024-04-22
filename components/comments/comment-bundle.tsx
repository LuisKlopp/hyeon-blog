import { CommentInput } from "@/components/comments/comment-input";
import { CommentTextarea } from "@/components/comments/comment-textarea";
import { CommentButton } from "@/components/comments/comment-button";
import { CommentItem } from "@/components/comments/comment-item";
import { formatDate } from "@/lib/utils";
import { CommentType } from "@/types/comment.types";

interface CommentsProps {
  comments: CommentType[];
}

export const CommentBundle = ({
  comments,
}: CommentsProps) => {
  return (
    <div className="mt-5 flex flex-col items-end gap-[14px]">
      <CommentInput />
      <CommentTextarea />
      <CommentButton />
      <div className="mt-10 w-full">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            nickname={comment.nickname}
            content={comment.content}
            created_at={formatDate(
              comment.created_at,
            )}
          />
        ))}
      </div>
    </div>
  );
};
