import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import { Callout } from "./callout";

const StyledImage = ({
  src,
  alt,
  height,
  width,
  ...props
}: {
  src: string;
  alt: string;
  height: string;
  width: string;
}) => {
  return (
    <div
      style={{ height, width }}
      className="relative overflow-hidden rounded-lg border-2 border-[#920028]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100%"
        className="m-0"
        {...props}
      />
    </div>
  );
};

export default StyledImage;

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image: StyledImage,
  Callout,
};

interface MdxProps {
  code: string;
}

export const MDXContent = ({
  code,
}: MdxProps) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};
