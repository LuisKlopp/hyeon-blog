import { cn } from "@/lib/utils";

interface CallOutProps {
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
}

export const Callout = ({
  children,
  type = "default",
  ...props
}: CallOutProps) => {
  return (
    <div
      className={cn(
        "border-1-4 my-6 w-full items-start rounded-md border px-4 dark:max-w-none ",
        {
          "border-red-988 bg-red-50 dark:prose":
            type === "danger",
          "border-yellow-988 bg-yellow-50 dark:prose":
            type === "warning",
        },
      )}
      {...props}
    >
      {children}
    </div>
  );
};
