interface HomeTitleProps {
  label: string;
}

const HomeTitle = ({ label }: HomeTitleProps) => {
  return (
    <div>
      <span className="font-stylish text-4xl font-bold text-blogSoftRed">
        {label}
      </span>
    </div>
  );
};

export default HomeTitle;
