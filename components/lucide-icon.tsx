import { cn } from "@/lib/utils";
import { icons } from "lucide-react";
import { HTMLAttributes } from "react";

export interface LucideIconProps
  extends HTMLAttributes<HTMLOrSVGElement> {
  name: keyof typeof icons;
  size?: number;
}

export const LucideIcon = ({
  name,
  size = 24,
  ...props
}: LucideIconProps) => {
  const SelectLucideIcon = icons[name];

  const isClickEvent = !!props.onClick;
  const pointerStyle = isClickEvent
    ? "cursor-pointer"
    : "";

  return (
    <SelectLucideIcon
      size={size}
      className={cn(
        pointerStyle,
        props.className,
      )}
      {...props}
    />
  );
};
