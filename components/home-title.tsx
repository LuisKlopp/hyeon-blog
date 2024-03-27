interface HomeTitleProps {
  label: string;
}

export const HomeTitle = ({
  label,
}: HomeTitleProps) => {
  return (
    <div>
      <span className="font-stylish text-4xl font-bold text-blogSoftRed">
        {label}
      </span>
    </div>
  );
};
